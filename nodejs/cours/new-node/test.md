

## 🧭 Objectif

Mettre en place :

* des **tests unitaires** (logique métier)
* des **tests d’intégration** (routes HTTP)
* un **outil de test**
* un environnement **isolé (base de données de test)**

---

## 🧱 1. Séparer `app` et `server` (obligatoire)

C’est la base. Si vous ne faites pas ça, vos tests vont être pénibles.

### `app.js`

```js
const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

module.exports = app;
```

### `server.js`

```js
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
```

👉 Pourquoi c’est important ?
Parce que vous pourrez tester votre app **sans lancer de serveur réel**, grâce à Supertest.

---

## 📦 2. Installer les dépendances

Version simple et efficace :

```bash
npm install express
npm install --save-dev supertest
```

Vous pouvez utiliser le **runner de test natif de Node** (pas besoin de Jest au départ).

---

## ⚙️ 3. Configurer les scripts

Dans votre `package.json` :

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "test": "node --test"
  }
}
```

---

## 📁 4. Organiser votre projet

Structure recommandée :

```txt
project/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── repositories/
├── tests/
│   ├── integration/
│   └── unit/
├── .env
├── .env.test
└── package.json
```

👉 Séparation essentielle :

* `unit/` → logique métier pure
* `integration/` → API HTTP

---

## 🧪 5. Exemple de test d’intégration

### `tests/integration/health.test.js`

```js
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

const app = require('../../src/app');

test('GET /health retourne 200', async () => {
  const response = await request(app).get('/health');

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { ok: true });
});
```

Lancement :

```bash
npm test
```

---

## 🧠 6. Ce que vous devez tester

### ✔️ Tests unitaires

Vous testez :

* vos services
* vos fonctions métier
* vos validations

Exemple :

```js
const test = require('node:test');
const assert = require('node:assert');

function add(a, b) {
  return a + b;
}

test('addition correcte', () => {
  assert.equal(add(2, 3), 5);
});
```

---

### ✔️ Tests d’intégration

Vous testez :

* routes Express
* middlewares
* authentification
* base de données

Exemples :

* `POST /register` → crée un utilisateur
* `POST /login` → retourne un token
* `GET /profile` sans token → 401
* `GET /profile` avec token → 200

---

## 🗄️ 7. Base de données de test (très important)

Ne testez jamais sur votre base de développement.

### `.env.test`

```env
NODE_ENV=test
DB_NAME=my_api_test
```

### Bonnes pratiques :

* une base dédiée
* nettoyage entre les tests
* aucune donnée persistante importante

---

### Approches possibles :

* **Base réelle dédiée** → recommandé
* **SQLite en mémoire** → rapide
* **Mocks** → pour les tests unitaires

---

## 🧩 8. Si vous utilisez Sequelize ou MongoDB

### Sequelize

* config `test`
* `sync({ force: true })` ou migrations
* reset entre tests

### Mongoose

* base Mongo dédiée
* nettoyage des collections

---

## 🧪 9. Alternative avec Jest

Si vous voulez quelque chose de plus confortable :

```bash
npm install --save-dev jest supertest
```

### `package.json`

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### Exemple

```js
const request = require('supertest');
const app = require('../../src/app');

describe('GET /health', () => {
  test('retourne 200', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });
});
```

---

## ⚠️ Piège classique

Si vous mettez toute votre logique dans les contrôleurs :

👉 vos tests deviennent compliqués et fragiles.

Faites plutôt :

```txt
route → controller → service → repository
```

Ainsi :

* les services sont testables facilement
* les routes restent simples
* votre code est propre

---

## ✅ Setup minimal recommandé

```bash
npm init -y
npm install express
npm install --save-dev supertest
```

Puis :

* séparation `app / server`
* tests avec `node:test`
* organisation claire

---

## 🧾 Conclusion

Un bon environnement de test repose sur 4 piliers :

1. **Séparer l’application du serveur**
2. **Utiliser un runner de test (Node ou Jest)**
3. **Tester les routes avec Supertest**
4. **Isoler complètement la base de données**

