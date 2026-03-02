const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, 'data', 'messagerie.db');
const db = new sqlite3.Database(dbPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'dev-secret-not-safe',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      secure: false
    }
  })
);

app.use(express.static(path.join(__dirname, 'public')));

function initDb() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        role TEXT
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_id INTEGER,
        receiver_id INTEGER,
        content TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    db.get('SELECT COUNT(*) AS count FROM users', (err, row) => {
      if (err) {
        console.error(err);
        return;
      }

      if (row.count === 0) {
        db.run("INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'ADMIN')");
        db.run("INSERT INTO users (username, password, role) VALUES ('alice', 'alice123', 'USER')");
        db.run("INSERT INTO users (username, password, role) VALUES ('bob', 'bob123', 'USER')");
      }
    });
  });
}

function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // VOLONTAIREMENT VULNERABLE: concaténation SQL (SQL injection possible)
  const query = `SELECT id, username, role FROM users WHERE username = '${username}' AND password = '${password}'`;

  db.get(query, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.user = user;
    res.json({ user });
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

app.get('/api/me', (req, res) => {
  res.json({ user: req.session.user || null });
});

app.get('/api/users', requireAuth, (req, res) => {
  const current = req.session.user;
  const query = current.role === 'ADMIN'
    ? 'SELECT id, username, role FROM users'
    : `SELECT id, username, role FROM users WHERE id != ${current.id}`;

  db.all(query, (err, users) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ users });
  });
});

app.get('/api/messages', requireAuth, (req, res) => {
  const current = req.session.user;
  const withUserId = req.query.withUserId;

  let query;
  if (current.role === 'ADMIN') {
    query = `
      SELECT m.id, m.sender_id, m.receiver_id, m.content, m.created_at,
             s.username AS sender_name, r.username AS receiver_name
      FROM messages m
      LEFT JOIN users s ON s.id = m.sender_id
      LEFT JOIN users r ON r.id = m.receiver_id
      WHERE m.sender_id = ${withUserId} OR m.receiver_id = ${withUserId} OR ${withUserId} IS NULL
      ORDER BY m.created_at ASC
    `;
  } else {
    query = `
      SELECT m.id, m.sender_id, m.receiver_id, m.content, m.created_at,
             s.username AS sender_name, r.username AS receiver_name
      FROM messages m
      LEFT JOIN users s ON s.id = m.sender_id
      LEFT JOIN users r ON r.id = m.receiver_id
      WHERE (m.sender_id = ${current.id} AND m.receiver_id = ${withUserId})
         OR (m.sender_id = ${withUserId} AND m.receiver_id = ${current.id})
      ORDER BY m.created_at ASC
    `;
  }

  db.all(query, (err, messages) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ messages });
  });
});

app.post('/api/messages', requireAuth, (req, res) => {
  const current = req.session.user;
  const { receiverId, content } = req.body;

  // VOLONTAIREMENT VULNERABLE: SQLi + aucun filtrage du contenu (XSS stocké côté front)
  const query = `INSERT INTO messages (sender_id, receiver_id, content) VALUES (${current.id}, ${receiverId}, '${content}')`;

  db.run(query, function onInsert(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ id: this.lastID });
  });
});

app.put('/api/messages/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  // VOLONTAIREMENT VULNERABLE: SQLi + pas de contrôle d'auteur
  const query = `UPDATE messages SET content = '${content}' WHERE id = ${id}`;

  db.run(query, function onUpdate(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ updated: this.changes });
  });
});

app.delete('/api/messages/:id', requireAuth, (req, res) => {
  const { id } = req.params;

  // VOLONTAIREMENT VULNERABLE: SQLi + pas de contrôle d'autorisation
  const query = `DELETE FROM messages WHERE id = ${id}`;

  db.run(query, function onDelete(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ deleted: this.changes });
  });
});

initDb();

app.listen(PORT, () => {
  console.log(`Messagerie vulnérable démarrée sur http://localhost:${PORT}`);
});
