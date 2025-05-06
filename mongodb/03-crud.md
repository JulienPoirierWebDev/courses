## 🧾 Fiche pratique : Opérations CRUD dans MongoDB

> 📚 **CRUD** = Create, Read, Update, Delete  
> Ce sont les 4 opérations de base qu’on effectue sur une base de données.

---

### 📌 Base de test utilisée :

```javascript
use bibliotheque
```

---

### 🟢 C – CREATE (ajouter un ou plusieurs documents)

#### ➕ Ajouter un document :

```javascript
db.livres.insertOne({
	titre: '1984',
	auteur: 'George Orwell',
	annee: 1949,
});
```

#### ➕ Ajouter plusieurs documents :

En MongoDB, lorsque l'on fait une insertion multiple, on parle de `bulk writing`, vous le verrez noté dans le message qui récapitule l'action de la commande.

```javascript
db.livres.insertMany([
	{ titre: 'Fahrenheit 451', auteur: 'Ray Bradbury' },
	{ titre: 'Le Meilleur des mondes', auteur: 'Aldous Huxley' },
]);
```

!!! On peut mettre soit même des \_id mais si l'on fait cela, c'est a nous de nous assurer de l'unicité de l'id et on sort du format de données modelId. Donc pourquoi pas, mais si l'objectif est d'avoir une unicité de la valeur sur une autre donnée (comme l'email), il vaut mieux ajouter un index unique (voir la partie sur les index).

---

### 🔵 R – READ (lire/rechercher des documents)

#### 📖 Afficher tous les documents :

```javascript
db.livres.find();
```

#### 🔍 Rechercher avec un filtre :

```javascript
db.livres.find({ auteur: 'George Orwell' });
```

#### 🔎 Opérateurs utiles :

```javascript
db.livres.find({ annee: { $gt: 1950 } }); // > 1950
db.livres.find({ auteur: { $in: ['Orwell', 'Huxley'] } }); // dans une liste
```

#### 🎯 Limiter / trier / sélectionner :

```javascript
db.livres.find().limit(2).sort({ annee: -1 });
db.livres.find({}, { titre: 1, _id: 0 }); // projection
```

---

### 🟠 U – UPDATE (modifier des documents)

#### 🔄 Modifier un seul document :

db.collection.updateOne(<filtres>, <modifications>, <options?>);
db.collection.updateMany(<filtres>, <modifications>, <options?>)

UpdateOne ne modifie qu'un élement, le premier qui correspond aux filtres. UpdateMany modifie tous les élements qui correspondent aux filtres.

Dans les modifications, on utilise l'opérateur $set pour signifier quels elements nous souhaitons modifier et avec quelle nouvelle valeur. Cela permet de laisser intact les autres élements du document, qui ne sont pas concernés par la modification.

```javascript
db.livres.updateOne({ titre: '1984' }, { $set: { disponible: true } });
```

#### 🔁 Modifier plusieurs documents :

```javascript
db.livres.updateMany(
	{ auteur: 'George Orwell' },
	{ $set: { genre: 'Dystopie' } }
);
```

#### 🔧 Autres opérateurs utiles :

-   `$unset`: supprimer un champ
-   `$inc`: incrémenter une valeur
-   `$push`: ajouter une valeur dans un tableau

#### Bonus : l'option upsert

On peut utiliser cette option pour faire une "update insertion", c'est a dire que la requête recherche l'élement a modifier mais si elle ne le trouve pas, elle va le créer en BDD.

```javascript
db.livres.updateOne(
	{ titre: '1984' },
	{ $set: { auteur: 'George Orwell', genre: 'Dystopie' } }
);
```

S'il n'y a pas de livre avec comme titre 1984, alors ce livre sera crée et aura comme auteur "George Orwell" et comme genre "Dystopie".

#### Bonus : modifier un élement sur la totalité d'une collection

En laissant le filtre vide sur un updateMany, on met tout a jour (attention, c'est hyper dangereux !!)

```javascript
db.livres.updateMany({}, { $set: { disponible: false } });
```

#### Bonus : renommer un ou plusieurs champs. 

Avec l'opérateur $rename, on peut modifier un champ d'un document. Et en associant cela avec un filtre vide, on peut renommer le champ de tous les documents d'une collection. 
C'est pratique quand on a fait une erreur ou dans la vie d'une BDD, qui peut voir le métier changer des noms, etc. 


```javascript
db.livres.updateMany({}, { $rename: { pernom : prenom} });
```

---

### 🔴 D – DELETE (supprimer des documents)

#### ❌ Supprimer un document :

```javascript
db.livres.deleteOne({ titre: '1984' });
```

#### ❌ Supprimer plusieurs documents :

```javascript
db.livres.deleteMany({ auteur: 'Ray Bradbury' });
```

---

### 🧠 Résumé rapide

| Opération | Commande                  | Exemple                           |
| --------- | ------------------------- | --------------------------------- |
| Create    | `insertOne`, `insertMany` | `db.livres.insertOne({...})`      |
| Read      | `find`, `findOne`         | `db.livres.find({ auteur: ... })` |
| Update    | `updateOne`, `updateMany` | `db.livres.updateOne(..., ...)`   |
| Delete    | `deleteOne`, `deleteMany` | `db.livres.deleteOne({...})`      |

### Bonus

#### Les collections plafonnées.

TODO

## 🧪 Le validateur de collection

MongoDB est une base **schema-less** : on peut insérer n’importe quel document, même si sa structure est différente des autres.  
➡️ Cela apporte de la souplesse, mais **on peut aussi vouloir imposer un minimum de structure** à certains champs.

C’est là qu’intervient **le validateur de collection**.

---

### 🎯 À quoi sert un validateur ?

Le validateur permet de :
- ✅ Exiger qu’un champ soit d’un **type précis** (`string`, `date`, `object`, etc.)
- ✅ Vérifier qu’une **valeur suit un motif** (REGEX)
- ✅ S’assurer qu’un champ **existe ou non**
- ✅ Contrôler **plusieurs règles à la fois** avec des opérateurs logiques (`$and`, `$or`, etc.)

---

### 🧱 Créer une collection avec un validateur

```javascript
db.createCollection("utilisateurs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nom", "email"],
      properties: {
        nom: {
          bsonType: "string",
          description: "doit être une chaîne de caractères"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "doit être une adresse e-mail valide"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          description: "doit être un entier positif"
        }
      }
    }
  }
})
```

---

### 🔄 Ajouter ou modifier un validateur sur une collection existante

```javascript
db.runCommand({
  collMod: "utilisateurs",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nom"],
      properties: {
        nom: { bsonType: "string" }
      }
    }
  }
})
```

---

### ⚙️ Options utiles

- `validationLevel`: définit quand appliquer le validateur
  - `"strict"` (par défaut) : toutes les opérations sont validées
  - `"moderate"` : seules les opérations invalides **modifiant** des champs sont bloquées

- `validationAction`: définit quoi faire si une validation échoue
  - `"error"` (par défaut) : l’opération échoue
  - `"warn"` : l’opération passe, mais une alerte est générée

#### Exemple :
```javascript
db.runCommand({
  collMod: "utilisateurs",
  validationLevel: "moderate",
  validationAction: "warn"
})
```

---

### 🧪 Exemple : tester un validateur

```javascript
db.utilisateurs.insertOne({
  nom: "Alice",
  email: "alice@example.com",
  age: 30
}) // ✅ valide

db.utilisateurs.insertOne({
  nom: "Bob",
  email: "bob[at]email"
}) // ❌ rejeté si le pattern ne correspond pas
```

---

### 🧠 Résumé rapide

| Élément          | Description                                |
|------------------|--------------------------------------------|
| `bsonType`       | Type attendu pour un champ (`string`, `int`, `array`...) |
| `required`       | Champs obligatoires                        |
| `pattern`        | Expression régulière (valide un format)    |
| `minimum`, `maximum` | Contraintes numériques              |
| `validationLevel`| Quand appliquer la validation (`strict`, `moderate`) |
| `validationAction`| Réagir à une erreur (`error`, `warn`)     |

# Bonus - Validateur et opérateurs


## 🔗 Les opérateurs logiques dans les validateurs de collection

Quand on définit un validateur dans MongoDB, on peut **combiner plusieurs règles** grâce aux **opérateurs logiques**. Cela permet d’exprimer des règles plus complexes qu’une simple validation de type.

---

### 🧠 Principaux opérateurs disponibles

| Opérateur | Utilité                                   | Exemple d’usage                                |
| --------- | ----------------------------------------- | ---------------------------------------------- |
| `$and`    | Toutes les conditions doivent être vraies | Champ requis **ET** de type string             |
| `$or`     | Au moins une condition doit être vraie    | Champ A **OU** champ B requis                  |
| `$nor`    | Aucune des conditions ne doit être vraie  | Champ interdit s’il contient certaines valeurs |
| `$not`    | Inverser une condition                    | Refuser un type ou une forme précise           |

---

### 🟢 Exemple avec `$and`

On veut que `age` soit :

* un entier
* supérieur ou égal à 18

```javascript
db.createCollection("utilisateurs", {
  validator: {
    $and: [
      { "age": { $type: "int" } },
      { "age": { $gte: 18 } }
    ]
  }
})
```

---

### 🟠 Exemple avec `$or`

On accepte les documents qui ont :

* un champ `email` **ou**
* un champ `telephone`

```javascript
db.createCollection("contacts", {
  validator: {
    $or: [
      { email: { $type: "string" } },
      { telephone: { $type: "string" } }
    ]
  }
})
```

---

### 🔴 Exemple avec `$not`

On interdit les valeurs de type string pour `age` (pour forcer un type numérique) :

```javascript
db.createCollection("profils", {
  validator: {
    age: {
      $not: { $type: "string" }
    }
  }
})
```

---

### 🔵 Exemple avec `$nor`

On veut **rejeter** les documents qui ont :

* le champ `statut` égal à `"banni"` ou `"inactif"`

```javascript
db.createCollection("membres", {
  validator: {
    $nor: [
      { statut: { $eq: "banni" } },
      { statut: { $eq: "inactif" } }
    ]
  }
})
```

---

## 🧠 Astuce pédagogique

MongoDB ne permet pas d'utiliser directement les opérateurs logiques dans un `$jsonSchema`, mais tu peux les utiliser **en-dehors du bloc `$jsonSchema`** comme suit :

```javascript
db.createCollection("utilisateurs", {
  validator: {
    $and: [
      {
        $jsonSchema: {
          bsonType: "object",
          required: ["email"],
          properties: {
            email: {
              bsonType: "string",
              pattern: "^.+@.+\\..+$"
            }
          }
        }
      },
      {
        "age": { $gte: 18 }
      }
    ]
  }
})
```

