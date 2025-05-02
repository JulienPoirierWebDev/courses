# ✅ SOLUTIONS — Partie 1 : Création de la base et des collections

---

## 1. Sélectionner / créer la base

```js
use media_app
```

---

## 2. Création de la collection `users`

```js
db.createCollection('users', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['firstName', 'lastName', 'email', 'password', 'books'],
			properties: {
				firstName: { bsonType: 'string' },
				lastName: { bsonType: 'string' },
				email: {
					bsonType: 'string',
					pattern: '^.+@.+\\..+$',
					description: 'doit être une adresse email',
				},
				password: { bsonType: 'string' },
				books: {
					bsonType: 'array',
					items: {
						bsonType: 'object',
						required: [
							'title',
							'author',
							'year',
							'genres',
							'isRead',
						],
						properties: {
							title: { bsonType: 'string' },
							author: { bsonType: 'string' },
							year: { bsonType: 'int' },
							genres: {
								bsonType: 'array',
								items: { bsonType: 'string' },
							},
							isRead: { bsonType: 'bool' },
							personalNote: { bsonType: 'string' },
						},
					},
				},
			},
		},
	},
});
```

---

## 3. Création de la collection `films`

```js
db.createCollection('films', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: [
				'name',
				'director',
				'length',
				'types',
				'summary',
				'date_of_publication',
			],
			properties: {
				name: { bsonType: 'string' },
				director: { bsonType: 'string' },
				length: { bsonType: 'int' },
				types: {
					bsonType: 'array',
					items: { bsonType: 'string' },
				},
				summary: { bsonType: 'string' },
				date_of_publication: { bsonType: 'date' },
			},
		},
	},
});
```

---

## 4. Création de la collection `jeux_video`

```js
db.createCollection('jeux_video', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: [
				'name',
				'editor',
				'developer',
				'types',
				'date_of_publication',
				'multiplayers',
				'online',
				'summary',
			],
			properties: {
				name: { bsonType: 'string' },
				editor: { bsonType: 'string' },
				developer: { bsonType: 'string' },
				types: {
					bsonType: 'array',
					items: { bsonType: 'string' },
				},
				date_of_publication: { bsonType: 'date' },
				multiplayers: { bsonType: 'int' },
				online: { bsonType: 'bool' },
				summary: { bsonType: 'string' },
			},
		},
	},
});
```

Voici maintenant les ✅ **solutions de la Partie 2 – Sécurisation de la base `media_app` avec des utilisateurs**.

---

# ✅ SOLUTIONS — TP MongoDB Partie 2 : Sécurité et authentification

---

## 🔧 Étape 1 – Activer la sécurité

### ➤ Sur **Windows**

Éditer ce fichier :

```plaintext
C:\Program Files\MongoDB\Server\<version>\bin\mongod.cfg
```

Ajouter à la fin du fichier :

```yaml
security:
    authorization: enabled
```

Puis redémarrer le service MongoDB :

```powershell
net stop MongoDB
net start MongoDB
```

---

### ➤ Sur **macOS** (via Homebrew)

Éditer :

```bash
sudo nano /usr/local/etc/mongod.conf
```

Ajouter :

```yaml
security:
    authorization: enabled
```

Puis redémarrer :

```bash
brew services restart mongodb-community
```

---

## 👤 Étape 2 – Créer l’utilisateur admin

Si la sécurité vient juste d’être activée, se connecter une **dernière fois sans authentification** :

```bash
mongosh
```

Puis :

```js
use admin

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
})
```

---

## 🔐 Étape 3 – Se reconnecter avec authentification

```bash
mongosh -u "admin" -p "admin123" --authenticationDatabase "admin"
```

---

## 🛠️ Étape 4 – Créer un utilisateur restreint pour l’application

```js
use media_app

db.createUser({
  user: "medialib",
  pwd: "medialib123",
  roles: [ { role: "readWrite", db: "media_app" } ]
})
```

---

## 👥 Étape 5 – Se connecter avec l’utilisateur `medialib`

```bash
mongosh -u "medialib" -p "medialib123" --authenticationDatabase "media_app"
```

---

## ✅ Vérifications

Dans la base `media_app` :

```js
db.test.insertOne({ test: true }); // ✅ fonctionne
```

Dans une autre base :

```js
use admin
db.test.insertOne({ fail: true }) // ❌ Permission denied
```

Voici les ✅ **solutions complètes de la Partie 3 — Validation des données** pour chaque collection de la base `media_app`.

---

# ✅ SOLUTIONS – Partie 3 : Validation des données

---

## 🧹 Avant tout : supprimer les collections si elles existent déjà

```js
db.users.drop();
db.films.drop();
db.jeux_video.drop();
```

---

## 👤 Collection `users` avec livres embarqués

```js
db.createCollection('users', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['firstName', 'lastName', 'email', 'password', 'books'],
			properties: {
				firstName: { bsonType: 'string' },
				lastName: { bsonType: 'string' },
				email: {
					bsonType: 'string',
					pattern: '^.+@.+\\..+$',
					description: 'doit être une adresse email',
				},
				password: { bsonType: 'string' },
				books: {
					bsonType: 'array',
					items: {
						bsonType: 'object',
						required: [
							'title',
							'author',
							'year',
							'genres',
							'isRead',
						],
						properties: {
							title: { bsonType: 'string' },
							author: { bsonType: 'string' },
							year: { bsonType: 'int' },
							genres: {
								bsonType: 'array',
								items: { bsonType: 'string' },
							},
							isRead: { bsonType: 'bool' },
							personalNote: { bsonType: 'string' },
						},
					},
				},
			},
		},
	},
});
```

---

## 🎬 Collection `films`

```js
db.createCollection('films', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: [
				'name',
				'director',
				'length',
				'types',
				'summary',
				'date_of_publication',
			],
			properties: {
				name: { bsonType: 'string' },
				director: { bsonType: 'string' },
				length: { bsonType: 'int' },
				types: {
					bsonType: 'array',
					items: { bsonType: 'string' },
				},
				summary: { bsonType: 'string' },
				date_of_publication: { bsonType: 'date' },
			},
		},
	},
});
```

---

## 🎮 Collection `jeux_video`

```js
db.createCollection('jeux_video', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: [
				'name',
				'editor',
				'developer',
				'types',
				'date_of_publication',
				'multiplayers',
				'online',
				'summary',
			],
			properties: {
				name: { bsonType: 'string' },
				editor: { bsonType: 'string' },
				developer: { bsonType: 'string' },
				types: {
					bsonType: 'array',
					items: { bsonType: 'string' },
				},
				date_of_publication: { bsonType: 'date' },
				multiplayers: { bsonType: 'int' },
				online: { bsonType: 'bool' },
				summary: { bsonType: 'string' },
			},
		},
	},
});
```

---

💡 **Test** : vous pouvez maintenant insérer un document conforme pour vérifier que le schéma fonctionne, puis tenter une insertion invalide (par exemple, sans champ `summary`) pour observer l’erreur de validation.

Voici les ✅ **solutions de la Partie 4 – Insertion et manipulation de données**, suivies des **réponses à la question sur l’insertion depuis un fichier JSON**.

---

# ✅ SOLUTIONS — Partie 4 : Insertion et manipulation

---

## 👤 1. Insertion d’un utilisateur avec livres

```js
db.users.insertOne({
  firstName: "Marie",
  lastName: "Lemoine",
  email: "marie.lemoine@example.com",
  password: "secure123",
  books: [
    {
      title: "Le Meilleur des mondes",
      author: "Aldous Huxley",
      year: 1932,
      genres: ["Science-fiction", "Anticipation"],
      isRead: true,
      personalNote: "Visionnaire"
    },
    {
      title: "L'Étranger",
      author: "Albert Camus",
      year: 1942,
      genres: ["Philosophie", "Existentialisme"],
      isRead: false
    }
  ]
})
```

---

## 🎬 2. Insertion d’un film

```js
db.films.insertOne({
  name: "Le Fabuleux Destin d'Amélie Poulain",
  director: "Jean-Pierre Jeunet",
  length: 122,
  types: ["Comédie", "Romance"],
  summary: "Une jeune femme décide de changer la vie de ceux qui l'entourent.",
  date_of_publication: ISODate("2001-04-25")
})
```

---

## 🎮 3. Insertion d’un jeu vidéo

```js
db.jeux_video.insertOne({
  name: "The Legend of Zelda: Breath of the Wild",
  editor: "Nintendo",
  developer: "Nintendo",
  types: ["Aventure", "Action"],
  date_of_publication: ISODate("2017-03-03"),
  multiplayers: 1,
  online: false,
  summary: "Explore un monde ouvert gigantesque et affronte le destin."
})
```

---

## ❌ 4. Insertion invalide (exemple)

```js
db.films.insertOne({
  name: "Fight Club",
  director: "David Fincher",
  length: 139,
  types: ["Drame", "Psychologique"],
  // ❌ summary manquant
  date_of_publication: ISODate("1999-10-15")
})
```

💥 **Erreur attendue** :
```
Document failed validation
```
→ `summary` est requis dans le schéma.

---

## 🔎 5. Lire les données

```js
db.users.find().pretty()
db.films.find().pretty()
db.jeux_video.find().pretty()
```

---

# 💡 Réponses à la question sur l’insertion depuis un fichier JSON

---

## ❓ 1. Quel outil utiliser ?

✅ Utiliser **`mongoimport`**, un outil CLI fourni avec MongoDB.

---

## ❓ 2. Quel format de fichier JSON ?

Il doit s’agir d’un **fichier NDJSON** (*newline-delimited JSON*), c’est-à-dire **un document JSON par ligne**, par exemple :

```json
{"name": "Interstellar", "director": "Christopher Nolan", "length": 169, "types": ["Science-fiction"], "summary": "Voyage spatial vers un trou noir.", "date_of_publication": {"$date": "2014-11-07T00:00:00Z"}}
{"name": "Parasite", "director": "Bong Joon-ho", "length": 132, "types": ["Drame", "Thriller"], "summary": "Infiltration d'une famille pauvre chez les riches.", "date_of_publication": {"$date": "2019-05-30T00:00:00Z"}}
```

---

## ❓ 3. Quelle commande pour l’import ?

```bash
mongoimport --db media_app --collection films --file films.json --jsonArray
```

💡 Si le fichier est en **JSONL (un document par ligne)**, il faut utiliser :
```bash
mongoimport --db media_app --collection films --file films.json --type=json
```
