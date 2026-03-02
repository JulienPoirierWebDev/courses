## 🎯 Objectifs de validation (pour l'étudiant)

À travers cet exercice, vous devez montrer que vous savez :

* concevoir une petite base relationnelle cohérente (FK, contraintes),
* écrire des requêtes SQL avec `JOIN`, `GROUP BY`, `WHERE`, `ORDER BY`,
* sécuriser une API Express avec des requêtes paramétrées,
* gérer des erreurs HTTP de manière cohérente,
* utiliser une transaction pour éviter un état incohérent.

---

## 1) Correction SQL

### `schema.sql`

```sql
PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  year INTEGER NOT NULL CHECK (year >= 0),
  author_id INTEGER NOT NULL,
  available INTEGER NOT NULL DEFAULT 1 CHECK (available IN (0, 1)),
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE RESTRICT
);

CREATE TABLE loans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER NOT NULL,
  borrower_name TEXT NOT NULL,
  loan_date TEXT NOT NULL DEFAULT (DATE('now')),
  return_date TEXT NULL,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE RESTRICT
);
```

### `seed.sql`

```sql
INSERT INTO authors (name, country) VALUES
('Victor Hugo', 'France'),
('Jules Verne', 'France'),
('George Orwell', 'Royaume-Uni');

INSERT INTO books (title, year, author_id, available) VALUES
('Les Miserables', 1862, 1, 1),
('Notre-Dame de Paris', 1831, 1, 1),
('Vingt mille lieues sous les mers', 1870, 2, 1),
('1984', 1949, 3, 1);
```

### Requêtes SQL attendues (exemples)

#### Liste des livres avec auteur (`JOIN`)

```sql
SELECT
  b.id,
  b.title,
  b.year,
  b.available,
  a.name AS author_name
FROM books b
JOIN authors a ON a.id = b.author_id
ORDER BY b.title ASC;
```

#### Statistiques : nombre de livres par auteur (`GROUP BY`)

```sql
SELECT
  a.id,
  a.name,
  COUNT(b.id) AS books_count
FROM authors a
LEFT JOIN books b ON b.author_id = a.id
GROUP BY a.id, a.name
ORDER BY books_count DESC, a.name ASC;
```

---

## 2) Correction Node.js / Express (référence)

### Arborescence minimale

```text
bibliotheque-api/
  package.json
  app.js
  library.db
  schema.sql
  seed.sql
```

### Dépendances

```bash
npm init -y
npm install express better-sqlite3
```

### `app.js` (correction compacte)

```js
const fs = require("fs");
const path = require("path");
const express = require("express");
const Database = require("better-sqlite3");

const app = express();
app.use(express.json());

const DB_PATH = path.join(__dirname, "library.db");
const db = new Database(DB_PATH);
db.pragma("foreign_keys = ON");

// Initialisation simple pour le TP (si base vide)
const schemaPath = path.join(__dirname, "schema.sql");
const seedPath = path.join(__dirname, "seed.sql");
if (!fs.existsSync(DB_PATH) || db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='authors'").get() == null) {
  const schema = fs.readFileSync(schemaPath, "utf8");
  const seed = fs.readFileSync(seedPath, "utf8");
  db.exec(schema);
  db.exec(seed);
}

function toBook(row) {
  if (!row) return row;
  return { ...row, available: Boolean(row.available) };
}

function badRequest(res, message) {
  return res.status(400).json({ error: message });
}

// Healthcheck simple
app.get("/", (_req, res) => {
  res.json({ ok: true, service: "bibliotheque-api" });
});

// AUTHORS
app.get("/authors", (_req, res) => {
  const rows = db.prepare("SELECT id, name, country FROM authors ORDER BY name ASC").all();
  res.json(rows);
});

app.post("/authors", (req, res) => {
  const { name, country } = req.body;
  if (!name || !country) return badRequest(res, "name et country sont obligatoires");

  const stmt = db.prepare("INSERT INTO authors (name, country) VALUES (?, ?)");
  const result = stmt.run(name.trim(), country.trim());
  const author = db.prepare("SELECT id, name, country FROM authors WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(author);
});

// BOOKS
app.get("/books", (req, res) => {
  const q = (req.query.q || "").toString().trim();
  const baseSql = `
    SELECT
      b.id, b.title, b.year, b.available, b.author_id,
      a.name AS author_name
    FROM books b
    JOIN authors a ON a.id = b.author_id
  `;

  let rows;
  if (q) {
    rows = db
      .prepare(`${baseSql} WHERE b.title LIKE ? ORDER BY b.title ASC`)
      .all(`%${q}%`)
      .map(toBook);
  } else {
    rows = db.prepare(`${baseSql} ORDER BY b.title ASC`).all().map(toBook);
  }

  res.json(rows);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const row = db.prepare(`
    SELECT
      b.id, b.title, b.year, b.available, b.author_id,
      a.name AS author_name
    FROM books b
    JOIN authors a ON a.id = b.author_id
    WHERE b.id = ?
  `).get(id);

  if (!row) return res.status(404).json({ error: "Livre introuvable" });
  res.json(toBook(row));
});

app.post("/books", (req, res) => {
  const { title, year, author_id } = req.body;
  if (!title || year == null || author_id == null) {
    return badRequest(res, "title, year et author_id sont obligatoires");
  }

  const author = db.prepare("SELECT id FROM authors WHERE id = ?").get(author_id);
  if (!author) return res.status(404).json({ error: "Auteur introuvable" });

  const result = db
    .prepare("INSERT INTO books (title, year, author_id, available) VALUES (?, ?, ?, 1)")
    .run(title.trim(), Number(year), Number(author_id));

  const created = db.prepare("SELECT id, title, year, author_id, available FROM books WHERE id = ?").get(result.lastInsertRowid);
  res.status(201).json(toBook(created));
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, year, author_id, available } = req.body;
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const existing = db.prepare("SELECT id FROM books WHERE id = ?").get(id);
  if (!existing) return res.status(404).json({ error: "Livre introuvable" });

  if (author_id != null) {
    const author = db.prepare("SELECT id FROM authors WHERE id = ?").get(Number(author_id));
    if (!author) return res.status(404).json({ error: "Auteur introuvable" });
  }

  const current = db.prepare("SELECT * FROM books WHERE id = ?").get(id);
  const next = {
    title: title != null ? String(title).trim() : current.title,
    year: year != null ? Number(year) : current.year,
    author_id: author_id != null ? Number(author_id) : current.author_id,
    available: available != null ? (available ? 1 : 0) : current.available,
  };

  db.prepare(`
    UPDATE books
    SET title = ?, year = ?, author_id = ?, available = ?
    WHERE id = ?
  `).run(next.title, next.year, next.author_id, next.available, id);

  const updated = db.prepare("SELECT id, title, year, author_id, available FROM books WHERE id = ?").get(id);
  res.json(toBook(updated));
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return badRequest(res, "id invalide");

  const activeLoan = db.prepare(`
    SELECT id
    FROM loans
    WHERE book_id = ? AND return_date IS NULL
  `).get(id);
  if (activeLoan) {
    return res.status(409).json({ error: "Suppression impossible : livre emprunte" });
  }

  const result = db.prepare("DELETE FROM books WHERE id = ?").run(id);
  if (result.changes === 0) return res.status(404).json({ error: "Livre introuvable" });

  res.status(204).send();
});

// LOANS
app.post("/loans", (req, res) => {
  const { book_id, borrower_name } = req.body;
  if (book_id == null || !borrower_name) {
    return badRequest(res, "book_id et borrower_name sont obligatoires");
  }

  const loanBook = db.transaction(({ bookId, borrower }) => {
    const book = db.prepare("SELECT id, available FROM books WHERE id = ?").get(bookId);
    if (!book) {
      const err = new Error("Livre introuvable");
      err.status = 404;
      throw err;
    }
    if (!book.available) {
      const err = new Error("Livre deja emprunte");
      err.status = 409;
      throw err;
    }

    const insert = db
      .prepare("INSERT INTO loans (book_id, borrower_name, loan_date, return_date) VALUES (?, ?, DATE('now'), NULL)")
      .run(bookId, borrower.trim());

    db.prepare("UPDATE books SET available = 0 WHERE id = ?").run(bookId);

    return db.prepare("SELECT id, book_id, borrower_name, loan_date, return_date FROM loans WHERE id = ?").get(insert.lastInsertRowid);
  });

  try {
    const created = loanBook({ bookId: Number(book_id), borrower: borrower_name });
    res.status(201).json(created);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Erreur interne" });
  }
});

app.put("/loans/:id/return", (req, res) => {
  const loanId = Number(req.params.id);
  if (Number.isNaN(loanId)) return badRequest(res, "id invalide");

  const closeLoan = db.transaction((id) => {
    const loan = db.prepare("SELECT id, book_id, return_date FROM loans WHERE id = ?").get(id);
    if (!loan) {
      const err = new Error("Emprunt introuvable");
      err.status = 404;
      throw err;
    }
    if (loan.return_date) {
      const err = new Error("Livre deja retourne");
      err.status = 409;
      throw err;
    }

    db.prepare("UPDATE loans SET return_date = DATE('now') WHERE id = ?").run(id);
    db.prepare("UPDATE books SET available = 1 WHERE id = ?").run(loan.book_id);

    return db.prepare("SELECT id, book_id, borrower_name, loan_date, return_date FROM loans WHERE id = ?").get(id);
  });

  try {
    const updated = closeLoan(loanId);
    res.json(updated);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Erreur interne" });
  }
});

// STATS
app.get("/stats/books-by-author", (_req, res) => {
  const rows = db.prepare(`
    SELECT
      a.id,
      a.name,
      COUNT(b.id) AS books_count
    FROM authors a
    LEFT JOIN books b ON b.author_id = a.id
    GROUP BY a.id, a.name
    ORDER BY books_count DESC, a.name ASC
  `).all();

  res.json(rows);
});

// Gestion centralisee des erreurs SQLite (contraintes, FK, etc.)
app.use((err, _req, res, _next) => {
  if (err && err.code && String(err.code).startsWith("SQLITE_")) {
    return res.status(400).json({ error: "Erreur SQL", detail: err.message });
  }
  console.error(err);
  res.status(500).json({ error: "Erreur interne" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API demarree sur http://localhost:${PORT}`);
});
```

---

## 3) Tests manuels (extraits de correction)

### Ajouter un auteur

```http
POST /authors
Content-Type: application/json

{
  "name": "Isaac Asimov",
  "country": "Etats-Unis"
}
```

### Lister les livres (avec `JOIN`)

```http
GET /books
```

### Emprunter un livre (transaction)

```http
POST /loans
Content-Type: application/json

{
  "book_id": 1,
  "borrower_name": "Alice Martin"
}
```

### Retourner un livre (transaction)

```http
PUT /loans/1/return
```

### Statistiques (`GROUP BY`)

```http
GET /stats/books-by-author
```

---

## 4) Points à faire verbaliser par l'étudiant (correction pédagogique)

* Les requêtes utilisent des **paramètres** (`?`) pour limiter l'injection SQL.
* Les opérations d'emprunt / retour sont protégées par une **transaction** pour éviter les états incohérents.
* Les **clés étrangères** empêchent des références invalides.
* Le `CHECK` sur `available` force une valeur cohérente (0/1).
* Le code renvoie des **codes HTTP adaptés** : `201`, `404`, `409`, `400`.

📌 Ce que l'on valide réellement :

* SQL (JOIN, GROUP BY, contraintes, intégrité)
* API REST (routes, statuts, JSON)
* cybersécurité appliquée (paramétrage, intégrité, gestion d'erreurs)

---

## 5) Barème indicatif (enseignant)

* Modèle SQL (tables, PK/FK, contraintes) : **6 pts**
* Requêtes SQL (JOIN, GROUP BY, filtres) : **4 pts**
* API Express (routes CRUD + structure) : **4 pts**
* Sécurité (requêtes paramétrées, validation, codes HTTP) : **4 pts**
* Transaction emprunt/retour + cohérence métier : **2 pts**

📌 Variante possible : valoriser la qualité de l'explication orale (+bonus).

---

## 6) Erreurs fréquentes à surveiller (correction)

* concaténer les entrées utilisateur dans le SQL
* oublier d'activer / respecter les clés étrangères
* retourner `200` pour toutes les erreurs
* oublier la transaction sur emprunt/retour
* permettre l'emprunt d'un livre déjà indisponible
* supprimer un livre avec un emprunt actif sans contrôle

---

## 7) Questions de soutenance / oral (très utiles)

* Pourquoi une requête paramétrée protège contre l'injection SQL ?
* Pourquoi une transaction est-elle nécessaire pour l'emprunt d'un livre ?
* Quelle différence entre authentification et autorisation dans cette API ?
* Quels codes HTTP avez-vous choisis pour un livre introuvable / déjà emprunté ?
* Qu'est-ce que la base de données garantit ici même si l'API a un bug ?
