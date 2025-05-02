# 📚 Chapitre : Les _views_ dans MongoDB

## 🧠 Qu’est-ce qu’une _view_ ?

Une **view** (vue) est une **représentation virtuelle** d'une ou plusieurs collections, basée sur une **pipeline d’agrégation**.

-   Elle **ne stocke pas de données**.
-   Elle est **lue comme une collection normale**.
-   Elle permet de **cacher la complexité** de certaines requêtes (par exemple des `$lookup`, des filtres, des projections, etc.).
-   Elle est **toujours à jour** car elle s’appuie sur les données sous-jacentes.

> ⚠️ Une _view_ ne peut pas être utilisée pour insérer ou modifier des données.

---

## 📦 À quoi servent les _views_ ?

### ✅ Simplifier des requêtes récurrentes

Au lieu d’écrire un pipeline d’agrégation complexe à chaque fois, tu crées une _view_ une fois, et tu la réutilises.

### ✅ Créer des "collections logiques"

Tu peux exposer une version **filtrée ou enrichie** d’une collection de base, par exemple :

-   utilisateurs actifs uniquement
-   commandes avec le nom du client
-   produits en promotion

### ✅ Séparer les rôles métier

Ex : les développeurs frontend peuvent interroger `produits_visibles`, sans se soucier des champs sensibles ou inutiles.

---

## 🛠️ Créer une _view_

### Syntaxe :

```javascript
db.createView('nom_de_la_vue', 'collection_source', [pipeline]);
```

---

### 📌 Exemple 1 : Vue filtrée

On veut une vue qui ne montre que les utilisateurs actifs :

```javascript
db.createView('utilisateurs_actifs', 'utilisateurs', [
	{ $match: { actif: true } },
]);
```

Ensuite, tu peux l’utiliser comme une collection :

```javascript
db.utilisateurs_actifs.find();
```

---

### 📌 Exemple 2 : Vue avec jointure (`$lookup`)

On veut afficher les articles avec les données de leur auteur :

```javascript
db.createView('articles_avec_auteurs', 'articles', [
	{
		$lookup: {
			from: 'auteurs',
			localField: 'auteurId',
			foreignField: '_id',
			as: 'auteur',
		},
	},
	{
		$unwind: '$auteur',
	},
	{
		$project: {
			titre: 1,
			contenu: 1,
			auteurNom: '$auteur.nom',
		},
	},
]);
```

---

## ⚙️ Gérer les vues

### 🔄 Modifier une vue existante :

Il faut **la supprimer** puis la **recréer** (il n’y a pas de `ALTER VIEW`).

```javascript
db.system.views.drop({ _id: 'maBase.nomVue' });
```

Puis :

```javascript
db.createView(...)
```

### ❌ Supprimer une vue :

```javascript
db.nom_de_la_vue.drop();
```

---

## 🧠 À retenir

| Caractéristique       | Valeur                                  |
| --------------------- | --------------------------------------- |
| Persistée ?           | ❌ Non (pas de données)                 |
| Lecture possible ?    | ✅ Oui                                  |
| Écriture possible ?   | ❌ Non                                  |
| Supporte `$lookup` ?  | ✅ Oui                                  |
| Peut utiliser index ? | ⚠️ Non directement (mais la source oui) |

---

## 🧪 Bonnes pratiques

-   Donne aux vues des **noms explicites** (ex : `commandes_avec_clients`)
-   Utilise-les pour **filtrer, enrichir, agréger ou masquer** des données
-   Ne les utilise **pas dans des cas ultra-performants**, car elles ne remplacent pas l’optimisation fine
-   Combine-les avec les **droits d’accès (roles)** pour exposer une vue limitée des données à certains utilisateurs
