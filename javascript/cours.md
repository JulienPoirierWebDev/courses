# TODO 
- [ ] Ajouter le tableau des versions EcmaScript.
- [ ] Ajouter les ajouts de chaque version EcmaScript.
- [ ] Refaire l'arborecence du cours. 
- [ ] Reprendre les exercices et mettre les solutions dans un dossier.
- [ ] Revoir la place des opérations sur les chaînes de caractères.
- [ ] Reprendre a partir des fonctions.

# Cours pour débuter avec JavaScript.

## Chapitre 1 - Introduction à JavaScript

L'objectif de ce cours est d'apprendre les bases du langage JavaScript, afin de pouvoir créer des applications web dynamiques et interactives.


### Qu'est-ce que JavaScript ?

Javascript est un langage de programmation qui permet d'ajouter des fonctionnalités dynamiques à un site web. Il est utilisé pour créer des applications web interactives, des jeux, des applications mobiles, des logiciels de bureau, etc.

C'est un langage de programmation de haut niveau, qui peut s'utiliser autant en orienté objet qu'en fonctionnel. Il est multi-paradigme, c'est-à-dire qu'il permet d'utiliser plusieurs styles de programmation différents.
C'est a la fois simple de s'y mettre et en même temps complèxe de le maitriser.

C'est un langage interprété, c'est-à-dire qu'il est exécuté par un interpréteur (ou moteur) JavaScript, qui est un programme qui lit et exécute le code JavaScript. Les navigateurs web modernes intègrent un moteur JavaScript pour exécuter les scripts JavaScript des pages web.

On dit que Javascript est un langage de script, car il est conçu pour être utilisé comme langage de script pour les pages web. Il est généralement exécuté dans le navigateur web, mais il peut également être exécuté côté serveur avec des technologies comme Node.js (mais ça sera le sujet d'un autre cours).

### L'histoire de JavaScript :

Le créateur de Javascript est Brendan Eich, qui a créé le langage en 1995 pour le compte de Netscape Communications Corporation. Il a été standardisé sous le nom de JavaScript par Ecma International en 1997. Il a été conçu pour être un langage de script simple et léger, qui permet d'ajouter des fonctionnalités dynamiques aux pages web. Il a été conçu en seulement 10 jours, et il a été initialement appelé Mocha, puis LiveScript, avant d'être renommé JavaScript pour des raisons marketing.

### EcmaScript, c'est quoi ?

EcmaScript est le nom officiel du langage JavaScript. C'est le nom du standard sur lequel est basé le langage JavaScript. Le standard EcmaScript est mis à jour régulièrement, et les nouvelles fonctionnalités sont ajoutées au langage JavaScript au fur et à mesure que le standard évolue. Les navigateurs web modernes supportent les dernières fonctionnalités de JavaScript, mais les anciens navigateurs peuvent ne pas supporter certaines fonctionnalités plus récentes.

La list des versions d'EcmaScript :

- ES1 : 1997
- ES2 : 1998
- ES3 : 1999
- ES4 : abandonné
- ES5 : 2009
- ES6 : 2015
- ES7 : 2016
- ES8 : 2017
- ES9 : 2018
- ES10 : 2019
- ES11 : 2020
- ES12 : 2021
- ES13 : 2022
- ESNext : en cours !

Liste des ajouts de chaque version d'EcmaScript :

TODO !



### C'est quoi, le runtime ?

Le runtime JavaScript est l'environnement d'exécution JavaScript.Il fourni tous les composants nécessaires pour exécuter du code JavaScript, comme le moteur JavaScript, le DOM, le BOM, les Web APIs, etc.

Chaque navigateur utilise un moteur JavaScript différent, qui implémente le standard EcmaScript et les fonctionnalités supplémentaires du navigateur.

Les moteurs JavaScript les plus connus sont :
- V8 (Google Chrome)
- SpiderMonkey (Mozilla Firefox)
- Chakra (Microsoft Edge)
- JavaScriptCore (Safari). 

Ils sont tous en théorie compatibles avec le standard EcmaScript, mais ils peuvent avoir des différences d'implémentation et de performance.

![le runtime JS sur Chrome](/javascript/runtime.png)
Image issue de la ressource : https://youtu.be/BFHUfKtoNkw


Ainsi, JavaScript, c'est l'addition de l'ECMAScript et des APIs du navigateur. C'est pour cela que toutes les fonctionnalités ne sont pas disponibles sur tous les navigateurs, chaque navigateur a ses propres APIs.


Pour vérifier si une fonctionnalité est supportée par un navigateur, vous pouvez utiliser le site Can I Use : https://caniuse.com/


### Rôle de JavaScript dans le développement web

- Manipulation du Document Object Model (DOM) pour modifier les éléments HTML et CSS.
- Validation des formulaires et collecte d'informations utilisateur.
- Création d'animations et d'effets visuels.
- Communication avec des serveurs pour récupérer ou envoyer des données (Ajax, Fetch API, etc.).
- Développement d'applications web en temps réel et d'applications mobiles avec des frameworks tels que React, Angular et Vue.js.

### Installation et configuration de l'environnement de développement.

Ce qu'il vous faut pour développer en JavaScript :

- Un navigateurs web moderne supportant les dernières fonctionnalités de JavaScript. On recommande d'utiliser Google Chrome ou Mozilla Firefox.
- Un éditeur de texte pour la programmation : Visual Studio Code, WebStorm ou autre. On recommande d'utiliser Visual Studio Code.
- En théorie, JavaScript est activé sur votre navigateur par défaut. Si ce n'est pas le cas, vous pouvez l'activer dans les paramètres du navigateur.
- La console du navigateur : c'est outil nécessaire pour tester des scripts JavaScript et déboguer le code (F12 ou Ctrl+Shift+I pour ouvrir la console dans la plupart des navigateurs).
- En bonus, des extensions pour le navigateur : l'extension Web Developer pour Firefox, ou l'extension Web Developer Tools pour Chrome.
- En bonus, des extensions pour VS Code : Live Server, Live Share, Prettier, ESLint, etc.

## Chapitre 2 - Débutons avec JavaScript : les bases.

### Premier programme JavaScript

- Création d'un fichier HTML et ajout d'un script JavaScript à l'intérieur.
- Syntaxe de base pour insérer un script JavaScript dans un fichier HTML :

```html
<html>
<head>
  <title>Introduction à JavaScript</title>
</head>
<body>
  <h1>Hello, JavaScript!</h1>
  <script> console.log("Hello, world!"); </script>
</body>
</html>`
```

- Enregistrement du fichier et ouverture dans un navigateur web pour voir le résultat.
- Vérification de la console du navigateur pour afficher le message "Hello, world!".

## 2 - Les variables.

Ici, on va apprendre à déclarer et utiliser des variables en JavaScript, ainsi qu'à connaître le type des variables.

### Différentes manières de déclarer des variables en JavaScript

- Var : Ancienne méthode pour déclarer des variables. Portée fonctionnelle et globale.
- Let : Introduit avec ES6 (ECMAScript 2015). Portée au niveau du bloc, évite les problèmes de portée globale.
- Const : Introduit avec ES6. Portée au niveau du bloc, valeur immuable (ne peut pas être modifiée après l'affectation initiale).

### Déclaration et affectation des variables

- Syntaxe pour déclarer et affecter des variables en JavaScript :

```js
var nom = "John";
let age = 30;
const PI = 3.14159;
```

Les tips : 
- Ne pas utiliser var
- Utiliser const par défaut
- Utiliser let si on a besoin de réassigner la variable

#### Pourquoi ne pas utiliser var ?
  
  - Pour ne pas déclarer plusieurs fois une variable et éviter les bugs :

  ```js
  var a = 1;
  var a = 2;
  console.log(a) // 2
  ```
    
  ```js
  let a = 1;
  let a = 2;
  console.log(a) // SyntaxError: Identifier 'a' has already been declared
  ```
    
  ```js
  const a = 1;
  const a = 2;
  console.log(a) // SyntaxError: Identifier 'a' has already been declared
  ```

  - Pour éviter les problèmes de portée globale :

  ```js
  var a = 1;

  if (true) {
    var a = 2;
    console.log(a) // 2
  }

  console.log(a) // 2
  ```
    
  ```js
  let a = 1;

  if (true) {
      let a = 2;
      console.log(a) // 2
  }

  console.log(a) // 1
  ```

#### Pourquoi utiliser const par défaut ?

- Pour éviter les bugs liés à la réassignation de variables :

```js
const name = "John";
name = "Jane"; // TypeError: Assignment to constant variable.
```

- Pour éviter les bugs liés à la modification de variables :

```js
const person = {
  name: "John",
  age: 30
};

person.age = 31; // OK
person = { // TypeError: Assignment to constant variable.
  name: "Jane",
  age: 31
};
```
(On peut modifier les propriétés d'un objet déclaré avec const, mais on ne peut pas réassigner la variable à un autre objet.)

#### On peut toujours utiliser let si on a besoin de réassigner la variable ! 

```js
let name = "John";
name = "Jane"; // OK
```

### On dit les termes : déclaration, initialisation, affectation et expression.

La déclaration, c'est le fait de déclarer une variable avec un mot clé (var, let ou const). Celà permet de réserver un espace mémoire pour la variable.

L'initialisation, c'est le fait de donner une valeur initiale à la variable.

L'affectation, c'est le fait de modifier la valeur d'une variable.

Une expression, c'est une combinaison de valeurs, de variables et d'opérateurs qui produit une autre valeur.

```js
let a = 1; // déclaration et initialisation
a = 2; // affectation
let b = a + 1; // expression

let c, d; // déclaration en série;
```

### Les différents types de variables en JavaScript

- Les types primitifs : string, number, boolean, null, undefined, symbol.

```js
let prenom = "John"; // string
let age = 30; // number
let estMajeur = true; // boolean
let nom = null; // null
let nom2; // undefined
let id = Symbol("id"); // symbol
```

Les cas d'utilisation des types primitifs :

- string : pour représenter du texte.
- number : pour représenter des nombres.
- boolean : pour représenter des valeurs booléennes (true ou false), autrement dit, des valeurs de vérité.
- null : pour représenter une valeur nulle.
- undefined : pour représenter une valeur non définie.
- symbol : pour représenter des identifiants uniques.

Le symbol est un type de données introduit avec ES6. Il permet de créer des identifiants uniques, qui ne peuvent pas être écrasés par d'autres identifiants. 

On ne va pas utiliser les symbols dans ce cours, mais c'est un type de données très utile pour créer des propriétés privées dans les objets.

Tips : 
- On peut attribuer null à une variable pour la vider. Mais il ne faut pas utiliser undefined car c'est une valeur qui est utilisée par le langage lui-même.
On sait que si l'on a une variable qui vaut undefined, c'est qu'elle n'a pas été initialisée.
- On peut utiliser typeof pour connaître le type d'une variable :

```js
let prenom = "John";
let age = 30;
let estMajeur = true;
let nom = null;
let nom2;
let id = Symbol("id");

console.log(typeof prenom); // "string"
console.log(typeof age); // "number"
console.log(typeof estMajeur); // "boolean"
console.log(typeof nom); // "object"
console.log(typeof nom2); // "undefined"
console.log(typeof id); // "symbol"
```

- Les types complexes : object, array, function.

```js

let etudiant = {
  prenom: "John",
  nom: "Doe",
  age: 30,
  note: 15.5,
  sayMyName : function () {
        alert(this.prenom)
    }
};

let fruits = ["pomme", "banane", "cerise", "orange"];

function additionner(a, b) {
  return a + b;
}
```

```js

let etudiant = {
  prenom: "John",
  nom: "Doe",
  age: 30,
  note: 15.5,
  sayMyName : function () {
        alert(this.prenom)
    }
};

let fruits = ["pomme", "banane", "cerise", "orange"];

function additionner(a, b) {
  return a + b;
}

console.log(typeof etudiant); // "object"
console.log(typeof fruits); // "object"
console.log(typeof additionner); // "function"
```

Les variables étudiantes et fruits sont toutes les deux des objets, mais elles ne se ressemblent pas. L'objet étudiant est un objet littéral, tandis que l'objet fruits est un tableau. Les tableaux sont des objets particuliers, qui ont des propriétés et des méthodes spécifiques.

Tous les types de données en JavaScript sont des objets, sauf les types primitifs (string, number, boolean, null, undefined, symbol).



### Opérations de base sur les variables.

Ce qui est bien avec les variables, c'est que l'on peut faire des trucs avec.

- Addition, soustraction, multiplication et division :

```js
let a = 10;
let b = 20;

let addition = a + b; // 30
let soustraction = a - b; // -10
let multiplication = a * b; // 200
let division = a / b; // 0.5
```

- Concaténation de chaînes de caractères :

```js
let prenom = "John";

let message = "Bonjour, " + prenom + "!"; // "Bonjour, John!"
```

- Incrémentation et décrémentation :

```js

let a = 10;

a++; // équivalent à a = a + 1

console.log(a); // 11

a--; // équivalent à a = a - 1

console.log(a); // 10
```

- Opérateurs d'assignation combinés :

```js

let a = 10;

a += 5; // équivalent à a = a + 5

console.log(a); // 15

a -= 5; // équivalent à a = a - 5

console.log(a); // 10
```

* Attention a NaN : Not a Number.

```js
let test = NaN;
// NaN = Not a Number
// Ca arrive quand on fait des trucs interdits sur des chiffres 
//(ou ce qu'on croit être des chiffres)
if(typeof test === "number") {

    if(isNaN(test)) {
        console.log("C'est un nombre mais c'est pas un nombre : Nan")
    } else {
        console.log("c'est un nombre")

    }
} else {
    console.log("ce n'est pas un nombre")
}
```

### Quelques bonnes pratiques pour les variables

Déja, lorsqu'on travaille avec des variables, il faut faire attention à la casse. En effet, JavaScript est sensible à la casse, ce qui signifie que les variables `prenom` et `Prenom` sont deux variables différentes.

Ensuite, même si l'on travaille seul, il faut être cohérent : il faut se mettre d'accord sur des conventions et les respecter. Par exemple, on peut décider de toujours utiliser le camelCase pour nommer les variables, et de toujours utiliser des noms de variables en anglais.

Pour Uncle Bob, un nom de variable doit être :
- Significatif et révélateur.
- Facile à prononcer.
- Facile à rechercher.
- Différent dans les détails.

Significatif et révélateur : 
- `let a = 10;` -> `let age = 10;`
- `let b = 20;` -> `let note = 20;`
- `let c = a + b;` -> `let somme = age + note;`

Facile à prononcer :
- `let heroPwr = 10;` -> `let heroPower = 10;`

Facile à rechercher :
- `let as = 10;` -> `let ageStudent = 10;` Car si on cherche "as" dans le code, on va trouver beaucoup de choses, mais si on cherche "ageStudent", on va trouver que cette variable.

Différent dans les détails :
- `let ageStudent = 10;` -> `let ageTeacher = 10;` Car si on a deux variables qui s'appellent "age", on ne sait pas si c'est l'age de l'étudiant ou du professeur.


### Quelques fonctions qui vont nous permettre de faire des exercices. 

- `prompt()` : permet de demander à l'utilisateur d'entrer une valeur.
- `alert()` : permet d'afficher une boîte de dialogue avec un message.
- `console.log()` : permet d'afficher un message dans la console du navigateur.
- `confirm()` : permet d'afficher une boîte de dialogue avec un message et deux boutons (OK et Annuler).


2.5 Exemple pratique

- Créer un programme qui demande à l'utilisateur son nom et son âge, puis affiche un message avec ces informations :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Variables et types en JavaScript</title>
</head>
<body>
  <script>
    let prenom = prompt("Quel est votre prénom ?");
    let age = prompt("Quel est votre âge ?");

    alert("Bonjour, " + prenom + ". Vous avez " + age + " ans.");
  </script>
</body>
</html>
```

Bonus : Vérifier que l'âge est bien un nombre. 

## Les tableaux en JavaScript

Les tableaux sont des objets qui permettent de stocker plusieurs valeurs dans une seule variable. Ils sont très utiles pour stocker des listes de valeurs, comme des noms, des notes, des adresses, etc.

### Les tableaux numériques

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

### Les tableaux associatifs (objets)

Les tableaux associatifs sont des objets qui permettent de stocker plusieurs valeurs dans une seule variable, grace à des clés et des valeurs. Ils sont utiles pour stocker des informations autour d'un objet 'réel', comme une personne, un produit, etc.

Les valeurs peuvent être des fonctions, on parle alors de méthodes.

- Syntaxe pour créer un objet :

```js
let objet = {
  propriete1: valeur1,
  propriete2: valeur2
};
```

- Exemple d'un objet représentant une personne :

```js
let etudiant = {
  prenom: "Jean",
  nom: "Dupont",
  age: 25,
  note: 15.5,
  sayMyName : function () {
        alert(this.prenom)
    }
};


etudiant.sayMyName()
```

- Accès et modification des propriétés d'un objet :

```js
console.log(etudiant.prenom); // "Jean"
console.log(etudiant["nom"]); // "Dupont"

etudiant.age = 26;
etudiant["note"] = 16;
```

Le mot-clé `this` permet de faire référence à l'objet courant. Il est utilisé dans les méthodes pour accéder aux propriétés de l'objet.


### Les tableaux à deux dimensions

- Création d'un tableau à deux dimensions en JavaScript :

```js
let matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
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
console.log(copiedArray);   // [1, 2, 3, 4]
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

3.4 Exemple pratique

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
      let note = parseFloat(prompt("Entrez la note de l'étudiant " + (i + 1) + " :"));
      etudiants.push({nom: nom, note: note});
    }

    console.log("Liste des étudiants et de leurs notes :");
    for (let etudiant of etudiants) {
      console.log(etudiant.nom + " : " + etudiant.note);
    }
  </script>
</body>
</html>
```

## Opérations sur les chaînes de caractères

Objectif : Apprendre aux participants à manipuler les chaînes de caractères en JavaScript, notamment la concaténation et les méthodes couramment utilisées.

4.1 Concaténation de chaînes de caractères

- Utilisation de l'opérateur `+` pour concaténer des chaînes de caractères :

```js
let prenom = "John";
let nom = "Doe";
let nomComplet = prenom + " " + nom;
console.log(nomComplet); // "John Doe"
```

- Concaténation avec les littéraux de gabarit (template literals) :

```js
let nomComplet2 = `${prenom} ${nom}`; // backticks -> altGr + 7
console.log(nomComplet2); // "John Doe
```

4.2 Méthodes et propriétés utiles pour les chaînes de caractères

- `length` : propriété qui retourne la longueur d'une chaîne de caractères

```js
let texte = "Hello, world!";
console.log(texte.length); // 13
```

* `toUpperCase()` et `toLowerCase()` : méthodes pour convertir une chaîne en majuscules ou en minuscules

```js
let texteMaj = texte.toUpperCase();
let texteMin = texte.toLowerCase();
console.log(texteMaj); // "HELLO, WORLD!"
console.log(texteMin); // "hello, world!"
```

* `indexOf()` : méthode pour rechercher la première occurrence d'une sous-chaîne dans une chaîne de caractères

```js
let texte = "Hello, world!";
let position = texte.indexOf("world");
console.log(position); // 7
```

* `substring()` : méthode pour extraire une sous-chaîne à partir d'une chaîne de caractères

```js
let extrait = texte.substring(0, 5);
console.log(extrait); // "Hello"
console.log(texte); // "Hello world!" 
```

* `split()` : méthode pour diviser une chaîne de caractères en un tableau de sous-chaînes

```js
let mots = texte.split(" ");
console.log(mots); // ["Hello,", "world!"]

let mots = texte.split("");

console.log(mots); // ["H","e","l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]


let other = "Ceci est une phrase super longue."

other.split("phrase") // ["Ceci est une ", " super longue."]
```

4.3 Exemple pratique

- Créer un programme qui demande à l'utilisateur d'entrer une phrase, puis affiche le nombre de mots et le nombre de caractères de la phrase :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulation des chaînes de caractères en JavaScript</title>
</head>
<body>
  <script>
    let phrase = prompt("Entrez une phrase :");
    let mots = phrase.split(" ");
    let nbMots = mots.length;
    let nbCaracteresWithoutSpace = phrase.replace(/ /g, "").length;

    alert(`Votre phrase contient ${nbMots} mots et ${nbCaracteresWithoutSpace} caractères (sans les espaces).`);
  </script>
</body>
</html>
```

## Opérations arithmétiques et modification de variables

Objectif : Apprendre aux participants à effectuer des opérations arithmétiques et à modifier des variables avec des opérateurs d'incrémentation et de décrémentation.

5.1 Opérations arithmétiques de base

- Addition, soustraction, multiplication, division et modulo :

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
```

5.2 Opérateurs d'incrémentation et de décrémentation

- Incrémentation : ajout de 1 à la valeur d'une variable

```js
let x = 5;
x++; // équivalent à x = x + 1
console.log(x); // 6
x-- //
```

5.3 Opérateurs d'assignation combinés

- Combinaison d'une opération arithmétique avec une assignation

```js
let z = 20;
z += 5; // équivalent à z = z + 5
console.log(z); // 25

z *= 2; // équivalent à z = z * 2
console.log(z); // 50
```

5.4 Exemple pratique

- Créer un programme qui demande à l'utilisateur d'entrer deux nombres, puis affiche le résultat de toutes les opérations arithmétiques de base, sous forme d'objet  :
  
  ```js
  let result = {
      addition : x,
      soustraction :y, 
  ...
  }
  ```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Opérations arithmétiques en JavaScript</title>
</head>
<body>
  <script>
    let num1 = parseFloat(prompt("Entrez un nombre :"));
    let num2 = parseFloat(prompt("Entrez un autre nombre :"));

    let addition = num1 + num2;
    let soustraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let modulo = num1 % num2;

    alert(`Résultats des opérations :
      - Addition : ${addition}
      - Soustraction : ${soustraction}
      - Multiplication : ${multiplication}
      - Division : ${division}
      - Modulo : ${modulo}`);
  </script>
</body>
</html>
```

## Déclaration et utilisation des fonctions

Objectif : Apprendre aux participants à déclarer et utiliser des fonctions en JavaScript, afin d'organiser et de réutiliser le code plus efficacement.

6.1 Déclaration de fonctions

- Syntaxe pour déclarer une fonction en JavaScript :

```js
function nomDeLaFonction(parametre1, parametre2) {
  // Instructions à exécuter
}
```

- Exemple d'une fonction simple :

```js
function afficherBonjour() {
  console.log("Bonjour !");
}
```

6.2 Appel d'une fonction

- Syntaxe pour appeler une fonction en JavaScript :

```js
nomDeLaFonction(arguments);
```

- Exemple d'appel de la fonction `afficherBonjour` :

```js
afficherBonjour(); // Affiche "Bonjour !"
```

6.3 Fonctions avec paramètres

- Exemple d'une fonction avec des paramètres :

```js
function afficherNomComplet(prenom, nom) {
  console.log(prenom + " " + nom);
}
```

- Appel de la fonction avec des arguments :

```js
afficherNomComplet("John", "Doe"); // Affiche "John Doe"
```

6.4 Fonctions avec valeur de retour

- Exemple d'une fonction qui retourne une valeur :

```js
function additionner(a, b) {
  return a + b;
}
```

- Utilisation de la valeur retournée par la fonction :

```js
let somme = additionner(10, 20);
console.log(somme); // 30
```

```js
let myResult;

function sumWithoutReturn(a, b) {
  let result = a + b;
  myResult = result;
}

sumWithoutReturn(2,3)

let firstOp = myResult;

sumWithoutReturn(5,7)

let secondOp = myResult;

console.log(firstOp, secondOp);


// ------------------

let myVar;
let myVar2;
// fonction sans effets de bords (paramètre ou pas) -> 
// fonction pure
function sumWithReturn(a, b) {
  let result = a + b;
  return result
}

myVar = sumWithReturn(2,3);
myVar2 = sumWithReturn(5,7)

console.log(myVar, myVar2)

// -------------

let a = 5;
let b = 5
function sumWithoutParameters() {
  return a + b;
}

let other = sumWithoutParameters();

a = 2;
b = 7;

let c =2;

let other2 = sumWithoutParameters()

console.log(other, other2);
```

6.5 Exemple pratique

- Créer un programme qui utilise des fonctions pour convertir une température entre Celsius et Fahrenheit :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Fonctions en JavaScript</title>
</head>
<body>
  <script>
    function celsiusToFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }

    function fahrenheitToCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    let tempC = parseFloat(prompt("Entrez une température en degrés Celsius :"));
    let tempF = celsiusToFahrenheit(tempC);
    alert(`${tempC} °C équivaut à ${tempF} °F.`);

    let tempF2 = parseFloat(prompt("Entrez une température en degrés Fahrenheit :"));
    let tempC2 = fahrenheitToCelsius(tempF2);
    alert(`${tempF2} °F équivaut à ${tempC2} °C.`);
  </script>
</body>
</html>
```

## 7 - Conditions et boucles en JavaScript

Objectif : Apprendre aux participants à utiliser des structures de contrôle pour exécuter du code en fonction de conditions et répéter des instructions avec des boucles.

7.1 Conditions

- Syntaxe de la structure `if...else` :

```js
if (condition) {
  // Instructions à exécuter si la condition est vraie
} else {
  // Instructions à exécuter si la condition est fausse
}
```

- Exemple d'utilisation de `if...else` :

```js
let age = 18;

if (age >= 18) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes mineur.");
}
```

7.2 Boucle `for`

- Syntaxe de la boucle `for` :

```js
for (initialisation; condition; miseAJour) {
  // Instructions à exécuter
}
```

- Exemple d'utilisation de la boucle `for` pour afficher les nombres de 1 à 10 :

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

* Exemple de for of
  
  ```js
  let arr = [0,1,2];
  
  for(element of arr) {
      console.log(element)
  }
  ```

* Exemple de for in
  
  ```js
  let object = {
      name : "John",
      age : 50,
      address : "Here from somewhere"
  }
  
  for(property in object) {
      console.log(property) // name, puis age, puis address
      console.log(object[property]) // "John", 50, "Here from somewhere"
  }
  ```

7.2.5 Switch 

```js
let fruit = parseInt(prompt("Quel fruit aime tu ?"))

if (fruit === "orange") { 

    console.log("orange")

} else if (fruit === "banane") { 

    console.log("banane")

} else if (fruit === "pomme") { 

    console.log("pomme")

} else { console.log("t'aime pas les fruits") }

// -----------



switch ( fruit ){

    case "orange": //Do Something
        console.log("orange")
        break;

    case "banane"://Do Something
        console.log("orange")
        break;

    case "pomme"://Do Something
        console.log("pomme")
        break;

    default: //Default will perform if all case’s fail
        console.log("t'aime pas les fruits")            
        break;
}
```

7.3 Boucle `while`

- Syntaxe de la boucle `while` :

```js
while (condition) {
  // Instructions à exécuter
}
```

- Exemple d'utilisation de la boucle `while` pour afficher les nombres de 1 à 10 :

```js
let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}
```

7.4 Exemple pratique

- Créer un programme qui demande à l'utilisateur d'entrer un nombre, puis affiche la table de multiplication de ce nombre :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Conditions et boucles en JavaScript</title>
</head>
<body>
  <script>
    let nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

    console.log(`Table de multiplication de ${nombre} :`);

    for (let i = 1; i <= 10; i++) {
      console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
  </script>
</body>
</html>
```

## 8 - Gestion des événements en JavaScript

Objectif : Apprendre aux participants à utiliser les événements pour exécuter du code en réponse à des actions de l'utilisateur.

8.1 Introduction aux événements

- Les événements sont des actions qui se produisent lors de l'interaction avec la page Web, par exemple : clics de souris, appuis sur des touches, chargement de la page, etc.
- JavaScript peut être utilisé pour détecter ces événements et exécuter du code en réponse à ces actions.

8.2 Ajout d'un gestionnaire d'événements

- Syntaxe pour ajouter un gestionnaire d'événements à un élément HTML :

```js
<element evenement="nomDeLaFonction()">
```

- Exemple d'utilisation d'un gestionnaire d'événements pour un bouton :

```js
<button onclick="alert('Bouton cliqué !')">Cliquez ici</button>
```

9.3 Utilisation de la méthode `addEventListener`

- Syntaxe pour ajouter un gestionnaire d'événements à un élément en utilisant `addEventListener` :

```js
element.addEventListener("evenement", nomDeLaFonction);
```

- Exemple d'utilisation de `addEventListener` pour un bouton :

```js
<button id="monBouton">Cliquez ici</button>

<script>
  document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
  });
</script>
```

9.4 Exemple pratique

- Créer un programme qui change la couleur du texte d'un paragraphe lorsqu'on clique sur un bouton :
- Ajouter un input type texte et un bouton submit : lorsque le bouton est appuyé, un paragraphe est créer avec comme texte celui de l'input. 

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gestion des événements en JavaScript</title>
  <style>
    .couleur1 { color: red; }
    .couleur2 { color: blue; }
  </style>
</head>
<body>
  <p id="monParagraphe">Ceci est un exemple de texte.</p>
  <button id="monBouton">Changer la couleur</button>

  <script>
    let bouton = document.getElementById("monBouton");
    let paragraphe = document.getElementById("monParagraphe");

    bouton.addEventListener("click", function() {
      if (paragraphe.classList.contains("couleur1")) {
        paragraphe.classList.remove("couleur1");
        paragraphe.classList.add("couleur2");
      } else {
        paragraphe.classList.remove("couleur2");
        paragraphe.classList.add("couleur1");
      }
    });
  </script>
</body>
</html>
```

## 9 - Manipulation du DOM avec JavaScript

Objectif : Apprendre aux participants à manipuler le Document Object Model (DOM) en utilisant JavaScript pour ajouter, modifier ou supprimer des éléments et attributs HTML.

10.1 Sélection d'éléments

- Sélection d'un élément par son ID :

```js
let element = document.getElementById("monElement");
```

- Sélection d'éléments par leur classe :

```js
let elements = document.getElementsByClassName("maClasse");
```

- Sélection d'éléments par leur nom de balise :

```js
let elements = document.getElementsByTagName("nomDeLaBalise");
```

10.2 Modification de contenu

- Modifier le contenu d'un élément :

```js
element.innerHTML = "Nouveau contenu";
```

- Modifier la valeur d'un attribut :

```js
element.setAttribute("attribut", "nouvelleValeur");
```

10.3 Ajout et suppression d'éléments

- Créer un nouvel élément :

```js
let nouvelElement = document.createElement("nomDeLaBalise");
```

- Ajouter un nouvel élément en tant qu'enfant d'un élément existant :

```js
element.appendChild(nouvelElement);
```

- Supprimer un élément enfant :

```js
element.removeChild(enfantASupprimer);
```

10.4 Exemple pratique

- Créer un programme qui permet à l'utilisateur d'ajouter et de supprimer des éléments de liste :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulation du DOM avec JavaScript</title>
</head>
<body>
  <input id="elementInput" type="text" placeholder="Élément de liste">
  <button id="ajouter">Ajouter</button>
  <button id="supprimer">Supprimer le dernier élément</button>
  <ul id="maListe"></ul>

  <script>
    let ajouterBtn = document.getElementById("ajouter");
    let supprimerBtn = document.getElementById("supprimer");
    let elementInput = document.getElementById("elementInput");
    let liste = document.getElementById("maListe");

    ajouterBtn.addEventListener("click", function() {
      let nouvelElement = document.createElement("li");
      nouvelElement.textContent = elementInput.value;
      liste.appendChild(nouvelElement);
      elementInput.value = "";
    });

    supprimerBtn.addEventListener("click", function() {
      if (liste.lastChild) {
        liste.removeChild(liste.lastChild);
      }
    });
  </script>
</body>
</html>
```

## Utilisation des requêtes AJAX en Javascript

Objectif : Apprendre aux participants à utiliser les requêtes AJAX pour communiquer avec des serveurs et échanger des données sans recharger la page.

11.1 Introduction à AJAX

- AJAX (Asynchronous JavaScript and XML) est une technique qui permet de communiquer avec un serveur et d'échanger des données de manière asynchrone, sans recharger la page.
- Les données échangées peuvent être sous différents formats, tels que XML, JSON, HTML, etc.
- XMLHttpRequest et Fetch API sont les principales méthodes pour effectuer des requêtes AJAX en JavaScript.

11.2 XMLHttpRequest

- Syntaxe pour créer une requête AJAX avec XMLHttpRequest :

```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Traiter les données reçues
  }
};
xhttp.open("GET", "url", true);
xhttp.send();
```

11.3 Fetch API

- Syntaxe pour créer une requête AJAX avec Fetch API :

```js
fetch("url")
  .then(response => response.text())
  .then(data => {
    // Traiter les données reçues
  });
```

11.4 Exemple pratique

- Créer un programme qui récupère des données JSON à partir d'une API et les affiche :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Requêtes AJAX en JavaScript</title>
</head>
<body>
  <button id="charger">Charger les données</button>
  <div id="resultat"></div>

  <script>
    let chargerBtn = document.getElementById("charger");
    let resultatDiv = document.getElementById("resultat");

    chargerBtn.addEventListener("click", function() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          let html = "<ul>";
          for (let utilisateur of data) {
            html += `<li>${utilisateur.name} (${utilisateur.email})</li>`;
          }
          html += "</ul>";
          resultatDiv.innerHTML = html;
        })
        .catch(error => {
          console.error("Erreur :", error);
        });
    });
  </script>
</body>
</html>
```

## 11 - Introduction aux Promesses et Async/Await en JavaScript

Objectif : Apprendre aux participants à utiliser les Promesses et Async/Await pour simplifier la gestion des opérations asynchrones en JavaScript.

12.1 Promesses

- Les Promesses sont des objets qui représentent le résultat d'une opération asynchrone.
- Une Promesse peut être dans l'un des trois états suivants : en attente (pending), résolue (fulfilled) ou rejetée (rejected).
- Syntaxe pour créer une Promesse :

```js
let promesse = new Promise((resolve, reject) => {
  // Effectuer une opération asynchrone
  // Si l'opération réussit, appeler resolve() avec le résultat
  // Sinon, appeler reject() avec la raison de l'échec
});
```

- Utilisation des méthodes `then()` et `catch()` pour gérer les Promesses :

```js
promesse
  .then(resultat => {
    // Traiter le résultat
  })
  .catch(erreur => {
    // Gérer l'erreur
  });
```

12.2 Async/Await

- Les mots-clés `async` et `await` permettent de simplifier la gestion des Promesses en utilisant un style de code plus proche des opérations synchrones.
- Syntaxe pour définir une fonction asynchrone :

```js
async function maFonction() {
  // Utiliser await pour attendre le résultat d'une Promesse
}
```

- Exemple d'utilisation de `await` pour attendre le résultat d'une Promesse :

```js
async function recupererDonnees() {
  try {
    let response = await fetch("url");
    let data = await response.json();
    // Traiter les données
  } catch (erreur) {
    // Gérer l'erreur
  }
}
```

12.3 Exemple pratique

- Modifier l'exemple de la partie 11 pour utiliser Async/Await :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Async/Await en JavaScript</title>
</head>
<body>
  <button id="charger">Charger les données</button>
  <div id="resultat"></div>

  <script>
    let chargerBtn = document.getElementById("charger");
    let resultatDiv = document.getElementById("resultat");

    chargerBtn.addEventListener("click", async function() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        let html = "<ul>";
        for (let utilisateur of data) {
          html += `<li>${utilisateur.name} (${utilisateur.email})</li>`;
        }
        html += "</ul>";
        resultatDiv.innerHTML = html;
      } catch (error) {
        console.error("Erreur :", error);
      }
    });
  </script>
</body>
</html>
```

## 12 - Introduction aux modules JavaScript

Objectif : Apprendre aux participants à organiser et structurer leur code en utilisant des modules JavaScript pour améliorer la modularité et la réutilisabilité du code.

13.1 Concepts de base des modules

- Les modules permettent de séparer le code en plusieurs fichiers pour faciliter l'organisation, la maintenance et la réutilisation du code.
- Un module est un fichier JavaScript qui peut exporter des variables, des fonctions ou des classes pour être utilisées dans d'autres modules.
- Les modules sont chargés et exécutés de manière asynchrone et isolée, ce qui évite les conflits de noms et les problèmes de portée.

13.2 Exportation et importation de membres

- Syntaxe pour exporter un membre depuis un module :

```js
export const maVariable = "valeur";
export function maFonction() {}
export class MaClasse {}
```

- Syntaxe pour importer un ou plusieurs membres depuis un autre module :

```js
import { maVariable, maFonction, MaClasse } from "./monModule.js";
```

- Syntaxe pour importer un module entier :

```js
import * as monModule from "./monModule.js";
```

13.3 Exportation par défaut

- Un module peut avoir un export par défaut, qui est généralement utilisé lorsqu'un module ne contient qu'une seule chose à exporter :

```js
export default function maFonction() {}
```

- Syntaxe pour importer un export par défaut :

```js
import maFonction from "./monModule.js";
```

13.4 Exemple pratique

- Créer un module `calculs.js` qui exporte des fonctions pour effectuer des opérations arithmétiques simples :

```js
// calculs.js
export function addition(a, b) {
  return a + b;
}

export function soustraction(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Modules JavaScript</title>
</head>
<body>
  <script type="module">
    import { addition, soustraction, multiplication, division } from "./calculs.js";

    console.log("Addition:", addition(4, 2));
    console.log("Soustraction:", soustraction(4, 2));
    console.log("Multiplication:", multiplication(4, 2));
    console.log("Division:", division(4, 2));
  </script>
</body>
</html>
```
