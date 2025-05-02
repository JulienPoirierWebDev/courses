# ✅ SOLUTIONS — TP MongoDB Partie 8 : Agrégation

---

## 1. 📊 Nombre de livres lus par utilisateur

```js
db.users.aggregate([
	{ $unwind: '$books' },
	{ $match: { 'books.isRead': true } },
	{
		$group: {
			_id: '$email',
			totalBooksRead: { $sum: 1 },
		},
	},
]);
```

---

## 2. 🎮 Nombre de jeux vidéo par genre

```js
db.jeux_video.aggregate([
	{ $unwind: '$types' },
	{
		$group: {
			_id: '$types',
			total: { $sum: 1 },
		},
	},
	{ $sort: { total: -1 } },
]);
```

---

## 3. 🎞️ Top 3 des genres de films les plus fréquents

```js
db.films.aggregate([
	{ $unwind: '$types' },
	{
		$group: {
			_id: '$types',
			count: { $sum: 1 },
		},
	},
	{ $sort: { count: -1 } },
	{ $limit: 3 },
]);
```

---

## 4. ⏱️ Durée moyenne des films par genre

```js
db.films.aggregate([
	{ $unwind: '$types' },
	{
		$group: {
			_id: '$types',
			avgLength: { $avg: '$length' },
		},
	},
	{ $sort: { avgLength: -1 } },
]);
```

---

## 5. 🧩 Somme des années de lecture (exercice bonus)

```js
db.users.aggregate([
	{ $match: { email: 'marie.lemoine@example.com' } },
	{ $unwind: '$books' },
	{ $match: { 'books.isRead': true } },
	{
		$group: {
			_id: '$email',
			totalYearsRead: { $sum: '$books.year' },
		},
	},
]);
```

Voici les ✅ **solutions de la Partie 9 — Export et sauvegarde des données** avec `mongoexport`, dans différents formats et scénarios.

---

# ✅ SOLUTIONS — TP MongoDB Partie 9 : Export

---

## 1. 📥 Exporter `users` en JSON

```bash
mongoexport --db media_app --collection users --out users_export.json
```

> Résultat : un fichier `users_export.json` contenant tous les utilisateurs, **en NDJSON** (un document JSON par ligne).

---

## 2. 📥 Exporter `films` en CSV avec certains champs

```bash
mongoexport --db media_app --collection films \
  --type=csv --fields name,director,length,date_of_publication \
  --out films_export.csv
```

> Résultat : un fichier CSV avec entêtes de colonnes et uniquement les champs choisis.

---

## 3. 💾 Exporter `jeux_video` dans un dossier `backups`

```bash
mkdir -p backups
mongoexport --db media_app --collection jeux_video \
  --out backups/jeux_video.json
```

---

## 4. 👤 Exporter les utilisateurs ayant lu au moins un livre

```bash
mongoexport --db media_app --collection users \
  --query '{"books.isRead": true}' \
  --out readers.json
```

> Résultat : seuls les utilisateurs ayant au moins un livre marqué `isRead: true` sont exportés.

---

## 5. 🧪 Bonus : vérifier le format

Ouvre `readers.json` dans un éditeur de texte ou un visualiseur JSON :

-   Chaque ligne est un objet JSON complet
-   Si tu veux un tableau au lieu de NDJSON, tu peux utiliser :

```bash
mongoexport --db media_app --collection users \
  --out users_array.json --jsonArray
```

Mais **attention** : ce format est **moins compatible avec mongoimport** (qui préfère NDJSON).
