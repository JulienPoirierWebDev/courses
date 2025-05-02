# 🎓 TP MongoDB – _MyMediaLibrary_

## Partie 1 – Création de la base et des collections

---

## 🧠 Contexte

Vous êtes chargé·e de construire une base MongoDB pour une application de gestion de bibliothèque numérique.  
Elle contiendra trois types de contenus : **livres** (possédés par les utilisateurs), **films** et **jeux vidéo** (référencés globalement).

---

### 🧩 Objectif de cette première partie

-   Créer la base `media_app`
-   Créer trois collections : `users`, `films`, `jeux_video`
-   Définir les types de champs et structurer les documents
-   Ne pas insérer encore de données

---

## ✅ Étapes à réaliser

### 1. Créer/accéder à la base nommée `media_app`

🧠 _MongoDB crée la base dès que vous y insérez une donnée._

---

### 2. Créer la collection `users`

Cette collection contiendra :

-   un prénom
-   un nom
-   un email
-   un mot de passe
-   une **liste de livres** possédés (tableau de documents imbriqués)

🎯 Chaque livre doit avoir au moins :

-   un titre
-   un auteur
-   une année
-   une liste de genres
-   un statut de lecture (lu / non lu)

🧠 _Réfléchissez au type de chaque champ._

---

### 3. Créer la collection `films`

Chaque film doit contenir :

-   un nom
-   un réalisateur
-   une durée (en minutes)
-   une liste de genres
-   un résumé
-   une date de sortie

💡 _Pensez à la différence entre `int` et `string`, et entre `string` et `array of strings`._

---

### 4. Créer la collection `jeux_video`

Chaque jeu vidéo doit contenir :

-   un nom
-   un éditeur
-   un développeur
-   une liste de genres
-   une date de sortie
-   un nombre de joueurs (max)
-   un booléen indiquant si le jeu est en ligne
-   un résumé

---

## 🧠 Tips utiles

-   Vous pouvez utiliser la commande `db.createCollection("nom")` pour forcer la création (utile si vous voulez ajouter un schéma plus tard).
-   Utilisez `use media_app` pour sélectionner la base.
-   MongoDB **ne crée la base que si vous y insérez ou créez une collection**.

---

## 📚 Mots-clés utiles pour vos recherches

-   `mongosh`
-   `db.createCollection()`
-   `use databaseName`
-   `bsonType`
-   `object`, `string`, `array`, `int`, `bool`, `date`

# 🔐 TP MongoDB – Partie 2 : Sécuriser l’accès à la base `media_app`

---

## 🎯 Objectif

Configurer MongoDB pour que seul·e·s des **utilisateurs autorisés** puissent accéder à la base de données, en créant deux types d'utilisateurs :

-   Un **administrateur**
-   Un **utilisateur applicatif** avec accès uniquement à `media_app`

---

## 🧩 Étapes à réaliser

### 1. Activer la sécurité dans le fichier de configuration

-   Ouvrir le fichier `mongod.conf` sur le serveur local
-   Chercher (ou ajouter) la section suivante :

```yaml
security:
    authorization: enabled
```

-   Redémarrer le service MongoDB

#### 🪟 Sous **Windows**

##### 📁 Emplacement typique :

```plaintext
C:\Program Files\MongoDB\Server\<version>\bin\mongod.cfg
```

> Exemple :  
> `C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg`

🎯 Le fichier s'appelle souvent **`mongod.cfg`** (avec `.cfg` au lieu de `.conf`), mais il s’agit du **même concept**.

💡 **À savoir** :

-   Si MongoDB a été installé comme **service Windows**, c’est ce fichier qui est utilisé au démarrage.
-   Tu peux vérifier le chemin utilisé avec :

```bash
sc qc MongoDB
```

(commande PowerShell ou cmd)

---

#### 🍎 Sous **macOS**

##### 📁 Emplacement typique (si installé avec Homebrew) :

```bash
/usr/local/etc/mongod.conf
```

ou, pour les versions plus récentes :

```bash
/opt/homebrew/etc/mongod.conf
```

💡 Tu peux vérifier le chemin utilisé par MongoDB avec :

```bash
ps aux | grep mongod
```

Cela te montrera si un `--config` est utilisé au lancement.

---

#### 🎯 Comment éditer le fichier

-   Sur **Windows** : ouvrir le fichier avec un éditeur en tant qu’administrateur (ex : Notepad++ ou VSCode)
-   Sur **macOS** : utiliser un éditeur avec `sudo`, par exemple :

```bash
sudo nano /usr/local/etc/mongod.conf
```

---

### 2. Créer un utilisateur administrateur

⚠️ Une fois la sécurité activée, **aucun accès** n'est possible sans un premier utilisateur.

1. **Se connecter en mode local** (avant redémarrage ou avec `--noauth` si possible)
2. Se positionner sur la base `admin`
3. Créer un utilisateur nommé `admin` avec un mot de passe, et le rôle `userAdminAnyDatabase`

💡 **Tip :** Le rôle `userAdminAnyDatabase` permet de créer d'autres utilisateurs sur n'importe quelle base.

---

### 3. Se reconnecter avec authentification

Tester l'accès avec la commande :

```bash
mongosh -u "admin" -p "motDePasse" --authenticationDatabase "admin"
```

🎯 Vous devez pouvoir accéder à toutes les bases et créer des utilisateurs.

---

### 4. Créer un utilisateur applicatif restreint

Depuis l’utilisateur `admin` :

-   Aller dans la base `media_app`
-   Créer un utilisateur `medialib` avec mot de passe `medialib123` et rôle `readWrite`

💡 Cela permet de faire des lectures et écritures **uniquement** dans `media_app`.

---

### 5. Se connecter avec l’utilisateur `medialib`

```bash
mongosh -u "medialib" -p "medialib123" --authenticationDatabase "media_app"
```

Tester :

-   ✅ Lire/écrire dans `media_app`
-   ❌ Essayer d’écrire dans une autre base (ex : `admin`, `test`)

---

## 🧠 Tips utiles

-   Une base doit exister pour qu’on puisse créer un utilisateur dessus
-   La commande `db.createUser()` est différente de l’insertion classique
-   Vous pouvez consulter les utilisateurs avec :
    ```js
    db.getUsers();
    ```

---

## 📚 Mots-clés utiles

-   `mongosh -u`
-   `db.createUser()`
-   `--authenticationDatabase`
-   `readWrite`
-   `userAdminAnyDatabase`
-   `mongod.conf`
-   `security.authorization`

# ✅ TP MongoDB – Partie 3 : Validation des données

---

## 🎯 Objectif

Ajouter un **schéma de validation** pour chaque collection de la base `media_app`, afin de garantir la cohérence des données insérées.  
Cela vous permettra d'apprendre à :

-   Protéger une collection avec un `validator`
-   Utiliser un **JSON Schema**
-   Définir des champs obligatoires
-   Imposer des types (`bsonType`)
-   Utiliser des `pattern` pour les emails

---

## 🧩 Collections concernées

Vous devez mettre en place une validation pour les **trois collections** :

1. `users` → documents utilisateurs avec des livres embarqués (`books`)
2. `films` → collection publique de films
3. `jeux_video` → collection publique de jeux vidéo

---

## ✅ Étapes à réaliser

### 1. Supprimer et recréer chaque collection avec `db.createCollection()`

💡 Une collection ne peut pas être modifiée après coup avec `db.createCollection()` si elle existe déjà → pensez à la supprimer avec `db.nom.drop()`

---

### 2. Pour la collection `users` :

Inclure un document de ce type (structure attendue) :

```json
{
	"firstName": "Alice",
	"lastName": "Durand",
	"email": "alice@exemple.com",
	"password": "123456",
	"books": [
		{
			"title": "1984",
			"author": "George Orwell",
			"year": 1949,
			"genres": ["Dystopie", "Politique"],
			"isRead": true,
			"personalNote": "Chef d’œuvre"
		}
	]
}
```

📌 Champs obligatoires à valider :

-   les types (`string`, `int`, `array`, `bool`)
-   un email avec une expression régulière (`pattern`)
-   tous les sous-champs du tableau `books`

---

### 3. Pour la collection `films` :

Structure attendue :

```json
{
  "name": "Inception",
  "director": "Christopher Nolan",
  "length": 148,
  "types": ["Science-fiction", "Thriller"],
  "summary": "Un voleur s'introduit dans les rêves...",
  "date_of_publication": ISODate("2010-07-16")
}
```

Champs requis :

-   Nom (string)
-   Réalisateur (string)
-   Durée (int, en minutes)
-   Genres (array de string)
-   Résumé (string)
-   Date de sortie (date)

---

### 4. Pour la collection `jeux_video` :

Structure attendue :

```json
{
  "name": "Minecraft",
  "editor": "Mojang",
  "developer": "Mojang",
  "types": ["Survie", "Créatif"],
  "date_of_publication": ISODate("2011-11-18"),
  "multiplayers": 10,
  "online": true,
  "summary": "Jeu de construction et d'exploration"
}
```

Champs obligatoires :

-   Nom, éditeur, développeur
-   Genres (array)
-   Date de publication
-   Nombre de joueurs (int)
-   En ligne ? (bool)
-   Résumé (string)

---

## 🧠 Tips utiles

-   Utilisez `bsonType` dans vos schémas
-   `required` s’applique aux propriétés principales ou imbriquées
-   Pour tester un email, utilisez une **regex simple**, pas besoin d’être stricte
-   Vous pouvez valider la structure en insérant un document valide puis un document invalide

---

## 🔍 Mots-clés importants

-   `db.createCollection()`
-   `validator`, `$jsonSchema`
-   `required`, `properties`
-   `bsonType`
-   `pattern` (pour valider un email)
-   `array`, `object`, `int`, `string`, `bool`, `date`

# 🧪 TP MongoDB – Partie 4 : Insertion et manipulation de données

---

## 🎯 Objectifs

-   Insérer des documents **conformes aux schémas**
-   Manipuler les données : lecture, ajout, modification
-   Tester la **validation** avec des données incorrectes
-   Préparer l'insertion depuis un **fichier JSON externe**

---

## ✅ Étapes à réaliser

### 1. Se connecter avec l’utilisateur `medialib`

```bash
mongosh -u "medialib" -p "medialib123" --authenticationDatabase "media_app"
```

---

### 2. Insérer un utilisateur avec une bibliothèque de livres

Crée un utilisateur ayant **au moins deux livres** dans son tableau `books`. L’un des livres doit être marqué comme lu (`isRead: true`), l’autre comme non lu.

🎯 Tu dois respecter le schéma : types corrects, tous les champs requis, email valide, etc.

---

### 3. Insérer un film dans la collection `films`

Insère un film de ton choix, avec les bons types de champs (`string`, `array`, `int`, `date`, etc.).

💡 Astuce : pour les dates, utilise `ISODate("YYYY-MM-DD")`.

---

### 4. Insérer un jeu vidéo

Même principe que pour les films, mais avec :

-   `multiplayers`: un nombre entier
-   `online`: un booléen
-   `types`: tableau d'au moins 2 genres

---

### 5. Tester la validation

1. Tente une insertion **invalide** dans `films` (ex. : oublie le champ `summary`)
2. Observe et lis attentivement l’erreur

🎯 Quelle erreur obtiens-tu ? Quel champ est à l'origine du refus ?

---

### 6. Lire les données

Utilise les commandes suivantes pour consulter tes données :

```js
db.users.find().pretty();
db.films.find().pretty();
db.jeux_video.find().pretty();
```

---

## 🧠 Tips utiles

-   `ISODate()` est ton ami pour les dates.
-   Si l'insertion ne fonctionne pas, vérifie les **noms des champs** et les **types**.
-   Le message d’erreur MongoDB est souvent **très précis** sur le champ fautif.

---

## 📚 Mots-clés utiles

-   `insertOne()`
-   `insertMany()`
-   `find()`
-   `pretty()`
-   `ISODate()`

---

## 💡 Question bonus – Insertion depuis un fichier JSON

Tu souhaites automatiser l'insertion de plusieurs films à partir d’un fichier JSON.

### ❓**Question** :

1. Quel outil permet d’insérer un fichier `.json` dans MongoDB ?
2. Quel est le format attendu à l’intérieur du fichier JSON pour que l’insertion fonctionne ?
3. Quelle commande en ligne de commande (terminal) permet d’importer ce fichier dans la collection `films` ?
