## 🧱 Structurer ses collections : intégration ou séparation ?

MongoDB n’a pas de **relations strictes** comme en SQL, mais il faut quand même **penser les liens entre documents**. Il existe deux grandes stratégies :

-   **Intégration (embedding)** : on met les données **dans le même document**
-   **Référence (linking)** : on **sépare** les données dans plusieurs collections et on **fait des liens manuellement**

Le bon choix dépend du **type de relation** entre les données.

---

## 🔗 1. One-to-One (1:1)

### 🧠 Définition :

Chaque document A est lié à **exactement un document B**.

### ✅ Recommandation :

**Intégrer** directement le document B dans A, sauf si :

-   le document B est très gros
-   il est souvent utilisé seul
-   il a un cycle de vie différent

### 📦 Exemple :

```javascript
{
  _id: ObjectId("..."),
  nom: "Alice",
  profil: {
    bio: "Graphiste freelance",
    site: "https://alice.io"
  }
}
```

### 🛑 Mauvais cas d’intégration :

Si `profil` devient trop lourd (CV, image, réseaux), on peut le stocker séparément.

---

## 🔁 2. One-to-Few (1\:N, petite échelle)

### 🧠 Définition :

Un document A est lié à **quelques documents B** (ex : 2-10).

### ✅ Recommandation :

**Intégrer les B dans A**
→ plus rapide à lire, plus simple à manipuler

### 📦 Exemple :

Un auteur avec quelques livres :

```javascript
{
  nom: "George Orwell",
  livres: [
    { titre: "1984", annee: 1949 },
    { titre: "La Ferme des animaux", annee: 1945 }
  ]
}
```

---

## 🔁 3. One-to-Many / One-to-Thousands

### 🧠 Définition :

Un document A est lié à **de nombreux documents B**, parfois des milliers ou plus.

### ✅ Recommandation :

**Ne pas intégrer** les B dans A.
→ utiliser des **références** (stockage séparé)

### 📦 Exemple :

Un blog avec des milliers de commentaires

```javascript
// Collection "articles"
{
  _id: ObjectId("..."),
  titre: "Bienvenue dans MongoDB"
}

// Collection "commentaires"
{
  _id: ObjectId("..."),
  articleId: ObjectId("..."),
  contenu: "Super article !",
  date: ISODate("2025-05-01")
}
```

> Tu peux ensuite retrouver tous les commentaires d’un article :

```javascript
db.commentaires.find({ articleId: ObjectId('...') });
```

---

## 🔄 Résumé des stratégies

| Relation         | Taille de B | Fréquence d’accès à B  | Stratégie recommandée |
| ---------------- | ----------- | ---------------------- | --------------------- |
| One-to-One       | petite      | accédé avec A          | Intégration           |
| One-to-One       | grande      | accédé séparément      | Référence             |
| One-to-Few       | 2–10        | toujours avec A        | Intégration           |
| One-to-Many      | >10         | utilisé indépendamment | Référence             |
| One-to-Thousands | 1000+       | pagination nécessaire  | Référence             |

# Bonus

## 🔧 1. Requête par profondeur : impact des documents imbriqués

Plus un document est **profond** (objets dans objets, tableaux dans objets…), plus les requêtes peuvent devenir complexes à maintenir.
MongoDB ne limite pas vraiment le nesting, **mais déconseille les structures trop profondes** (limite recommandée : 100 niveaux).

➡️ **Conseil** : privilégier des documents **plats mais organisés**, pour garder la lecture humaine et la manipulation simple.

---

## 📏 2. Limite de taille des documents : 16 Mo

Un document MongoDB **ne peut pas dépasser 16 Mo**.

Donc si tu veux stocker :

-   un utilisateur avec des millions de commandes
-   une conversation avec des milliers de messages

… il faudra **séparer** les sous-documents.

➡️ Bon indicateur de passage de l'intégration à la référence.

---

## 🕓 3. Accès fréquent VS mise à jour fréquente

| Si les données sont :    | Alors privilégier : |
| ------------------------ | ------------------- |
| **lues ensemble**        | Intégration         |
| **modifiées séparément** | Référence           |

➡️ Exemple : les informations d’un auteur et ses articles

-   Accès au profil auteur seul : → séparer
-   Affichage auteur + articles : → intégrer si peu nombreux

---

## ⚙️ 4. Modélisation anti-patterns à éviter

-   ❌ **Stocker les IDs de tout le monde dans un tableau** (ex : tous les commentaires dans un seul document article)
-   ❌ **Dupliquer en excès** une même sous-structure dans 10 collections
-   ❌ **Oublier les index** sur les champs de liaison (comme `articleId` dans une relation One-to-Many)

➡️ Prévoir un **nettoyage périodique** si on fait des duplications volontaires (par performance).

---

## ✂️ 5. Denormalization ≠ désordre

Tu entendras souvent que MongoDB est "non relationnel", mais ça ne veut pas dire qu’on ne structure pas !
Au contraire, une bonne base Mongo **est pensée, planifiée, et structurée** pour le besoin métier.

➡️ Accepter de **dupliquer une info** (comme le nom d’un auteur dans plusieurs articles), **si cela améliore les performances de lecture** ET que la source reste claire.

---

## 🔄 6. Utiliser les vues (`view`) pour abstraire une complexité

Si tu fais beaucoup de jointures manuelles avec `$lookup`, tu peux créer une **vue MongoDB** pour encapsuler cette logique.

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
]);
```

➡️ La requête devient ensuite aussi simple que :

```javascript
db.articles_avec_auteurs.find();
```
