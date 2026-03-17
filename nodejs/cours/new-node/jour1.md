# Cours Node.js – API REST

## Jour 1 : Introduction à Node.js

---

# 1 — Introduction à Node.js

## 1.1 Qu’est-ce que Node.js ?

Node.js est un **runtime JavaScript côté serveur**.

Il permet d’exécuter JavaScript **en dehors du navigateur** pour créer :

* des **API REST**
* des **serveurs web**
* des **outils CLI**
* des **applications temps réel**

### Avant Node.js

JavaScript fonctionnait uniquement :

```
Navigateur → JavaScript → Manipulation du DOM
```

### Avec Node.js

JavaScript peut fonctionner **côté serveur** :

```
Client → API Node.js → Base de données
```

Architecture classique :

```
Frontend
   ↓
API REST (Node.js)
   ↓
Base de données
```

---

## 1.2 Pourquoi utiliser Node.js ?

### Avantages

* même langage **frontend et backend**
* très performant pour les **API**
* énorme **écosystème npm**
* idéal pour les **applications temps réel**

Exemples :

* Netflix
* LinkedIn
* Uber
* PayPal

---

## 1.3 Fonctionnement interne

Node.js utilise :

### Event Loop

Node est **non bloquant**.

Exemple :

```js
console.log("A")

setTimeout(() => {
  console.log("B")
}, 1000)

console.log("C")
```

Résultat :

```
A
C
B
```

Pourquoi ?

Node délègue les tâches longues à l'**event loop**.

---

# 2 — Installation de Node.js

## Vérifier l’installation

```bash
node -v
npm -v
```

Exemple :

```
v20.10.0
10.2.0
```

---

## Installer Node.js

Site officiel :

[https://nodejs.org](https://nodejs.org)

Installer la version **LTS**.

---

# 3 — Structure d’un projet Node.js

Créer un projet :

```bash
mkdir mon-api
cd mon-api
npm init -y
```

Cela crée :

```
package.json
```

---

## Exemple de structure

```
mon-api
│
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   └── app.js
│
├── package.json
└── node_modules
```

---

# 4 — Le fichier package.json

Il décrit le projet.

Exemple :

```json
{
  "name": "mon-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

---

## Scripts npm

Permet d'exécuter des commandes.

Exemple :

```json
"scripts": {
  "dev": "node index.js",
  "start": "node index.js"
}
```

Exécution :

```bash
npm run dev
```

---

# 5 — Les dépendances

Installer un package :

```bash
npm install express
```

Cela ajoute dans :

```json
"dependencies": {
  "express": "^4.18.2"
}
```

---

## node_modules

Contient :

* les librairies installées
* leurs dépendances

⚠️ Ce dossier **ne doit jamais être versionné dans Git**.

---

# 6 — Async / Await

Node.js est **asynchrone**.

## Exemple avec callback

```js
fs.readFile("file.txt", (err, data) => {
  console.log(data)
})
```

---

## Exemple avec Promise

```js
readFile("file.txt")
  .then(data => console.log(data))
```

---

## Async / Await

Syntaxe moderne :

```js
async function read() {
  const data = await readFile("file.txt")
  console.log(data)
}
```

Avantages :

* plus lisible
* ressemble à du code synchrone

---

# 7 — Création d’un premier serveur Node.js

Créer un fichier :

```
index.js
```

---

## Serveur HTTP natif

```js
const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Hello World")
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

## Lancer le serveur

```bash
node index.js
```

Ouvrir :

```
http://localhost:3000
```

---

# 8 — Introduction aux API REST

## Qu’est-ce qu’une API ?

API = **Application Programming Interface**

Permet à deux programmes de communiquer.

Exemple :

```
Frontend React
     ↓
API REST
     ↓
Base de données
```

---

## Exemple d'API

Route :

```
GET /users
```

Réponse :

```json
[
  {
    "id": 1,
    "name": "Alice"
  }
]
```

---

## Méthodes HTTP

| Méthode | Action    |
| ------- | --------- |
| GET     | Lire      |
| POST    | Créer     |
| PUT     | Remplacer |
| PATCH   | MAJ       |
| DELETE  | Supprimer |

---

# 9 — Express.js

Express est le **framework Node.js le plus utilisé** pour créer des API.

Installation :

```bash
npm install express
```

---

## Premier serveur Express

```js
const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Express")
})

app.listen(3000, () => {
  console.log("Server started")
})
```

---

# 10 — Création des routes

Une route correspond à :

```
METHOD + URL
```

---

## Exemple

```js
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ])
})
```

---

## Route avec paramètre

```js
app.get("/users/:id", (req, res) => {
  const id = req.params.id

  res.json({
    id,
    name: "Alice"
  })
})
```

---

# 11 — Utilisation du File System

Node possède un module natif :

```
fs
```

---

## Lire un fichier

```js
const fs = require("fs")

const data = fs.readFileSync("file.txt", "utf8")

console.log(data)
```

---

## Version async

```js
const fs = require("fs").promises

async function readFile() {
  const data = await fs.readFile("file.txt", "utf8")
  console.log(data)
}

readFile()
```


---

# 14 — Objectifs de la journée

À la fin du Jour 1 vous devez savoir :

* créer un projet Node.js
* installer des dépendances
* comprendre async/await
* créer un serveur Node
* créer une API Express
* gérer des routes
* lire et écrire des fichiers

