# Les tableaux en JavaScript

Les tableaux sont des objets qui permettent de stocker plusieurs valeurs dans une seule variable. Ils sont très utiles pour stocker des listes de valeurs, comme des noms, des notes, des adresses, etc.

## Les tableaux numériques

<br/>

- Création d'un tableau numérique en JavaScript

On utilise les crochets pour créer un tableau, et on sépare les éléments du tableau par des virgules.

```js
let fruits = ["pomme", "banane", "cerise", "orange"];
```

<br>

- Accès aux éléments d'un tableau :

Les tableaux sont des objets qui stockent une collection ordonnées d'élements. Les éléments d'un tableau sont indexés par des entiers, et l'index du premier élément est 0.

On accède a l'élément d'un tableau en utilisant son index entre crochets, a la suite du nom de la variable contenant le tableau.

```js
console.log(fruits[0]); // "pomme"
console.log(fruits[2]); // "cerise"
```

- Modification d'un élément du tableau :
  On peut modifier un élément du tableau en utilisant son index et en lui affectant une nouvelle valeur.

```js
fruits[1] = "fraise";
console.log(fruits[1]); // "fraise"
```

- Ajout et suppression d'éléments :

On peut ajouter ou supprimer des éléments d'un tableau en utilisant les méthodes `push()`, `unshift()`, `pop()` et `shift()`.

(les méthodes sont des fonctions qui appartiennent à un objet, qui sont disponibles pour tous les objets de ce type.)

```js
fruits.push("kiwi"); // ajoute "kiwi" à la fin du tableau
fruits.unshift("mangue"); // ajoute "mangue" au début du tableau
fruits.pop(); // supprime le dernier élément du tableau
fruits.shift(); // supprime le premier élément du tableau
```

## Les tableaux associatifs (objets)

Les tableaux associatifs sont des objets qui permettent de stocker plusieurs valeurs dans une seule variable, grace à des clés et des valeurs. Ils sont utiles pour stocker des informations autour d'un objet 'réel', comme une personne, un produit, etc.

Les valeurs peuvent être des fonctions, on parle alors de méthodes.

- Syntaxe pour créer un objet :

```js
let objet = {
  propriete1: valeur1,
  propriete2: valeur2,
};
```

- Exemple d'un objet représentant une personne :

```js
let etudiant = {
  prenom: "Jean",
  nom: "Dupont",
  age: 25,
  note: 15.5,
  sayMyName: function () {
    alert(this.prenom);
  },
};

etudiant.sayMyName();
```

- Accès et modification des propriétés d'un objet :

```js
console.log(etudiant.prenom); // "Jean"
console.log(etudiant["nom"]); // "Dupont"

etudiant.age = 26;
etudiant["note"] = 16;
```

Le mot-clé `this` permet de faire référence à l'objet courant. Il est utilisé dans les méthodes pour accéder aux propriétés de l'objet.

## Les tableaux à deux dimensions

- Création d'un tableau à deux dimensions en JavaScript :

```js
let matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- Accès et modification des éléments d'un tableau à deux dimensions :

```js
console.log(matrice[0][1]); // 2
console.log(matrice[2][0]); // 7

matrice[1][1] = 10;
```

Attention ! Lorsque vous copiez un tableau (array) dans une autre variable en JavaScript, vous copiez en réalité la référence au tableau et non pas le tableau lui-même. Cela signifie que si vous modifiez le tableau après l'avoir copié, les modifications seront répercutées sur la variable copiée, car les deux variables pointent vers le même tableau.

Voici un exemple pour illustrer ce comportement :

```js
const originalArray = [1, 2, 3];
const copiedArray = originalArray;

originalArray.push(4);

console.log(originalArray); // [1, 2, 3, 4]
console.log(copiedArray); // [1, 2, 3, 4]
```

Dans cet exemple, `copiedArray` est modifié lorsque vous modifiez `originalArray`, car les deux variables pointent vers le même tableau.

Si vous voulez créer une copie indépendante du tableau sans partager la référence, vous pouvez utiliser plusieurs méthodes pour créer une copie superficielle (shallow copy) du tableau, par exemple :

- La méthode `slice()` sans arguments :

  `const copiedArray = originalArray.slice();`

- L'opérateur de décomposition (spread operator) :

  `const copiedArray = [...originalArray];`

- La méthode `Array.from()` :

  `const copiedArray = Array.from(originalArray);`

Ces méthodes copient les éléments du tableau original dans un nouveau tableau, sans partager la référence. Notez que cela ne copie que les éléments du premier niveau du tableau (shallow copy). Si le tableau original contient des objets ou des tableaux imbriqués, ceux-ci partageront toujours leurs références avec le tableau copié. Pour créer une copie profonde (deep copy) d'un tableau, vous devrez utiliser d'autres méthodes, comme la fonction `JSON.parse(JSON.stringify(originalArray))`, qui présente cependant certaines limitations et ne fonctionne pas avec des objets contenant des fonctions ou des références circulaires.

## Exemple pratique

- Créer un programme qui demande à l'utilisateur d'entrer les noms des étudiants et leurs notes, puis affiche les informations sous forme d'un tableau :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tableaux en JavaScript</title>
  </head>
  <body>
    <script>
      let etudiants = [];
      let n = parseInt(prompt("Combien d'étudiants voulez-vous ajouter ?"));

      for (let i = 0; i < n; i++) {
        let nom = prompt("Entrez le nom de l'étudiant " + (i + 1) + " :");
        let note = parseFloat(
          prompt("Entrez la note de l'étudiant " + (i + 1) + " :")
        );
        etudiants.push({ nom: nom, note: note });
      }

      console.log("Liste des étudiants et de leurs notes :");
      for (let etudiant of etudiants) {
        console.log(etudiant.nom + " : " + etudiant.note);
      }
    </script>
  </body>
</html>
```
