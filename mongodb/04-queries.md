# 🧾 Fiche pratique : Requêtes (queries) dans MongoDB

## Requête sur élement

> 📌 Une **query** est une **recherche** dans une collection.  
> Elle s’effectue avec la commande :
>
> ```javascript
> db.nomDeLaCollection.find(filtre, projection);
> ```

---

### 🔍 1. Requête simple (égalité)

```javascript
db.livres.find({ auteur: 'George Orwell' });
```

➡️ Affiche tous les documents où le champ `auteur` est exactement `"George Orwell"`.

---

### 🧩 2. Requête avec opérateurs de comparaison

| Opérateur | Signification             | Exemple                         |
| --------- | ------------------------- | ------------------------------- |
| `$gt`     | greater than (>)          | `{ annee: { $gt: 2000 } }`      |
| `$gte`    | greater than or equal (≥) | `{ annee: { $gte: 1950 } }`     |
| `$lt`     | less than (<)             | `{ annee: { $lt: 1984 } }`      |
| `$lte`    | less than or equal (≤)    | `{ annee: { $lte: 2000 } }`     |
| `$ne`     | not equal                 | `{ auteur: { $ne: "Orwell" } }` |

---

### 🔢 3. Requête avec plusieurs conditions (`AND` implicite)

```javascript
db.livres.find({ auteur: 'George Orwell', annee: { $gt: 1940 } });
```

➡️ Renvoie les documents qui remplissent **toutes les conditions**.

---

### ⚖️ 4. Requête avec `$or`, `$and`

```javascript
db.livres.find({
	$or: [{ auteur: 'George Orwell' }, { annee: { $lt: 1950 } }],
});
```

➡️ Renvoie les livres écrits par Orwell **ou** publiés avant 1950.

```javascript
db.livres.find({
	$and: [{ auteur: 'George Orwell' }, { annee: { $gt: 1940 } }],
});
```

---

### 🎯 5. Requête sur les valeurs dans un tableau

```javascript
db.livres.find({ tags: 'classique' });
```

➡️ Trouve tous les documents dont **le champ `tags` contient `"classique"`** (si c’est un tableau).

---

### 🧠 6. Requête avec `$in` et `$nin`

```javascript
db.livres.find({ auteur: { $in: ['Orwell', 'Bradbury'] } });
```

➡️ Auteur dans la liste fournie

```javascript
db.livres.find({ auteur: { $nin: ['Orwell', 'Bradbury'] } });
```

➡️ Auteur **pas dans** la liste

---

### 🧾 7. Projection (choisir les champs affichés)

```javascript
db.livres.find({}, { titre: 1, auteur: 1, _id: 0 });
```

➡️ Affiche uniquement les champs `titre` et `auteur`, **sans** le champ `_id`.

---

### 🔃 8. Trier et limiter les résultats

```javascript
db.livres.find().sort({ annee: -1 }).limit(5);
```

-   `sort({ champ: 1 })` = ordre croissant
-   `sort({ champ: -1 })` = ordre décroissant
-   `limit(n)` = limite le nombre de résultats

---

### 🧠 Récapitulatif rapide

| Action            | Exemples                                        |
| ----------------- | ----------------------------------------------- |
| Égalité           | `{ auteur: \"Orwell\" }`                        |
| Supérieur à       | `{ annee: { $gt: 2000 } }`                      |
| OU logique        | `$or: [{}, {}]`                                 |
| ET logique        | `{ champ1: ..., champ2: ... }` ou `$and: [...]` |
| Dans une liste    | `$in: [...]`                                    |
| Exclure une liste | `$nin: [...]`                                   |
| Projection        | `{ champ: 1, _id: 0 }`                          |
| Tri + limite      | `sort({ champ: -1 }).limit(5)`                  |

Super ! Voici la **fiche pratique complémentaire** sur les requêtes imbriquées dans MongoDB, idéale pour aller plus loin avec les **objets imbriqués** et les **tableaux de documents**. Toujours claire, pédagogique et prête à l’emploi pour un cours ou TP 👇

---

## 🧾 Requêtes imbriquées & tableaux

> 📌 Cette fiche complète les requêtes de base avec des cas où les **données sont structurées en profondeur** (objets dans objets, tableaux, etc.).

---

### 🔸 1. Rechercher dans un champ imbriqué (dot notation)

MongoDB permet d’accéder aux **sous-champs** avec la syntaxe `"parent.enfant"`.

```javascript
db.utilisateurs.find({ 'adresse.ville': 'Paris' });
```

➡️ Renvoie les utilisateurs dont la ville dans le champ `adresse` est `"Paris"`.

---

### 🔹 2. Rechercher un document contenant un **objet complet**

```javascript
db.utilisateurs.find({ adresse: { ville: 'Paris', codePostal: 75000 } });
```

➡️ Ne fonctionne que si **l’objet adresse correspond exactement à cette structure** (pas plus, pas moins).

---

### 🔘 3. Rechercher une valeur dans un tableau

```javascript
db.cours.find({ tags: 'javascript' });
```

➡️ Fonctionne si `tags` est un tableau comme `["html", "css", "javascript"]`.

---

### ⚙️ 4. Rechercher un **élément spécifique d’un tableau d’objets**

#### 🧪 Exemple de structure :

```javascript
{
  nom: "Livre de test",
  auteurs: [
    { nom: "Dupont", pays: "France" },
    { nom: "Smith", pays: "USA" }
  ]
}
```

#### 👉 Mauvaise méthode (trop large) :

```javascript
db.livres.find({ 'auteurs.nom': 'Dupont', 'auteurs.pays': 'France' });
```

➡️ Cela vérifie que **n’importe quel auteur a le nom Dupont ET n’importe quel autre a France**, pas forcément le même.

---

### ✅ Bonne méthode : `$elemMatch`

```javascript
db.livres.find({
	auteurs: {
		$elemMatch: {
			nom: 'Dupont',
			pays: 'France',
		},
	},
});
```

➡️ Ici, on vérifie **qu’il existe un auteur unique** avec **les deux conditions**.

---

### 🧮 5. Requête sur **la taille d’un tableau**

```javascript
db.livres.find({ tags: { $size: 3 } });
```

➡️ Renvoie les livres qui ont **exactement 3 tags**.

---

### 🔍 6. Requête sur un **indice précis d’un tableau**

```javascript
db.notes.find({ 'valeurs.0': 20 });
```

➡️ Recherche les documents où **le premier élément** du tableau `valeurs` vaut `20`.

---

### 🧠 Récapitulatif rapide

| Cas d’usage                              | Syntaxe / Exemple                          |
| ---------------------------------------- | ------------------------------------------ |
| Champ imbriqué (dot notation)            | `"adresse.ville": "Paris"`                 |
| Objet exact                              | `adresse: { ville: ..., codePostal: ... }` |
| Valeur simple dans un tableau            | `{ tags: "javascript" }`                   |
| Condition multiple dans un tableau objet | `$elemMatch: { ... }`                      |
| Taille exacte d’un tableau               | `$size: 3`                                 |
| Accès par indice de tableau              | `"valeurs.0": 20`                          |

# Bonus

Parfait, tu as déjà couvert l’essentiel des **queries MongoDB**. Pour aller encore plus loin sans tomber dans l’agrégation, voici des **compléments utiles** à ajouter à ta fiche pour enrichir la partie **requêtes** :

---

## 🧾 Requêtes avancées complémentaires

### 🕵️‍♂️ 9. Recherche partielle avec les expressions régulières (`$regex`)

Permet de rechercher des chaînes de caractères **partiellement** ou **insensibles à la casse**.

```javascript
db.livres.find({ titre: { $regex: 'terre', $options: 'i' } });
```

➡️ Trouve les titres contenant **"terre"**, peu importe la casse (`i` = insensitive).

| Option | Description           |
| ------ | --------------------- |
| `i`    | insensible à la casse |
| `m`    | multi-lignes          |
| `^abc` | commence par "abc"    |
| `abc$` | finit par "abc"       |

---

### ❓ 10. Requête sur l’existence d’un champ (`$exists`)

```javascript
db.livres.find({ resume: { $exists: true } });
```

➡️ Affiche les livres **qui ont un champ `resume`** (qu’il soit vide ou non).

---

### 🈳 11. Requête sur les champs `null`

```javascript
db.livres.find({ editeur: null });
```

➡️ Renvoie les documents **où le champ `editeur` est `null` OU n’existe pas**.

Pour chercher uniquement les `null` explicites :

```javascript
db.livres.find({ editeur: { $type: 'null' } });
```

---

### 🔢 12. Tester le type d’un champ (`$type`)

```javascript
db.livres.find({ pages: { $type: 'int' } });
```

➡️ Vérifie que le champ `pages` est un entier.

| Type MongoDB | Code | Description           |
| ------------ | ---- | --------------------- |
| `"double"`   | 1    | Nombre décimal        |
| `"string"`   | 2    | Chaîne de caractères  |
| `"object"`   | 3    | Objet BSON            |
| `"array"`    | 4    | Tableau               |
| `"bool"`     | 8    | Booléen               |
| `"date"`     | 9    | Date                  |
| `"null"`     | 10   | Null explicite        |
| `"int"`      | 16   | Entier (32 bits)      |
| `"long"`     | 18   | Entier long (64 bits) |

---

### 📚 13. Rechercher des documents sans un champ spécifique

```javascript
db.livres.find({ editeur: { $exists: false } });
```

➡️ Renvoie les livres **sans champ `editeur` du tout**.

---

### 🔀 14. Mélanger des opérateurs (`$expr`, `$mod`, `$where`)

#### ➕ Comparaison entre champs (avec `$expr`)

```javascript
db.produits.find({
	$expr: { $gt: ['$stock', '$seuil'] },
});
```

➡️ Renvoie les documents où `stock` est supérieur à `seuil`.

#### 🔢 Requête modulo (`$mod`)

```javascript
db.notes.find({ score: { $mod: [2, 0] } });
```

➡️ Renvoie les notes **paires**.

#### ⚠️ Requête JavaScript personnalisée (`$where`)

```javascript
db.livres.find({
	$where: function () {
		return this.pages > 100 && this.titre.startsWith('L');
	},
});
```

> ⚠️ Peu performant, à éviter dans les cas lourds.

---

### 🧠 Résumé des bonus

| Action                          | Syntaxe                                           |
| ------------------------------- | ------------------------------------------------- |
| Recherche partielle             | `{ champ: { $regex: \"mot\", $options: \"i\" } }` |
| Vérifier l'existence d'un champ | `{ champ: { $exists: true } }`                    |
| Tester la nullité               | `{ champ: null }` ou `{ $type: \"null\" }`        |
| Vérifier le type                | `{ champ: { $type: \"string\" } }`                |
| Comparaison entre champs        | `$expr: { $gt: [\"$champ1\", \"$champ2\"] }`      |
| Modulo                          | `{ champ: { $mod: [2, 0] } }`                     |
| Script JS personnalisé          | `$where: function() { return ... }`               |
