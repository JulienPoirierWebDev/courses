

# 🚀 Express.js — Fiche rapide

## 🔹 Définition

**Express.js** est un framework web pour Node.js.

Il permet de créer facilement :

* des routes
* une API REST
* des middlewares
* un serveur web

👉 En pratique, Express sert souvent à construire le **back-end** d’une application.

---

## 🔹 Installation

```bash
npm install express
```

---

## 🔹 Mise en place minimale

```js
import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
```

---

## 🔹 Première route

```js
app.get("/", (req, res) => {
  res.send("Hello Express");
});
```

👉 Ici :

* `app.get()` définit une route HTTP GET
* `req` = requête reçue
* `res` = réponse envoyée

---

## 🔹 Méthodes HTTP principales

### GET

Récupérer des données

```js
app.get("/users", (req, res) => {
  res.send("Liste des utilisateurs");
});
```

### POST

Créer une ressource

```js
app.post("/users", (req, res) => {
  res.send("Utilisateur créé");
});
```

### PUT

Remplacer une ressource

```js
app.put("/users/:id", (req, res) => {
  res.send("Utilisateur remplacé");
});
```

### PATCH

Modifier partiellement une ressource

```js
app.patch("/users/:id", (req, res) => {
  res.send("Utilisateur modifié");
});
```

### DELETE

Supprimer une ressource

```js
app.delete("/users/:id", (req, res) => {
  res.send("Utilisateur supprimé");
});
```

---

## 🔹 Lire les données de la requête

### Paramètres d’URL

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Utilisateur ${req.params.id}`);
});
```

URL :

```text
/users/42
```

👉 `req.params.id = 42`

---

### Query string

```js
app.get("/search", (req, res) => {
  console.log(req.query.name);
  res.send("Recherche effectuée");
});
```

URL :

```text
/search?name=alice
```

👉 `req.query.name = "alice"`

---

### Corps de la requête

Pour lire le JSON envoyé par le client :

```js
app.use(express.json());
```

Puis :

```js
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("Données reçues");
});
```

---

## 🔹 Réponses courantes

### Texte

```js
res.send("Bonjour");
```

### JSON

```js
res.json({ message: "OK" });
```

### Code HTTP + JSON

```js
res.status(201).json({ message: "Créé" });
```

---

## 🔹 Middleware

Un middleware est une fonction exécutée entre la requête et la réponse.

Exemple :

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

👉 `next()` est indispensable pour passer à la suite.

---

## 🔹 Router

Quand l’application grandit, on sépare les routes.

### Exemple de router

```js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Liste des utilisateurs");
});

router.get("/:id", (req, res) => {
  res.send(`Utilisateur ${req.params.id}`);
});

export default router;
```

Puis dans l’app principale :

```js
import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
```

👉 Résultat :

* `GET /users`
* `GET /users/:id`

---

## 🔹 Exemple simple d’API REST

```js
import express from "express";

const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Utilisateur introuvable" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Serveur lancé sur le port 3000");
});
```

---

## 🔹 Structure classique d’un projet Express

```text
project/
├── app.js
├── routes/
│   └── user.routes.js
├── controllers/
│   └── user.controller.js
├── services/
│   └── user.service.js
├── models/
│   └── user.model.js
└── middlewares/
    └── auth.middleware.js
```

---

## 🔹 Cas d’usage

Express est souvent utilisé pour :

* créer une API REST
* gérer une authentification
* servir un front
* connecter une base de données
* brancher Socket.IO

---

## 🔹 Bonnes pratiques

### Valider les données

Ne jamais faire confiance au client.

```js
if (!req.body.name) {
  return res.status(400).json({ message: "Le nom est requis" });
}
```

### Bien utiliser les codes HTTP

* `200` : succès
* `201` : ressource créée
* `400` : requête invalide
* `401` : non authentifié
* `403` : interdit
* `404` : non trouvé
* `500` : erreur serveur

### Séparer les responsabilités

* routes : définissent les endpoints
* controllers : reçoivent la requête/réponse
* services : logique métier
* models : accès aux données

---

## 🔹 Express + Socket.IO

Express sert souvent de base HTTP, et Socket.IO vient se brancher dessus.

Exemple :

```js
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Client connecté");
});

server.listen(3000, () => {
  console.log("Serveur lancé sur le port 3000");
});
```

👉 Ici :

* Express gère les routes HTTP
* Socket.IO gère le temps réel

---

## 🔹 Limites

* Express est léger, donc beaucoup de choses sont à construire soi-même
* sur un gros projet, sans architecture claire, ça devient vite désordonné
* il faut ajouter soi-même la validation, la sécurité, l’auth, etc.

---

## 🔹 Vision ingénieur

Express ne fait pas “magiquement” le back-end.

Il fournit surtout :

* un système de routing
* une gestion des middlewares
* une base simple pour construire une API propre

👉 Sa force, c’est sa simplicité.
👉 Son risque, c’est de devenir un bazar si on mélange tout dans `app.js`.

