# ✅ SOLUTIONS — TP MongoDB Partie 5 : Lecture et filtres

---

## 1. 📖 Livres lus par un utilisateur donné

```js
db.users.find(
	{ email: 'marie.lemoine@example.com' },
	{ books: { $elemMatch: { isRead: true } }, firstName: 1, _id: 0 }
);
```

🔍 Cette requête :

-   Cherche l’utilisateur par email
-   N’affiche que **les livres lus** (`isRead: true`) dans son tableau `books`
-   Utilise `$elemMatch` pour ne retourner qu’un **élément correspondant**

---

## 2. 🎬 Tous les films de type "Drame"

```js
db.films.find({ types: { $in: ['Drame'] } }).pretty();
```

🔍 Utilise `$in` pour chercher "Drame" dans le tableau `types`.

---

## 3. 🕒 Nom et durée des films

```js
db.films.find({}, { name: 1, length: 1, _id: 0 });
```

🔍 La projection :

-   `1` = afficher ce champ
-   `_id: 0` = ne pas afficher le champ `_id`

---

## 4. 🎮 Jeux en ligne multijoueurs > 2 joueurs

```js
db.jeux_video.find({
	online: true,
	multiplayers: { $gt: 2 },
});
```

🔍 Pas besoin de `$and` ici : les filtres peuvent être combinés directement dans l'objet.

---

## 5. 📅 Films sortis après 2015

```js
db.films.find({
	date_of_publication: { $gt: ISODate('2016-01-01') },
});
```

---

## 6. 🔍 Livres dont le titre contient "futur"

```js
db.users.find({
	'books.title': { $regex: /futur/i },
});
```

🔍 Cette requête cherche **n’importe quel document utilisateur** où **au moins un titre de livre** contient "futur" (majuscule/minuscule ignorée).

Voici les ✅ **solutions de la Partie 6 — Mise à jour des documents** dans MongoDB :

---

# ✅ SOLUTIONS — TP MongoDB Partie 6 : Update, Push, Pull

---

## 1. 📚 Ajouter un nouveau livre à un utilisateur

```js
db.users.updateOne(
	{ email: 'marie.lemoine@example.com' },
	{
		$push: {
			books: {
				title: 'La Nuit des temps',
				author: 'René Barjavel',
				year: 1968,
				genres: ['Science-fiction', 'Romance'],
				isRead: false,
			},
		},
	}
);
```

---

## 2. ✅ Marquer un livre comme lu

```js
db.users.updateOne(
	{ email: 'marie.lemoine@example.com', 'books.title': "L'Étranger" },
	{
		$set: { 'books.$.isRead': true },
	}
);
```

> 🔍 Le `$` dans `"books.$.isRead"` cible le **premier livre correspondant** au filtre.

---

## 3. 📝 Ajouter ou modifier une `personalNote` sur un livre

```js
db.users.updateOne(
	{ email: 'marie.lemoine@example.com', 'books.title': "L'Étranger" },
	{
		$set: { 'books.$.personalNote': 'Lecture troublante mais marquante.' },
	}
);
```

---

## 4. ❌ Supprimer un livre par son titre

```js
db.users.updateOne(
	{ email: 'marie.lemoine@example.com' },
	{
		$pull: { books: { title: 'Le Meilleur des mondes' } },
	}
);
```

---

## 5. 🧼 Supprimer le champ `personalNote` de tous les livres

```js
db.users.updateOne(
	{ email: 'marie.lemoine@example.com' },
	{
		$unset: { 'books.$[].personalNote': '' },
	}
);
```

> 🔍 `$[]` est le **all positional operator**, qui cible **tous les éléments** du tableau.
