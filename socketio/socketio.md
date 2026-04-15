

# 🚀 Socket.IO — Fiche rapide

## 🔹 Définition

Socket.IO est une bibliothèque JavaScript permettant la **communication temps réel bidirectionnelle** entre client et serveur.

👉 Basée sur :

* WebSocket (si possible)
* fallback HTTP (long polling)

---

## 🔹 Installation

```bash
npm install socket.io
```

Client :

```bash
npm install socket.io-client
```

---

## 🔹 Mise en place minimale

### ➜ Serveur

```js
import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);
});
```

---

### ➜ Client

```js
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");
```

---

## 🔹 Communication de base

### ➜ Émettre un événement

Client ➜ Serveur :

```js
socket.emit("message", "Hello serveur");
```

---

### ➜ Écouter un événement

Serveur :

```js
socket.on("message", (data) => {
  console.log(data);
});
```

---

## 🔹 Envoi serveur ➜ client

```js
socket.emit("reply", "Hello client");
```

---

## 🔹 Broadcast

```js
socket.broadcast.emit("message", "Envoyé à tous sauf moi");
```

---

## 🔹 Rooms (groupes)

### ➜ Rejoindre une room

```js
socket.join("room1");
```

---

### ➜ Envoyer à une room

```js
io.to("room1").emit("message", "Hello room");
```

---

### ➜ Quitter une room

```js
socket.leave("room1");
```

---

## 🔹 Exemple complet (chat simple)

```js
io.on("connection", (socket) => {

  socket.on("join_room", (room) => {
    socket.join(room);
  });

  socket.on("send_message", ({ room, message }) => {
    io.to(room).emit("receive_message", message);
  });

});
```

---

## 🔹 Cas d’usage

* 💬 Chat temps réel
* 🎮 Jeux multijoueur
* 🔔 Notifications
* 📡 Live / streaming
* 📊 Dashboards temps réel

---

## 🔹 Bonnes pratiques

### ✔️ Toujours valider les données

```js
if (!room || room.length < 3) return;
```

---

### ✔️ Ne pas faire confiance au client

👉 Le serveur décide :

* accès aux rooms
* droits utilisateur

---

### ✔️ Gérer les rooms proprement

```js
socket.rooms.forEach(room => {
  if (room !== socket.id) {
    socket.leave(room);
  }
});
```

---

### ✔️ Nommer les rooms intelligemment

* `user-123`
* `game-ABC`
* `chat-general`

---

## 🔹 Points importants

* Une socket peut être dans **plusieurs rooms**
* Les rooms sont **côté serveur uniquement**
* Communication basée sur des **events (pub/sub)**

---

## 🔹 Limites

* Nécessite gestion de scalabilité (Redis adapter si multi-serveurs)
* Sécurité à gérer (auth, validation)
* Peut devenir complexe sans architecture claire

---

## 🔹 Vision ingénieur

👉 Socket.IO = système **event-driven**

Tu construis une API temps réel basée sur :

* événements (`emit`)
* écoute (`on`)
* segmentation (`rooms`)

