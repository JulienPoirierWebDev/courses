

# 🧠 TP MongoDB — Partie 8 : Requêtes avancées avec agrégation

---

## 🎯 Objectifs

-   Comprendre la logique du **pipeline d’agrégation**
-   Réaliser des statistiques simples sur les collections
-   Découvrir les opérateurs : `$match`, `$group`, `$project`, `$sort`, `$unwind`

---

## ✅ Étapes à réaliser

---

### 1. 📊 Nombre de livres lus par utilisateur

**Consigne :**
Affiche pour chaque utilisateur le nombre de livres dont `isRead` est `true`.

💡 _Astuce :_ il faut **d’abord déplier (`$unwind`)** le tableau `books`, puis filtrer avec `$match`, et enfin compter avec `$group`.

---

### 2. 📈 Nombre de jeux vidéo par genre

**Consigne :**
Calcule combien de jeux vidéo existent **par genre** (`types`), toutes plateformes confondues.

💡 _Astuce :_ il faut d’abord **`$unwind` le champ `types`**, puis **`$group` par genre**.

---

### 3. 🥇 Top 3 des types de films les plus fréquents

**Consigne :**
Affiche les 3 genres de films les plus utilisés dans la collection `films`, **avec leur nombre d’occurrences**.

💡 _Astuce :_ même approche que précédemment, mais **ajouter `$sort` et `$limit`**.

---

### 4. ⏱️ Durée moyenne des films par genre

**Consigne :**
Calcule la **durée moyenne** (`length`) des films pour chaque genre.

💡 _Tu as besoin de_ :

-   `$unwind` le tableau `types`
-   `$group` par genre avec `$avg`

---

### 5. 🧩 Bonus : temps total de lecture estimé pour un utilisateur

**Consigne :**
À partir des années de publication des livres lus (`isRead: true`), **additionne toutes les années** pour un utilisateur.

💡 _Ce n’est pas réaliste, mais ça permet d’introduire `$sum` sur un champ spécifique_

---

## 🧠 Tips utiles

-   `$unwind` : transforme chaque élément d’un tableau en document unique
-   `$group` : structure de base : `{ _id: "clé", total: { $sum: 1 } }`
-   `$sort` : trie un champ (ascendant ou descendant)
-   `$project` : formate la sortie
-   `$avg`, `$sum`, `$count` : agrégations numériques

---

## 📚 Mots-clés utiles

-   `aggregate()`
-   `$unwind`, `$group`, `$project`
-   `$sort`, `$limit`, `$match`
-   `$sum`, `$avg`, `$count`

# 📤 TP MongoDB — Partie 9 : Export et sauvegarde des données

---

## 🎯 Objectifs

-   Apprendre à **sauvegarder des données** dans des fichiers locaux
-   Utiliser **`mongoexport`** pour exporter au format JSON ou CSV
-   Préparer des **fichiers de partage, backup ou analyse**

---

## ✅ Étapes à réaliser

---

### 1. 📥 Exporter les utilisateurs vers un fichier JSON

**Consigne :**
Utilise `mongoexport` pour exporter la collection `users` dans un fichier nommé `users_export.json`.

💡 _Astuce :_ le fichier sera créé dans le dossier où tu exécutes la commande.

---

### 2. 📥 Exporter la collection `films` vers un fichier CSV

**Consigne :**
Exportez les films avec uniquement les champs `name`, `director`, `length` et `date_of_publication`.

💡 _Astuce :_ tu dois préciser les **champs à exporter** avec l’option `--fields`.

---

### 3. 💾 Créer un dossier `backups` et y placer une sauvegarde

**Consigne :**
Crée un dossier `backups/`, et exporte la collection `jeux_video` en JSON dans ce dossier.

💡 _Astuce :_ utilise un chemin relatif comme `backups/jeux_video.json`.

---

### 4. 👤 Exporter uniquement les utilisateurs qui ont lu au moins 1 livre

**Consigne :**
Filtrer les utilisateurs avec au moins un livre (`books.isRead: true`) et les exporter en JSON dans un fichier nommé `readers.json`.

💡 _Astuce :_ utilise `--query` avec une condition.

---

### 5. 🧪 (Bonus) Vérifier que l’export est bien formaté

**Consigne :**
Ouvre un des fichiers JSON et vérifie :

-   Le format NDJSON (un document par ligne)
-   Le champ `_id` est présent, sauf si tu l’as exclu avec `--noObjectId`

---

## 🧠 Tips utiles

-   `mongoexport` s’exécute **en dehors de `mongosh`**
-   Le format par défaut est NDJSON (un objet JSON par ligne)
-   Utilise `--jsonArray` si tu veux un tableau JSON (plus rare)
-   `--query` prend un JSON entre apostrophes `'{}'` en ligne de commande
-   `--fields` sépare les champs par des virgules (sans espace)

---

## 📚 Mots-clés utiles

-   `mongoexport`
-   `--db`, `--collection`
-   `--out`, `--type`
-   `--fields`
-   `--query`
-   `--noObjectId` _(facultatif)_
