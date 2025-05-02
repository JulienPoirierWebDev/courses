## 🧾 Fiche pratique : `update` avec opérateurs dans MongoDB

> MongoDB permet de **modifier des documents** de manière fine et performante grâce à des **opérateurs de mise à jour**.

---

## ⚙️ Syntaxe de base

```javascript
db.nomCollection.updateOne({ filtre }, { opérateurDeMiseAJour });
```

> Pour modifier plusieurs documents : `updateMany()`

---

### 🟢 `$set` – Modifier ou ajouter un champ

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $set: { ville: 'Paris' } });
```

➡️ Ajoute ou remplace la valeur du champ `ville`.

---

### 🔢 `$inc` – Incrémenter une valeur numérique

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $inc: { points: 5 } });
```

➡️ Incrémente la valeur de `points` de 5.
(ou la crée avec la valeur `5` si elle n’existe pas)

---

### ➕ `$push` – Ajouter un élément à un tableau

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $push: { tags: 'premium' } });
```

➡️ Ajoute `"premium"` à la fin du tableau `tags`.

---

### 🔄 `$addToSet` – Ajouter un élément **si pas déjà présent**

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $addToSet: { tags: 'abonné' } });
```

➡️ Ajoute `"abonné"` uniquement si ce n’est pas déjà dans le tableau `tags`.

---

### ➖ `$pull` – Supprimer un élément d’un tableau

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $pull: { tags: 'spam' } });
```

➡️ Retire `"spam"` du tableau `tags`.

---

### 🧹 `$unset` – Supprimer un champ

```javascript
db.utilisateurs.updateOne({ nom: 'Alice' }, { $unset: { adresse: '' } });
```

➡️ Supprime complètement le champ `adresse`.

---

### 🔁 `$rename` – Renommer un champ

```javascript
db.utilisateurs.updateMany({}, { $rename: { prenom: 'firstName' } });
```

➡️ Renomme `prenom` en `firstName` pour tous les documents.

---

## ✨ Combinaison d'opérateurs

Tu peux combiner plusieurs opérateurs dans une même mise à jour :

```javascript
db.utilisateurs.updateOne(
	{ nom: 'Alice' },
	{
		$set: { ville: 'Lyon' },
		$inc: { points: 10 },
		$push: { tags: 'fidèle' },
	}
);
```

---

## 🧠 Résumé rapide des opérateurs d’update

| Opérateur   | Fonction                              |
| ----------- | ------------------------------------- |
| `$set`      | Ajouter ou modifier un champ          |
| `$unset`    | Supprimer un champ                    |
| `$inc`      | Incrémenter ou décrémenter un nombre  |
| `$push`     | Ajouter un élément à un tableau       |
| `$addToSet` | Ajouter un élément **si non présent** |
| `$pull`     | Supprimer un élément d’un tableau     |
| `$rename`   | Renommer un champ                     |
