Bien sûr ! Voici la **version complète en Markdown** de ta partie sur les **index MongoDB**, développée pour un usage pédagogique, sans traiter les requêtes géospatiales comme demandé. 👇

---

# 🧾 Les index dans MongoDB

## 📚 Introduction

Les **index** sont à une collection ce que les **index d'un livre** sont à son contenu : ils permettent de **retrouver une information beaucoup plus rapidement**.

Créer un index dans MongoDB a donc deux conséquences importantes :

-   ➡️ **Amélioration des performances de lecture** (plus rapide pour rechercher des documents).
-   ➡️ **Légère dégradation des performances d'écriture** (plus long pour insérer, mettre à jour ou supprimer, car il faut maintenir l'index à jour).

De plus, un index permet aussi de **trier automatiquement les résultats** selon le champ indexé.

---

## ⚙️ Que se passe-t-il sans index ?

Sans index, MongoDB effectue ce qu'on appelle un **collection scan** :

> 🔍 MongoDB **parcourt l'intégralité** des documents de la collection pour répondre à une requête.

Cela devient rapidement **très lent** si la collection contient des milliers ou millions de documents.

---

## ⚙️ Que se passe-t-il avec un index ?

Avec un index, MongoDB peut effectuer un **index scan** :

> 📖 MongoDB **n'analyse que les documents pointés par l'index**, sans toucher aux autres.

➡️ Résultat : **recherches ultra rapides** sur les champs indexés.

---

# 🧩 Types d'index importants en MongoDB

---

## 1. 🟢 Index simple

Un index simple est créé sur **un seul champ**.

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex({ champ: 1 });
```

-   `1` signifie **ordre croissant**.
-   `-1` signifie **ordre décroissant**.

### 🔹 Exemple :

```javascript
db.utilisateurs.createIndex({ nom: 1 });
```

➡️ Recherche plus rapide sur `nom`, et tri automatique par ordre alphabétique.

---

## 2. 🟡 Index composé

Un **index composé** est créé sur **plusieurs champs** simultanément.

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex({ champ1: 1, champ2: -1 });
```

-   Le premier champ est prioritaire pour le tri.
-   Le second est utilisé si plusieurs documents ont la même valeur pour le premier champ.

### 🔹 Exemple :

```javascript
db.utilisateurs.createIndex({ pays: 1, age: -1 });
```

➡️ Recherche optimisée pour trouver les utilisateurs par pays, triés par âge décroissant.

---

## 3. 🔵 Index unique

Un **index unique** garantit que **chaque valeur du champ est différente** (pas de doublon possible).

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex({ champ: 1 }, { unique: true });
```

### 🔹 Exemple :

```javascript
db.utilisateurs.createIndex({ email: 1 }, { unique: true });
```

➡️ Impossible d'insérer deux utilisateurs avec le même email.

---

## 4. 🟠 Index partiel

Un **index partiel** n'indexe **qu'une partie des documents**, selon une condition.

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex(
	{ champ: 1 },
	{ partialFilterExpression: { autreChamp: { $exists: true } } }
);
```

### 🔹 Exemple :

```javascript
db.utilisateurs.createIndex(
	{ telephone: 1 },
	{ partialFilterExpression: { telephone: { $exists: true } } }
);
```

➡️ Seuls les utilisateurs ayant un numéro de téléphone seront indexés.

---

## 5. 🟤 Index TTL (Time To Live)

Un **index TTL** supprime automatiquement les documents après un certain temps.

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex(
	{ dateExpiration: 1 },
	{ expireAfterSeconds: 3600 }
);
```

### 🔹 Exemple :

```javascript
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 });
```

➡️ Les sessions créées seront supprimées après 24 heures (86400 secondes).

> ⚠️ L'index TTL fonctionne uniquement sur des champs de type `Date`.

---

## 6. 🔴 Index textuel

Un **index textuel** permet de **faire des recherches plein texte** sur un ou plusieurs champs.

### 🔹 Syntaxe :

```javascript
db.maCollection.createIndex({ champTexte: 'text' });
```

### 🔹 Exemple :

```javascript
db.articles.createIndex({ titre: 'text', contenu: 'text' });
```

➡️ Recherche optimisée avec `db.articles.find({ $text: { $search: \"MongoDB\" } })`.

---

# 🧠 Résumé rapide

| Type d'index | Description                           |
| ------------ | ------------------------------------- |
| Simple       | Sur un seul champ                     |
| Composé      | Sur plusieurs champs                  |
| Unique       | Empêche les doublons                  |
| Partiel      | Indexe seulement certains documents   |
| TTL          | Supprime les documents après un délai |
| Textuel      | Recherche plein texte                 |

---

Veux-tu que je te prépare juste après une **fiche exercices “créer et tester les index”** pour entraîner les étudiants ? 🚀  
Ça ferait un super enchaînement pratique !
