# Introduction à MongoDB

## Contexte d'émergence du NoSQL

Les bases de données **NoSQL** ont émergé pour répondre à un double besoin :

-   **Exploiter efficacement** des données massives (Big Data)
-   **Monétiser** cette exploitation, notamment dans les entreprises technologiques

Au début des années 2000, les bases relationnelles étaient jugées **trop rigides** et leur **coût explosait** dès qu'on les utilisait sur plusieurs machines en parallèle.

Les données modernes sont très diverses :

-   Audio
-   Vidéo
-   Images
-   Coordonnées géographiques
-   Textes, etc.

> Pour aller plus loin : [Facebook Open Data Problems (2014)](https://research.facebook.com/blog/2014/10/facebook-s-top-open-data-problems/)

### SQL vs NoSQL : unité de base

-   En **SQL**, l'unité de base est le **tuple** (ou ligne/enregistrement), contenu dans une **table** à structure fixe.
-   En **NoSQL**, notamment avec MongoDB, on parle de **document** stocké dans une **collection**.

Les documents NoSQL sont plus **souples** :

-   Tous les documents d'une collection **n'ont pas besoin d'avoir exactement les mêmes champs**.
-   Exemple : des utilisateurs peuvent avoir ou non une adresse, un site web, un téléphone...

Contrairement au SQL, il n'y a **pas besoin de prévoir tous les champs à l'avance** ni de remplir les champs vides avec des `NULL`.

## Installation et composants de MongoDB

### Deux façons d'utiliser MongoDB

1. **Dans le cloud** (MongoDB Atlas, AWS, etc.)

    - C'est du **DBaaS** (Database as a Service)
    - Configuration rapide, mais coût et dépendance au fournisseur

2. **En local ou sur serveur**
    - Sur votre PC, un serveur dédié ou un Raspberry Pi
    - Plus d'autonomie, plus pédagogique pour apprendre

Dans ce cours, on commence **par l'installation locale**.

### Installation

Le site officiel de MongoDB propose un exécutable simple, mais aussi des guides complets (idéal pour les serveurs Linux) :
👉 [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)

### Composants de base

| Composant | Rôle                                                             |
| --------- | ---------------------------------------------------------------- |
| `mongod`  | Le service principal, le moteur de la base                       |
| `mongos`  | Routeur pour les requêtes sur environnement distribué (sharding) |
| `mongosh` | Shell moderne pour interagir en ligne de commande                |

> ✅ Remplace l'ancien `mongo`, moins complet

### Import / Export de données

| Composant      | Rôle                                       |
| -------------- | ------------------------------------------ |
| `mongodump`    | Exporte une BDD en BSON (binaire)          |
| `mongorestore` | Restaure une BDD à partir de BSON          |
| `bsondump`     | Convertit BSON → JSON lisible              |
| `mongoexport`  | Exporte en JSON ou CSV (Excel)             |
| `mongoimport`  | Importe des fichiers JSON/CSV dans MongoDB |

### Monitoring / Analyse

| Outil       | Description                                         |
| ----------- | --------------------------------------------------- |
| `mongostat` | Stats temps réel (opérations/sec, connexions, etc.) |
| `mongotop`  | Affiche les collections les plus actives            |

---

## Spécificités de MongoDB

### 🏢 Scalabilité

La **scalabilité** désigne la capacité d'un système à s'adapter à une charge croissante.

#### 🔺 Scalabilité verticale

-   On améliore un serveur unique :
    -   Plus de RAM
    -   Meilleur CPU
    -   Disques plus rapides
-   Limites : budget et cap matériel

#### ➡️ Scalabilité horizontale

-   On ajoute plusieurs serveurs qui se partagent les données
-   Difficile avec SQL (cohérence, synchro...)
-   MongoDB est conçu pour ça, grâce au **sharding**

### 🪩 Le sharding

Le **sharding** découpe une **collection** en plusieurs morceaux (shards), répartis sur différents serveurs.

#### Exemple : Collection d'élèves

-   Shard 1 : élèves < 10 ans
-   Shard 2 : 10 ≤ âge < 13 ans
-   Shard 3 : élèves ≥ 13 ans

### 🔍 Qui coordonne tout ça ?

Le **`mongos`** (routeur) :

-   Reçoit les requêtes
-   Décide quels shards interroger
-   Retourne le résultat

### 💡 Récapitulatif

| Terme                   | Définition                                 |
| ----------------------- | ------------------------------------------ |
| Scalabilité verticale   | Ajouter de la puissance à une machine      |
| Scalabilité horizontale | Ajouter des machines                       |
| Sharding                | Découper les collections pour les répartir |
| `mongos`                | Routeur des requêtes entre shards          |

---

## ♻️ Replica Set

Le **Replica Set** permet de répliquer automatiquement les données sur plusieurs serveurs pour la **résilience**.

-   Plusieurs instances `mongod`, chacune contenant **la totalité de la base**
-   Rôles :
    -   **Nœud primaire** : écritures (insertion, update, delete)
    -   **Nœuds secondaires** : lectures, réplication passive

### Fonctionnement

-   Toute nouvelle donnée écrite sur le primaire est **répliquée** sur les secondaires
-   Si le nœud primaire tombe, un secondaire devient **automatiquement** primaire
-   Quand l'ancien primaire revient, il devient secondaire

Ce modèle permet une **haute disponibilité** des données

---

## 📖 Le format BSON

MongoDB utilise le **BSON** (_Binary JSON_).

-   Format binaire dérivé de JSON
-   Plus rapide à parser
-   Prend moins de place
-   Permet des types plus complexes

### Taille limite

-   Taille maximale d'un document BSON : **16 Mo**
-   Suffisant pour la grande majorité des cas
-   Ex : _Guerre et Paix_ (1200 pages) = ~3 Mo en BSON

### Types de données supportés

#### Types JSON standard

-   `string`
-   `number`
-   `boolean`
-   `null`
-   `array`
-   `object`

#### Types spécifiques MongoDB

| Type         | Description                             |
| ------------ | --------------------------------------- |
| `objectId`   | Identifiant unique généré par MongoDB   |
| `date`       | Date + heure (précision milliseconde)   |
| `long`       | Entier 64 bits                          |
| `decimal`    | Décimaux très précis                    |
| `timestamp`  | Horodatage interne MongoDB              |
| `regex`      | Expressions régulières                  |
| `javascript` | Code JavaScript stocké dans un document |

---

👉 [Voir les types](https://www.mongodb.com/docs/manual/reference/bson-types/)

## Rappel : la notation JSON

On envoi du JSON a MongoDB, qui s'occupe de le transformer en BSON. Mais il faut que l'on soit d'accord sur comment l'écrire.

Voici un objet JSON vide :

```json
{}
```

La structure de base est un couple clé / valeur

```json
{
	"une_clé": "une valeur",
	"une_autre_clé": "une autre valeur"
}
```

Une valeur peut être elle-même un objet :

```json
{
	"une_clé": {
		"une_autre_clé": "une autre valeur"
	}
}
```

Il existe aussi les tableaux JSON, qui contiennent une serie d'objet JSON.

Voici un tableau JSON vide.

```json
[]
```

Et on peut y stocker des objets JSON.

```json
[
	{ "nom": "Poirier", "prenom": "Julien", "age": "35" },
	{ "nom": "Bob", "prenom": "Bobby", "age": "20" }
]
```

Et donc, en cumulant tout cela, on peut avoir des structures complexes :

```json
[
	{
		"nom": "Poirier",
		"prenom": "Julien",
		"age": "35",
		"livres": [
			{ "nom": "Clean code", "auteur": "Robert C. Martin" },
			{
				"nom": "MongoDB : Comprendre et optimiser l'exploitation de vos données",
				"auteur": "Sébastien FERRANDEZ"
			}
		]
	},
	{
		"nom": "Bob",
		"prenom": "Bobby",
		"age": "20",
		"films": [
			{ "nom": "Le seigneur des anneaux, la communauté de l'anneau" },
			{ "nom": "Pulp Fiction" }
		]
	}
]
```

Il ne peut pas y avoir deux clés du même nom dans le même objet. Par contre, en MongoDB, on peut voir que deux objets JSON peuvent ne pas avoir la même structure de clé : Julien a des livres, Bob a des films. Et c'est OK !

## MongoDB en ligne de commande.

Une fois que tout est installé, alors on peut commencer avec mongoDB.

### Etape 1 : lancer le processus mongod

Pour lancer MongoDB sur une machine, il faut déja lancer le processus mongod (pour daemon) :

`mongod`

Mais attention, cela revient a utiliser des options par défait :

`sudo mongod --port 27017 --dbpath /data/db`

Cela signifie que les données de votre BDD seront stockées dans `/data/db`, a la racine de votre système donc. Si vous avez besoin de changer ces données (un autre port ou un autre dossier), vous pouvez le faire avec ces paramètres.

On peut lire qu'il est plus sur de noter le port et le dbpath lors du lancement du serveur, que cela est plus logique car cela montre ce que vous faites et ne laisse pas supposer un paramétrage par défaut.

Dans notre cas, cela ne changera pas grand chose. Il est même possible que votre processus mongod soit déja lancé, au démarrage de votre machine.

Il est toutefois conseillé de sauvegarder les logs quelque part, on doit donc ajouter le paramètre `--logpath /chemin` et ajouter ensuite `--logappend` pour qu'un nouveau fichier ne soit pas créer a chaque fois.

`sudo mongod --port 27017 --dbpath /data/db --logpath /log/mongolog --logappend`

Ensuite, votre processus tournera dans un terminal qu'il faut laisser ouvert.

Pour fermer proprement ce processus, il faut utiliser le paramètre `--shutdown`sur le même port et le même dbpath.

`sudo mongod --port 27017 --dbpath /data/db --shutdown`

🔎 Vérifier si `mongod` tourne

| OS              | Commande                                                                  |
| --------------- | ------------------------------------------------------------------------- |
| **Windows**     | `Get-Process mongod` <br> ou <br> `Stop-Process -Name mongod -Force`      |
| **Linux/macOS** | `ps aux \| grep mongod` <br> puis <br> `kill -2 [PID]` ou `kill -9 [PID]` |

Si on lance la commande `mongosh` pour avoir accès au shell de mongoDB, on peut maintenant se connecter. Toutefois, nous n'utilisons pas d'utilisateur dédié.

Vous êtes prêt pour la suite !

### Etape 2 : lancer le shell mongosh

Pour cela, taper la commande :

`mongosh`

Cela devrait vous connecter dans le terminal a l'outil vous permettant de communiquer avec toutes vos bdd.

La commande `show dbs` ou `show databases` vous permet de voir toutes les bases de données disponibles. De base, il en existe 3 : admin, config et local. Ce sont les BDD nécessaires a mongoDB pour fonctionner.

Pour utiliser une base de données, il faut taper :

`db`

Et pour se mettre dans un nouveau namespace (une nouvelle base de données), il faut utiliser la commande :

`use [namespace_cible]`
