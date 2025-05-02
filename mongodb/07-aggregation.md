Parfait ! Voici un **chapitre clair et progressif** sur **l’agrégation dans MongoDB**, adapté à ton public Bac+3, avec une pédagogie orientée sur la **métaphore du pipeline**, des **étapes** successives, et des **exemples pratiques**.

---

# 🧪 Chapitre : L'agrégation dans MongoDB

## 🚰 L'idée du pipeline d'agrégation

L'agrégation dans MongoDB fonctionne comme un **pipeline de transformation des données**.

> Imagine un **tapis roulant** : à chaque étape, tu filtres, transformes, regroupes, tries, etc.

Chaque étape du pipeline est représentée par un **opérateur commençant par `$`** : `$match`, `$group`, `$sort`, `$project`...

---

## 🛠️ Syntaxe de base

```javascript
db.nomCollection.aggregate([
  { étape1 },
  { étape2 },
  ...
])
```

---

## 🔹 Les étapes les plus courantes

### 1. `$match` – Filtres (comme `find()`)

```javascript
{ $match: { statut: "actif" } }
```

➡️ Ne garde que les documents correspondant à un critère.

---

### 2. `$project` – Sélectionne ou transforme les champs

```javascript
{ $project: { nom: 1, age: 1, actif: 1, _id: 0 } }
```

➡️ Permet aussi de créer des champs calculés :

```javascript
{ $project: { nomComplet: { $concat: ["$prenom", " ", "$nom"] } } }
```

---

### 3. `$group` – Regroupement (comme `GROUP BY` en SQL)

```javascript
{
  $group: {
    _id: "$pays",
    total: { $sum: 1 }
  }
}
```

➡️ Regroupe les documents par pays et compte combien il y en a.

Autres opérateurs possibles : `$avg`, `$min`, `$max`, `$push`, `$addToSet`, etc.

---

### 4. `$sort` – Tri

```javascript
{ $sort: { age: -1 } } // décroissant
```

---

### 5. `$limit` – Limite le nombre de résultats

```javascript
{ $limit: 10 }
```

---

### 6. `$skip` – Ignore un nombre de résultats

```javascript
{ $skip: 5 }
```

➡️ Très utile avec `$limit` pour faire de la **pagination**.

---

### 7. `$unwind` – "Déplie" un tableau

```javascript
{ $unwind: "$tags" }
```

➡️ Si un document contient un tableau `["html", "css"]`, il devient deux documents.

---

### 8. `$lookup` – Jointure entre deux collections

```javascript
{
  $lookup: {
    from: "clients",
    localField: "clientId",
    foreignField: "_id",
    as: "client"
  }
}
```

➡️ Ajoute un tableau `client` avec les infos liées.

---

### 9. `$addFields` – Ajoute un champ calculé

```javascript
{ $addFields: { majeur: { $gte: ["$age", 18] } } }
```

---

## 📦 Exemple complet

```javascript
db.utilisateurs.aggregate([
  { $match: { actif: true } },
  { $project: { nom: 1, pays: 1, age: 1 } },
  { $group: { _id: "$pays", moyenneAge: { $avg: "$age" } } },
  { $sort: { moyenneAge: -1 } }
])
```

➡️ Objectif :

* Ne garder que les utilisateurs actifs
* Garder uniquement certaines colonnes
* Regrouper par pays
* Calculer l’âge moyen par pays
* Trier les pays par âge décroissant

---

## 🔁 Étapes combinables et ordonnées

| Étape          | À quel moment l'utiliser ?               |
| -------------- | ---------------------------------------- |
| `$match`       | En tout début : filtrer vite             |
| `$project`     | Après `$match` : sélectionner des champs |
| `$group`       | Après filtrage + sélection               |
| `$sort`        | En fin, après le calcul ou projection    |
| `$skip/$limit` | Très utile en pagination                 |
| `$unwind`      | Juste avant un `$group` ou `$lookup`     |

---

## 🧠 Bonnes pratiques

* 🔄 Réutiliser les étapes `$match` le plus tôt possible (performance)
* 🔍 Utiliser `$project` pour éviter de traîner des champs inutiles
* 📊 `$group` est puissant mais à utiliser sur des collections raisonnables
* 👁️ Visualiser les étapes avec MongoDB Compass (mode *Aggregation Pipeline*)

---

Souhaites-tu que je t’ajoute ensuite :

* 💡 une **fiche d’exercices progressifs** ?
* 📁 un **jeu de données + 3 cas métiers à résoudre avec des pipelines** ?
* 👨‍🏫 un **TP projeté pour guidage pas à pas en classe** ?
