# Fiche mémo — Par quoi commencer pour créer une API REST ?

Quand on crée une API REST, on ne commence **pas** par écrire des routes au hasard.
On commence par réfléchir à **ce que l’application doit gérer**.

## 1. Identifier les ressources de l’API

Une API REST manipule des **ressources**.

Exemples :

* `users`
* `posts`
* `products`
* `orders`

Il faut donc se demander :

* Quelles sont les grandes données de mon application ?
* Quels objets dois-je stocker ?
* Quelles actions l’utilisateur peut-il faire dessus ?

Exemple :
si je fais une API de recettes, mes ressources peuvent être :

* `recipes`
* `categories`
* `users`

---

## 2. Définir les opérations à faire sur chaque ressource

Pour chaque ressource, il faut lister les actions utiles.

En REST, on retrouve souvent :

* récupérer tous les éléments
* récupérer un élément par son id
* créer un élément
* modifier un élément
* supprimer un élément

Exemple pour `recipes` :

* voir toutes les recettes
* voir une recette
* créer une recette
* modifier une recette
* supprimer une recette

Cela permet ensuite de construire les routes.

---

## 3. Définir les routes (routers)

Les routes représentent les points d’entrée de l’API.

Exemple classique pour une ressource `recipes` :

* `GET /recipes`
* `GET /recipes/:id`
* `POST /recipes`
* `PUT /recipes/:id`
* `DELETE /recipes/:id`

Le rôle du **router** :

* écouter une URL
* écouter une méthode HTTP
* envoyer la requête vers le bon contrôleur

Le router ne doit pas contenir toute la logique métier.
Son rôle est surtout de **rediriger proprement**.

Exemple d’idée :

* la route reçoit la requête
* elle appelle la bonne fonction du controller

---

## 4. Définir les modèles (models)

Le model représente la structure des données.

C’est ici qu’on définit :

* les champs
* les types
* parfois les validations de base
* parfois les relations entre entités

Exemple pour `Recipe` :

* `title`
* `description`
* `ingredients`
* `duration`
* `userId`

Le model sert donc à répondre à la question :

**“À quoi ressemble une recette dans ma base de données ?”**

C’est une étape essentielle, car si les models sont mal pensés, toute l’API devient bancale.

---

## 5. Définir les controllers

Le controller contient la logique liée à la requête HTTP.

Son rôle :

* récupérer les données envoyées par le client
* appeler le model ou le service
* gérer les cas d’erreur
* renvoyer une réponse JSON

Exemple :

* `getAllRecipes`
* `getRecipeById`
* `createRecipe`
* `updateRecipe`
* `deleteRecipe`

Le controller fait le lien entre :

* la requête entrante
* les données
* la réponse finale

---

## 6. Penser la structure des dossiers

Une API REST propre est organisée.

Exemple d’arborescence simple :

```txt
src/
├── models/
│   └── recipe.model.js
├── controllers/
│   └── recipe.controller.js
├── routes/
│   └── recipe.routes.js
├── middlewares/
├── config/
├── app.js
└── server.js
```

Cette séparation permet de savoir :

* où se trouve la structure des données
* où se trouve la logique métier
* où se trouvent les routes

---

## 7. Ordre conseillé pour travailler

L’ordre le plus logique est souvent celui-ci :

### Étape 1 — réfléchir aux ressources

Exemple : users, recipes, categories

### Étape 2 — réfléchir aux données

Quels champs pour chaque ressource ?

### Étape 3 — créer les models

On définit la structure des objets

### Étape 4 — créer les controllers

On écrit les fonctions qui vont traiter les requêtes

### Étape 5 — créer les routers

On relie les URL aux bonnes fonctions du controller

### Étape 6 — tester avec Postman / Insomnia

On vérifie que chaque route répond correctement

---

# Résumé simple à retenir

## On commence par :

1. identifier les ressources
2. définir les données
3. créer les models
4. créer les controllers
5. créer les routers
6. tester l’API

---

# Rôle de chaque élément

## Router

Il définit les URL et les méthodes HTTP.

Exemple :

* `GET /recipes`
* `POST /recipes`

## Model

Il définit la structure des données.

Exemple :

* titre
* description
* durée

## Controller

Il exécute l’action demandée.

Exemple :

* récupérer toutes les recettes
* créer une recette

---

# Schéma mental simple

```txt
Client → Route → Controller → Model / Base de données → Réponse JSON
```

---

# Exemple concret

Pour une API de recettes :

## Model

Une recette contient :

* un titre
* une description
* une durée

## Controller

On crée des fonctions :

* récupérer toutes les recettes
* récupérer une recette
* ajouter une recette
* modifier une recette
* supprimer une recette

## Router

On crée les routes :

* `GET /recipes`
* `GET /recipes/:id`
* `POST /recipes`
* `PUT /recipes/:id`
* `DELETE /recipes/:id`

---

# Erreurs fréquentes à éviter

## 1. Commencer par coder sans réfléchir aux ressources

Résultat : routes incohérentes, code désorganisé

## 2. Mettre toute la logique dans les routes

Les routes doivent rester simples

## 3. Mélanger model, controller et route

Chaque partie a un rôle précis

## 4. Ne pas tester au fur et à mesure

Il faut tester chaque route dès qu’elle est créée

---

# Phrase mémo pour les apprenants

**Une API REST se construit en répondant à 3 questions :**

* Quelles données je gère ? → **models**
* Quelles actions je veux faire ? → **controllers**
* Par quelles URL j’y accède ? → **routers**
