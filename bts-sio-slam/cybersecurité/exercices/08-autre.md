# 🎬 BTS SIO – E6 (Cas pratique)

## Cinéma “CinéPass” – Audit code & RGPD

## DOCUMENT A – Auth middleware

```js
export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  req.user = payload; // { id, role }
  next();
}
```

## DOCUMENT B – Route export abonnés

```js
app.get("/admin/export-users", auth, async (req, res) => {
  const users = await db.query("SELECT * FROM users");
  res.json(users);
});
```

## DOCUMENT C – Cron newsletter

```js
const users = await db.query("SELECT email FROM users");
for (const u of users) {
  await mailer.send(u.email, "Programme du mois", content);
}
```

## DOCUMENT D – Préférences newsletter

```js
app.post("/preferences/newsletter", auth, async (req, res) => {
  const ok = !!req.body.newsletter;

  await db.query(
    "UPDATE marketing_preferences SET newsletter=?, newsletter_at=NOW() WHERE user_id=?",
    [ok, req.user.id]
  );

  res.json({ ok: true });
});
```

## DOCUMENT E – DB (extrait)

```sql
TABLE users (
  id INT,
  email VARCHAR(255),
  password_hash VARCHAR(255),
  birthdate DATE,
  phone VARCHAR(20),
  role VARCHAR(50)
);

TABLE marketing_preferences (
  user_id INT,
  newsletter BOOLEAN,
  newsletter_at DATETIME
);

TABLE view_history (
  user_id INT,
  movie_title VARCHAR(255),
  movie_genre VARCHAR(100),
  viewed_at DATETIME
);
```

## DOCUMENT F – Logs

```
2026-03-01 GET /admin/export-users 200 user=14 role=user
2026-03-01 POST /preferences/newsletter 200 user=12
```

---

# ✅ Questions (directement sur docs)

### Q1 — Document A (auth)

En vous basant uniquement sur le code, expliquez **ce qu’un attaquant peut fabriquer** dans le `payload` et **pourquoi le serveur l’acceptera**.

*(Attendu : pas “JWT non vérifié”, mais la conséquence concrète.)*

---

### Q2 — Documents A + B (export)

Montrez précisément comment un utilisateur non-admin peut accéder à l’export.
Vous devez citer :

* la ligne / le mécanisme côté auth (Doc A)
* l’absence de contrôle côté route (Doc B)

---

### Q3 — Document F (preuve)

Dans les logs, quelle anomalie prouve que la route `/admin/export-users` est exploitable ?
Expliquez pourquoi cette ligne est une alerte critique.

---

### Q4 — Documents C + E (newsletter)

Montrez, requête SQL à l’appui, pourquoi le cron envoie la newsletter à des personnes qui ont refusé.

Puis proposez **une requête SQL corrigée** (juste la requête, pas tout le script).

---

### Q5 — Document D (preuve de consentement)

Le code enregistre `newsletter_at`.
Qu’est-ce qui manque pour être capable de dire, en contrôle, **“voici exactement ce que la personne a accepté”** ?
Répondez en listant 2 éléments manquants liés à la preuve.

---

### Q6 — Documents D + E (cohérence données)

En regardant le schéma, quel problème peut empêcher `UPDATE marketing_preferences ... WHERE user_id=?` de fonctionner pour un nouvel utilisateur ?
Décrivez le scénario précis (création de compte → préférence → résultat).

---

### Q7 — Document E (données)

Expliquez en quoi `view_history` peut créer un risque RGPD spécifique, même si aucune “donnée sensible” explicite n’est stockée.
Donnez un exemple concret de déduction possible.

---

### Q8 — Documents A + E (impact)

Si un attaquant fabrique un token avec `{ "id": 1, "role": "admin" }`, quelles tables deviennent accessibles ou modifiables via les routes vues dans les documents ?
Répondez en citant les docs et les tables.

---

### Q9 — Documents A + F (traçabilité)

Pourquoi les logs actuels ne suffisent pas à reconstituer un incident ?
Citez 2 infos qui manquent pour être “auditables”.

