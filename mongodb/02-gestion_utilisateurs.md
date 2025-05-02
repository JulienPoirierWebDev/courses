## 🧾 Fiche pratique : Créer un utilisateur MongoDB pour une base spécifique

### 🎯 Objectif :

Créer un utilisateur qui a accès **uniquement à une base de données précise**, avec un rôle comme `readWrite` ou `read`.

---

### 📌 Étapes à suivre :

#### 1. Se connecter à `mongosh` **en tant qu'admin**

```bash
mongosh -u admin -p motdepasse --authenticationDatabase admin
```

---

#### 2. Se positionner sur la base cible

```javascript
use nomDeLaBase
```

Exemple :

```javascript
use bibliotheque
```

---

#### 3. Créer l’utilisateur

```javascript
db.createUser({
	user: 'nom_utilisateur',
	pwd: 'motdepasse',
	roles: [{ role: 'readWrite', db: 'nomDeLaBase' }],
});
```

Exemple :

```javascript
db.createUser({
	user: 'lecteur',
	pwd: '1234',
	roles: [{ role: 'readWrite', db: 'bibliotheque' }],
});
```

---

### 🔐 Rôles les plus utilisés

| Rôle                   | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `read`                 | Lecture seule (aucune modification possible)                             |
| `readWrite`            | Lecture + écriture (ajout, modif, suppression)                           |
| `dbAdmin`              | Droits d'administration sur la base (index, stats, users)                |
| `userAdmin`            | Gestion des utilisateurs **de la base courante**                         |
| `readWriteAnyDatabase` | Lecture/écriture sur toutes les bases (rôle global, à éviter sauf admin) |

---

### ✅ Vérification

Après création, déconnecte-toi et reconnecte-toi avec les identifiants de l’utilisateur :

```bash
mongosh -u lecteur -p 1234 --authenticationDatabase bibliotheque
```

Puis teste :

```javascript
db
show collections
db.livres.insertOne({ titre: "1984", auteur: "George Orwell" })
```

## Explication complète

Attention, dans les logs, on peut lire ceci :

```

{"t":{"$date":"2025-04-23T11:12:48.991+02:00"},"s":"W",  "c":"CONTROL",  "id":22120,   "ctx":"initandlisten","msg":"Access control is not enabled for the database. Read and write access to data and configuration is unrestricted","tags":["startupWarnings"]}
{"t":{"$date":"2025-04-23T11:12:48.991+02:00"},"s":"W",  "c":"CONTROL",  "id":22138,   "ctx":"initandlisten","msg":"You are running this process as the root user, which is not recommended","tags":["startupWarnings"]}
```

Cela signifie que l'on est `root user` et donc que l'on a les droits en lecture et écriture sur toutes les bases de données ! C'est OK pour travailler ici, mais dans la vraie vie, il faut compartimenter.

Dans mongosh, nous allons créer un utilisateur admin, qui pourra tout faire. C'est toujours dangereux, il faudra créer un utilisateur pour chaque API qui viendra se connecter sur une BDD, mais c'est mieux que root.

On va utiliser cette commande :

```json
// Bien sur, on choisi son user et sont psw (password) comme on veut, et pas 1234
db.createUser(
{
    "user":"jupo",
    "pwd":"1234",
    "roles":[
    {"role":"userAdminAnyDatabase", "db":"admin"},
    "readWriteAnyDatabase"]
})

```

Nous devons fermer mongod et de relancer en ajoutant `--auth`

Et nous pouvons nous connecter a mongosh de cette manière :

`mongosh -u "jupo" --authenticationDatabase "admin" -p`
Cela nous demandera de noter notre mot de passe. On peut aussi l'ajouter directement comme ceci :

`mongosh -u "jupo" --authenticationDatabase "admin" \ -p 1234`
Cela reste déconseillé car cela donne envie de faire du copier coller et donc d'avoir son mot de passe quelque part.

Dans nos logs, on a cela maintenant :

`{"t":{"$date":"2025-04-23T11:38:56.441+02:00"},"s":"I",  "c":"ACCESS",   "id":5286306, "ctx":"conn2","msg":"Successfully authenticated","attr":{"client":"127.0.0.1:60726","isSpeculative":true,"isClusterMember":false,"mechanism":"SCRAM-SHA-256","user":"jupo","db":"admin","result":0,"metrics":{"conversation_duration":{"micros":18492,"summary":{"0":{"step":1,"step_total":2,"duration_micros":87},"1":{"step":2,"step_total":2,"duration_micros":25}}}},"extraInfo":{}}}`

Si l'on tape cette commande :
`db.runCommand({connectionStatus:1})`

On a des infos sur les utilisateurs actuellements connectés.

Et nous sommes seuls, ouf !
