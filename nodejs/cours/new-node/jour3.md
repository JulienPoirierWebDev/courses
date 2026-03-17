
# Cours Node.js – API REST

## Jour 3 : NoSQL et MongoDB

---

# 1 — Introduction au NoSQL

## 1.1 Qu’est-ce que le NoSQL ?

NoSQL signifie :

```
Not Only SQL
```

Ce sont des bases de données **non relationnelles**.

Contrairement aux bases SQL :

* pas de tables
* pas de schéma strict
* données souvent stockées en **documents JSON**

---

## 1.2 Pourquoi utiliser du NoSQL ?

Le NoSQL est utilisé lorsque :

* les données sont **flexibles**
* les volumes sont **très importants**
* les relations sont **faibles**
* les performances sont prioritaires

---

## 1.3 Comparaison SQL / NoSQL

| SQL              | NoSQL              |
| ---------------- | ------------------ |
| tables           | documents          |
| schéma strict    | schéma flexible    |
| relations fortes | relations faibles  |
| jointures        | données imbriquées |

---

## Exemple SQL

Table :

```
users
```

| id | email                                 |
| -- | ------------------------------------- |
| 1  | [test@test.com](mailto:test@test.com) |

---

## Exemple NoSQL

Document :

```json
{
  "_id": "123",
  "email": "test@test.com"
}
```

---

# 2 — MongoDB

MongoDB est une base **NoSQL orientée documents**.

Les données sont stockées sous forme de :

```
documents BSON (JSON étendu)
```

---

## Structure MongoDB

```
Database
   ↓
Collection
   ↓
Documents
```

Exemple :

```
blog
 └ posts
     └ document
```

---

## Exemple de document

```json
{
  "title": "Mon article",
  "content": "Lorem ipsum",
  "author": "Alice",
  "comments": [
    {
      "user": "Bob",
      "message": "Super article"
    }
  ]
}
```

---

# 3 — Installation MongoDB

Téléchargement :

[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

---

## Vérifier l’installation

```bash
mongod --version
```

---

## Lancer MongoDB

```bash
mongod
```

---

# 4 — MongoDB Atlas

MongoDB Atlas est un service **MongoDB cloud**.

Avantages :

* base hébergée
* accès distant
* sauvegardes
* cluster scalable

---

## Création d’un cluster

1. Créer un compte
2. Créer un cluster
3. Créer un utilisateur
4. Autoriser son IP
5. Récupérer l’URL de connexion

Exemple :

```
mongodb+srv://user:password@cluster.mongodb.net/db
```

---

# 5 — Utiliser MongoDB dans Node.js

Installer le driver :

```bash
npm install mongodb
```

Mais en pratique on utilise souvent :

```
Mongoose
```

---

# 6 — Mongoose

Mongoose est un **ODM** :

```
Object Document Mapper
```

Equivalent NoSQL de Sequelize.

---

## Installation

```bash
npm install mongoose
```

---

# 7 — Connexion à MongoDB

```js
const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://localhost:27017/blog"
)
```

---

# 8 — Création d’un modèle

Mongoose utilise des **schemas**.

---

## Exemple User

```js
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: String,
  password: String
})

const User = mongoose.model(
  "User",
  userSchema
)
```

---

# 9 — CRUD avec Mongoose

## Création

```js
const user = new User({
  email: "test@test.com",
  password: "123"
})

await user.save()
```

---

## Lecture

```js
const users = await User.find()
```

---

## Recherche

```js
const user = await User.findOne({
  email: "test@test.com"
})
```

---

## Modification

```js
await User.updateOne(
  { email: "test@test.com" },
  { email: "new@test.com" }
)
```

---

## Suppression

```js
await User.deleteOne({
  email: "test@test.com"
})
```

---

# 10 — Intégration MongoDB dans une API Express

---

## Exemple route POST

```js
app.post("/users", async (req, res) => {

  const user = new User(req.body)

  await user.save()

  res.json(user)

})
```

---

## Exemple GET

```js
app.get("/users", async (req, res) => {

  const users = await User.find()

  res.json(users)

})
```

---

# 11 — Variables d’environnement pour MongoDB

Connexion :

```
.env
```

```env
MONGO_URI=mongodb://localhost:27017/blog
```

---

## Utilisation

```js
mongoose.connect(process.env.MONGO_URI)
```

---

# 12 — Exemple architecture Node + MongoDB

```
src
│
├── models
│   └ User.js
│
├── controllers
│   └ userController.js
│
├── routes
│   └ userRoutes.js
│
└ app.js
```

---

# 13 — Exemple controller

```js
exports.getUsers = async (req, res) => {

  const users = await User.find()

  res.json(users)

}
```

---

# 14 — Travaux pratiques

## TP : requêtes MongoDB

Objectif :

Créer une API avec les routes :

```
GET /users
POST /users
GET /users/:id
PUT /users/:id
DELETE /users/:id
```

---

## Modèle

```js
User
{
  email,
  password,
  role
}
```

---

## Exemples de requêtes

Créer un utilisateur :

```json
POST /users

{
  "email": "test@test.com",
  "password": "123",
  "role": "admin"
}
```

---

## Recherche

```
GET /users?role=admin
```

---

# 15 — Comparaison Sequelize vs Mongoose

| Sequelize | Mongoose         |
| --------- | ---------------- |
| SQL       | NoSQL            |
| tables    | documents        |
| relations | objets imbriqués |

---

# 16 — Quand choisir MongoDB ?

Utiliser MongoDB quand :

* données **flexibles**
* forte **scalabilité**
* données **JSON**

Exemples :

* logs
* analytics
* commentaires
* réseaux sociaux

---

# 17 — Résumé du jour 3

Vous savez maintenant :

* comprendre le NoSQL
* installer MongoDB
* utiliser MongoDB Atlas
* créer des modèles Mongoose
* faire un CRUD MongoDB
* intégrer MongoDB dans une API Node.js
