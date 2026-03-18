
# Fiche mémo — Mettre en place une authentification avec bcrypt et JWT

Quand on met en place une authentification dans une API REST, il faut distinguer **deux choses** :

* **protéger les mots de passe**
* **reconnaître l’utilisateur connecté**

Pour cela, on utilise souvent :

* **bcrypt** pour hacher les mots de passe
* **JWT** pour générer un token d’authentification

---

# 1. À quoi servent bcrypt et JWT ?

## bcrypt

`bcrypt` sert à **transformer le mot de passe** en une version sécurisée appelée **hash**.

On ne doit **jamais** enregistrer un mot de passe en clair dans la base de données.

Exemple :

* mot de passe saisi : `azerty123`
* mot de passe stocké : une chaîne hachée illisible

Même si la base de données fuit, le mot de passe réel n’apparaît pas directement.

---

## JWT

`JWT` signifie **JSON Web Token**.

Il sert à **prouver qu’un utilisateur est connecté**.

Quand l’utilisateur se connecte avec succès :

* le serveur vérifie son email et son mot de passe
* le serveur crée un token
* le client stocke ce token
* le client renvoie ce token à chaque requête protégée

Le serveur peut alors vérifier si le token est valide.

---

# 2. Les grandes étapes d’une authentification

## Étape 1 — inscription

Lorsqu’un utilisateur s’inscrit :

* il envoie ses informations
* le serveur vérifie que les données sont valides
* le mot de passe est haché avec bcrypt
* l’utilisateur est enregistré en base

---

## Étape 2 — connexion

Lorsqu’un utilisateur se connecte :

* il envoie son email et son mot de passe
* le serveur cherche l’utilisateur
* le serveur compare le mot de passe saisi avec le hash stocké
* si c’est bon, le serveur crée un JWT
* le serveur renvoie ce token au client

---

## Étape 3 — accès à une route protégée

Pour accéder à une route privée :

* le client envoie son token
* le serveur vérifie le token
* si le token est valide, l’accès est autorisé
* sinon, l’accès est refusé

---

# 3. Ce qu’il faut prévoir dans l’API

Pour faire une auth simple avec bcrypt et JWT, il faut généralement :

* un **model User**
* un **controller d’authentification**
* des **routes d’authentification**
* un **middleware de vérification du token**

---

# 4. Le model User

Le model `User` contient souvent :

* `id`
* `username`
* `email`
* `password`

Attention :
le champ `password` ne stocke pas le mot de passe brut, mais le **hash bcrypt**.

Exemple d’idée :

* email : `test@test.com`
* password : `"$2b$10$..."`

---

# 5. Les routes classiques d’authentification

On retrouve souvent ces routes :

* `POST /auth/register`
* `POST /auth/login`
* `GET /auth/me`

---

## `POST /auth/register`

Cette route sert à créer un utilisateur.

Le client envoie par exemple :

```json
{
  "username": "julie",
  "email": "julie@test.com",
  "password": "motdepasse123"
}
```

Le serveur :

* valide les données
* hache le mot de passe
* crée l’utilisateur

---

## `POST /auth/login`

Cette route sert à connecter un utilisateur.

Le client envoie par exemple :

```json
{
  "email": "julie@test.com",
  "password": "motdepasse123"
}
```

Le serveur :

* cherche l’utilisateur
* compare le mot de passe
* génère un JWT
* renvoie le token

---

## `GET /auth/me`

Cette route sert à récupérer les infos de l’utilisateur connecté.

Le client envoie son token dans les headers.

Le serveur :

* vérifie le token
* récupère l’utilisateur concerné
* renvoie ses informations

---

# 6. bcrypt : comment ça fonctionne ?

bcrypt sert à :

* **hacher** un mot de passe à l’inscription
* **comparer** un mot de passe à la connexion

---

## Hachage à l’inscription

Quand l’utilisateur crée son compte :

1. il envoie un mot de passe
2. le serveur appelle bcrypt
3. bcrypt retourne un hash
4. ce hash est enregistré en base

---

## Vérification à la connexion

Quand l’utilisateur se connecte :

1. il envoie son mot de passe
2. le serveur récupère le hash enregistré
3. bcrypt compare le mot de passe saisi avec le hash
4. bcrypt répond vrai ou faux

Important :
on ne “déhash” pas un mot de passe.
On compare simplement le mot de passe brut avec le hash.

---

# 7. JWT : comment ça fonctionne ?

Le JWT est un token signé par le serveur.

Quand l’utilisateur se connecte avec succès, le serveur crée un token contenant généralement :

* l’id de l’utilisateur
* éventuellement son email
* éventuellement son rôle

Exemple d’idée de contenu :

```json
{
  "id": 12,
  "email": "julie@test.com",
  "role": "user"
}
```

Ensuite :

* le token est signé avec une clé secrète
* le client le stocke
* le client le renvoie dans les requêtes protégées

---

# 8. Où envoyer le token ?

Souvent, le token est envoyé dans le header `Authorization`.

Exemple :

```txt
Authorization: Bearer MON_TOKEN
```

Le mot `Bearer` indique que ce qui suit est le token.

---

# 9. Le middleware d’authentification

Le middleware sert à protéger certaines routes.

Son rôle :

* lire le header `Authorization`
* vérifier si un token est présent
* vérifier si le token est valide
* ajouter les infos utilisateur à la requête si besoin
* refuser l’accès sinon

---

## Exemple de logique

Pour une route protégée :

* pas de token → erreur 401
* token invalide → erreur 401
* token valide → on passe à la suite

---

# 10. Ordre conseillé pour mettre en place l’auth

## Étape 1 — créer le model User

Définir les champs utiles :

* username
* email
* password

---

## Étape 2 — créer la route d’inscription

Faire en sorte que :

* le mot de passe soit haché
* l’utilisateur soit enregistré

---

## Étape 3 — créer la route de connexion

Faire en sorte que :

* l’utilisateur soit retrouvé par email
* le mot de passe soit comparé
* le JWT soit généré

---

## Étape 4 — créer le middleware JWT

Faire en sorte que :

* le token soit lu
* le token soit vérifié
* l’accès soit bloqué si besoin

---

## Étape 5 — protéger certaines routes

Exemple :

* profil utilisateur
* création de contenu
* suppression de contenu
* administration

---

# 11. Structure de dossiers possible

```txt
src/
├── models/
│   └── user.model.js
├── controllers/
│   └── auth.controller.js
├── routes/
│   └── auth.routes.js
├── middlewares/
│   └── auth.middleware.js
├── utils/
│   └── token.js
├── app.js
└── server.js
```

---

# 12. Rôle de chaque élément

## Model User

Définit la structure de l’utilisateur en base.

## Auth Controller

Contient la logique de :

* register
* login
* me

## Auth Routes

Définit les routes :

* `/auth/register`
* `/auth/login`
* `/auth/me`

## Auth Middleware

Vérifie le JWT avant de laisser passer la requête.

---

# 13. Schéma mental simple

```txt
Inscription :
Client → /auth/register → hash du mot de passe → enregistrement en base

Connexion :
Client → /auth/login → vérification du mot de passe → création du JWT

Route protégée :
Client + token → middleware JWT → accès autorisé ou refusé
```

---

# 14. Ce qu’il faut absolument retenir

## bcrypt ne sert pas à connecter l’utilisateur

bcrypt sert à **sécuriser le mot de passe**.

## JWT ne sert pas à stocker le mot de passe

JWT sert à **identifier l’utilisateur connecté**.

## On ne stocke jamais un mot de passe en clair

Jamais.

## On ne fait pas confiance au client

Le serveur doit toujours :

* vérifier les données
* vérifier le mot de passe
* vérifier le token

---

# 15. Erreurs fréquentes à éviter

## 1. Stocker le mot de passe brut

C’est une grosse erreur de sécurité.

---

## 2. Mettre des informations sensibles dans le JWT

Le token ne doit pas contenir de mot de passe ni de donnée critique.

---

## 3. Oublier la date d’expiration du token

Un JWT doit avoir une durée de vie limitée.

---

## 4. Ne pas gérer les erreurs de connexion

Il faut prévoir les cas :

* utilisateur introuvable
* mot de passe incorrect
* token absent
* token invalide

---

## 5. Renvoyer tout l’utilisateur, y compris son mot de passe hashé

Il ne faut jamais renvoyer le mot de passe au client, même haché.

---

# 16. Résumé ultra simple

## bcrypt

Sert à **hacher** et **vérifier** les mots de passe.

## JWT

Sert à **garder la session côté client** via un token.

## Flow global

1. inscription → hash du mot de passe
2. connexion → comparaison du mot de passe
3. succès → création du token
4. route protégée → vérification du token

---

# 17. Phrase mémo pour les apprenants

**bcrypt protège le mot de passe, JWT protège l’accès aux routes.**

---

# 18. Mini check-list avant de coder l’auth

* ai-je un model `User` ?
* est-ce que le mot de passe est haché à l’inscription ?
* est-ce que le mot de passe est comparé à la connexion ?
* est-ce qu’un token est généré après connexion ?
* est-ce qu’un middleware vérifie le token ?
* est-ce que mes routes sensibles sont protégées ?

