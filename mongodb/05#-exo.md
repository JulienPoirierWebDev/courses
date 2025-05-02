# 🔍 TP MongoDB — Partie 5 : Requêtes de lecture

---

## 🎯 Objectifs

-   Apprendre à interroger les collections MongoDB
-   Utiliser des **filtres simples** et **composés**
-   Maîtriser les **projections** pour n’afficher que certaines données
-   Rechercher dans des **tableaux** et des **documents imbriqués**

---

## ✅ Étapes à réaliser

Tu vas effectuer des recherches dans les collections suivantes :  
👉 `users`, `films`, `jeux_video`

Toutes les requêtes doivent être effectuées **dans mongosh** avec l’utilisateur `medialib`.

---

## 1. 🔍 Rechercher les livres lus par un utilisateur

> Objectif : accéder à un sous-tableau (embedded array) dans `users`

**Consigne :** Affiche uniquement les livres (`books`) d’un utilisateur donné (`email`) où `isRead` est `true`.

💡 _Astuce :_ il faudra cibler les sous-documents du tableau `books`.

---

## 2. 🎬 Afficher tous les films de type "Drame"

> Objectif : recherche dans un tableau (`types`)

**Consigne :** Affiche tous les films qui contiennent "Drame" dans leur champ `types`.

💡 _Astuce :_ utilise l’opérateur `$in` sur un champ tableau.

---

## 3. 📏 Afficher uniquement le nom et la durée des films

> Objectif : projection de champs

**Consigne :** Affiche uniquement les champs `name` et `length` pour tous les documents de la collection `films`.

💡 _Astuce :_ dans `find()`, le 2ᵉ paramètre permet de faire une projection.

---

## 4. 🎮 Trouver les jeux en ligne multijoueurs (> 2 joueurs)

> Objectif : filtres combinés

**Consigne :** Affiche tous les jeux vidéo :

-   dont `online` vaut `true`
-   et `multiplayers` est supérieur à 2

💡 _Astuce :_ combine `$gt` et `online: true` avec `$and` ou syntaxe simplifiée.

---

## 5. 📅 Chercher les films sortis après 2015

**Consigne :** Affiche tous les films dont `date_of_publication` est postérieure au `1er janvier 2016`.

💡 _Astuce :_ utilise `ISODate("2016-01-01")` avec `$gt`

---

## 6. 🧩 Afficher uniquement les livres contenant le mot "futur" dans le titre

**Consigne :** Cherche les utilisateurs qui ont **au moins un livre** dans `books.title` contenant `"futur"`.

💡 _Astuce :_ utilise une **regex insensible à la casse** avec `/futur/i`

---

## 🧠 Tips utiles

-   Utilise `db.collection.find()` avec :
    -   **1er argument** : le **filtre**
    -   **2e argument** (optionnel) : la **projection**
-   Les tableaux se filtrent avec `$in` ou `$elemMatch`
-   Les dates se comparent avec `$gt`, `$lt`, etc.
-   Une regex s’écrit `/motcle/i` → insensible à la casse

---

## 📚 Mots-clés utiles

-   `find()`
-   `$in`, `$gt`, `$and`
-   `$elemMatch`, `$regex`
-   `projection`
-   `embedded documents`
-   `array queries`

# ✏️ TP MongoDB — Partie 6 : Mise à jour des documents

---

## 🎯 Objectifs

-   Mettre à jour les données existantes avec les commandes `updateOne` et `updateMany`
-   Ajouter ou retirer des éléments d’un tableau (`$push`, `$pull`)
-   Modifier un champ dans un sous-document (`$set`)
-   Travailler sur des structures imbriquées

---

## ✅ Étapes à réaliser

Toutes les opérations doivent être réalisées **dans mongosh** avec l’utilisateur `medialib`.

---

### 1. 📚 Ajouter un nouveau livre à un utilisateur

> Objectif : apprendre à **ajouter dans un tableau de sous-documents**

**Consigne :** Ajoute un nouveau livre à un utilisateur identifié par son email. Le livre doit comporter tous les champs : `title`, `author`, `year`, `genres`, `isRead`.

💡 _Utilise l’opérateur `$push`._

---

### 2. ✅ Marquer un livre comme lu (`isRead: true`)

> Objectif : cibler un sous-document d’un tableau et modifier une de ses propriétés

**Consigne :** Pour un utilisateur donné, modifie un livre précis (par son `title`) pour que `isRead` passe à `true`.

💡 _Astuce :_ utilise un filtre combiné avec un `updateOne` et un `$set` sur `books.$.isRead`.

---

### 3. 📝 Ajouter ou modifier une note (`personalNote`) sur un livre

> Objectif : modifier un champ dans un tableau embarqué

**Consigne :** Ajoute une `personalNote` à un livre donné, ou modifie la note existante.

💡 _Astuce :_ même logique que l’étape 2, ciblée sur `books.$.personalNote`.

---

### 4. ❌ Supprimer un livre d’un utilisateur

> Objectif : retirer un élément précis d’un tableau

**Consigne :** Supprime un livre (par son `title`) du tableau `books` d’un utilisateur.

💡 _Utilise l’opérateur `$pull`._

---

### 5. 🧼 Supprimer la note (`personalNote`) de tous les livres d’un utilisateur

> Objectif : retirer un champ d’un sous-document ou plusieurs

**Consigne :** Pour un utilisateur, **supprime le champ `personalNote`** de tous ses livres.

💡 _Piste bonus :_ Cette manipulation implique une **mise à jour de tous les éléments du tableau**. (Requiert une opération avec `arrayFilters`, selon le niveau visé)

---

## 🧠 Tips utiles

-   `$push` ajoute à un tableau
-   `$pull` supprime d’un tableau les éléments correspondants à un filtre
-   `$set` modifie une valeur
-   `books.$` fait référence au **premier élément du tableau** qui correspond au filtre

---

## 📚 Mots-clés utiles

-   `updateOne()`
-   `$set`, `$unset`, `$push`, `$pull`
-   `embedded document`
-   `books.$.champ`
-   `arrayFilters` _(bonus)_
