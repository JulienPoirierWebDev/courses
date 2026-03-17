

# Cours Node.js – API REST

## Jour 2 : ORM, base de données et authentification

---

# 1 — Introduction aux ORM

## 1.1 Qu’est-ce qu’un ORM ?

ORM signifie :

**Object Relational Mapper**

Un ORM permet de manipuler une base de données **avec des objets JavaScript** plutôt qu’avec du SQL.

### Sans ORM

```sql
SELECT * FROM users WHERE email = "test@test.com"
```

### Avec ORM

```js
User.findOne({
  where: { email: "test@test.com" }
})
```

---

## 1.2 Pourquoi utiliser un ORM ?

Avantages :

* abstraction de la base de données
* moins de SQL à écrire
* migration de base simplifiée
* validation des données
* relations entre modèles

---

## 1.3 ORM utilisés en Node.js

| ORM       | Base    |
| --------- | ------- |
| Sequelize | SQL     |
| Prisma    | SQL     |
| TypeORM   | SQL     |
| Mongoose  | MongoDB |

Dans ce cours nous utilisons :

```
Sequelize
```

---

# 2 — Installation de Sequelize

Installer les dépendances :

```bash
npm install sequelize mariadb
```

ou pour MySQL :

```bash
npm install sequelize mysql2
```

---

Installer les outils CLI :

```bash
npm install -D sequelize-cli
```

---

# 3 — Initialiser Sequelize

Initialisation du projet :

```bash
npx sequelize-cli init
```

Structure générée :

```
project
│
├── config
│   └── config.json
│
├── models
│
├── migrations
│
├── seeders
```

---

# 4 — Configuration de la base de données

Fichier :

```
config/config.json
```

Exemple :

```json
{
  "development": {
    "username": "root",
    "password": "",
    "database": "node_api",
    "host": "127.0.0.1",
    "dialect": "mariadb"
  }
}
```

---

# 5 — Création d’un modèle

Créer un modèle :

```bash
npx sequelize-cli model:generate --name User --attributes email:string,password:string
```

Cela génère :

```
models/user.js
migrations/xxxx-create-user.js
```

---

## Exemple modèle Sequelize

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  return User
}
```

---

# 6 — Les migrations

Une migration permet de **modifier la structure de la base de données**.

Exemple :

```
CREATE TABLE users
```

---

## Lancer une migration

```bash
npx sequelize-cli db:migrate
```

Cela crée la table dans la base.

---

## Revenir en arrière

```bash
npx sequelize-cli db:migrate:undo
```

---

# 7 — CRUD avec Sequelize

## Créer un utilisateur

```js
const user = await User.create({
  email: "test@test.com",
  password: "1234"
})
```

---

## Lire des utilisateurs

```js
const users = await User.findAll()
```

---

## Lire un utilisateur

```js
const user = await User.findByPk(1)
```

---

## Modifier

```js
await user.update({
  email: "new@test.com"
})
```

---

## Supprimer

```js
await user.destroy()
```

---

# 8 — Architecture recommandée

Structure conseillée :

```
src
│
├── controllers
├── services
├── repositories
├── models
├── routes
└── app.js
```

---

## Rôle de chaque couche

### Controller

Gère :

* HTTP
* requêtes
* réponses

---

### Service

Contient :

* logique métier

---

### Repository

Accès :

* base de données

---

# 9 — Authentification

Un système d’authentification permet :

* identifier un utilisateur
* sécuriser une API

---

## Deux approches

### Sessions

Serveur garde l’état.

### JWT

Token envoyé à chaque requête.

Nous utilisons :

```
JWT
```

---

# 10 — Installation JWT

```bash
npm install jsonwebtoken bcrypt
```

---

# 11 — Hash des mots de passe

On **ne stocke jamais un mot de passe en clair**.

Utiliser :

```
bcrypt
```

---

## Exemple

```js
const bcrypt = require("bcrypt")

const hash = await bcrypt.hash(password, 10)
```

Comparer :

```js
bcrypt.compare(password, hash)
```

---

# 12 — Création du token JWT

```js
const jwt = require("jsonwebtoken")

const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
)
```

---

# 13 — Middleware d’authentification

```js
function authMiddleware(req, res, next) {

  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    req.user = decoded

    next()

  } catch {

    res.status(401).json({
      message: "Invalid token"
    })

  }

}
```

---

# 14 — Exemple route protégée

```js
app.get(
  "/profile",
  authMiddleware,
  (req, res) => {

    res.json({
      userId: req.user.userId
    })

  }
)
```

---

# 15 — Variables d’environnement

Les secrets **ne doivent jamais être dans le code**.

Créer un fichier :

```
.env
```

---

## Exemple

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
JWT_SECRET=supersecret
```

---

## Utiliser dotenv

Installer :

```bash
npm install dotenv
```

Dans app.js :

```js
require("dotenv").config()
```

---

# 16 — TP : Création d’un environnement de test

Créer une route permettant :

```
POST /reset-db
```

Elle doit :

* vider la base
* ajouter des données de test

---

Exemple :

```js
await User.destroy({
  where: {},
  truncate: true
})
```

Puis :

```js
await User.create({
  email: "admin@test.com",
  password: "admin"
})
```

---

# 17 — TP : SignIn

Créer la route :

```
POST /signin
```

---

## Exemple

```js
const user = await User.findOne({
  where: { email }
})

if (!user) {
  return res.status(401).json()
}

const valid = await bcrypt.compare(
  password,
  user.password
)

if (!valid) {
  return res.status(401).json()
}

const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET
)

res.json({ token })
```

---

# 18 — Résumé du jour 2

Vous savez maintenant :

* utiliser Sequelize
* créer des migrations
* manipuler une base SQL
* créer un système d’authentification
* générer des tokens JWT
* protéger des routes

