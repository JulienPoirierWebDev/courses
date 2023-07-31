# Chapitre 2 - la première pierre de tout programme, les variables.

## Rappel : Premier programme JavaScript

- Création d'un fichier HTML et ajout d'un script JavaScript à l'intérieur.
- Syntaxe de base pour insérer un script JavaScript dans un fichier HTML :

```html
<html>
  <head>
    <title>Introduction à JavaScript</title>
  </head>
  <body>
    <h1>Hello, JavaScript!</h1>
    <script>
      console.log("Hello, world!");
    </script>
  </body>
</html>
`
```

- Enregistrement du fichier et ouverture dans un navigateur web pour voir le résultat.
- Vérification de la console du navigateur pour afficher le message "Hello, world!".

On a bien un script JS qui s'éxécute mais nous n'utilisons encore aucune variable.

## Les variables.

Ici, on va apprendre à déclarer et utiliser des variables en JavaScript, ainsi qu'à connaître le type des variables.

Une variable, c'est un espace mémoire qui va contenir une valeur. On peut ensuite utiliser cette valeur dans notre programme.

Pour dire autrement, avec un exemple parlant : une variable, c'est une boîte dans laquelle on peut mettre des choses. Cette boite est étiquetée avec un nom, et on peut utiliser ce nom pour récupérer ce qu'il y a dans la boîte. On n'a pas a se balader avec toutes nos affaires dans les mains, on peut les mettre dans des boîtes et les récupérer quand on en a besoin.

On pourra même tester si la boîte est vide ou non, ou si elle contient bien ce que l'on veut ou non, et même changer ce qu'il y a dans la boîte.

### Différentes manières de déclarer des variables en JavaScript

On va voir trois manières de déclarer des variables en JavaScript : var, let et const. On va voir les différences entre ces trois manières de déclarer des variables, et on va voir quand utiliser chacune d'entre elles.

Si tout n'est pas encore très clair, ce n'est pas grave, ce qui est important c'est que vous sachiez qu'il existe trois manières de déclarer des variables en JavaScript, pour vous poser les bonnes questions au moment de déclarer une variable.

> Rappel : on a le droit a l'erreur. Le travail du développeur, c'est de faire des erreurs, de les corriger, et de recommencer jusqu'à ce que ça marche.

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

### Pourquoi ne pas utiliser var ?

- Pour ne pas déclarer plusieurs fois une variable et éviter les bugs :

```js
var a = 1;
var a = 2;
console.log(a); // 2
```

```js
let a = 1;
let a = 2;
console.log(a); // SyntaxError: Identifier 'a' has already been declared
```

```js
const a = 1;
const a = 2;
console.log(a); // SyntaxError: Identifier 'a' has already been declared
```

- Pour éviter les problèmes de portée globale :

Le problème de `var` c'est qu'il n'a pas de portée au niveau du bloc, ce qui signifie que si on déclare une variable avec `var` dans une boucle, une condition ou une fonction, cette variable sera accessible en dehors de la boucle ou de la condition.

Le mot-clé `var` a une portée globale (ou une portée de fonction si déclarée dans une fonction), c'est à dire que même s'il est déclarer dans un `bloc` (une boucle, une condition), il sera accessible en dehors de ce bloc (globalement, ou dans la fonction).
Cela veut aussi dire que l'affectation mémoire de la variable sera conservée en dehors du bloc.

> La notion de `bloc` : un bloc est une portion de code délimitée par des accolades `{}`. Par exemple, une fonction, une boucle ou une condition sont des blocs.

> la notion de `fonction` : les fonctions ont une portée de fonction, c'est à dire que les variables déclarées dans une fonction ne seront pas accessibles en dehors de la fonction. C'est un `bloc` particulier.

Le problème de la protée globale est que si l'on utilise le même nom de variable dans un autre bloc, on va écraser la variable précédente, même si elle était déclarer dans un bloc d'un niveau supérieur.

```js
var a = 1;

if (true) {
  var a = 2;
  var b = "B";
  let c = "C";
  var globalElement = "global";
  console.log(a); // 2
}

console.log(a); // 2
console.log(b); // "B"
console.log(c); // Error

function test() {
  var a = 3;

  if (true) {
    var a = 4;

    var b = "B";

    let c = "C";
  }
  console.log(a); // 4

  console.log(b); // "B"

  console.log(c); // "Error"
}

test();

console.log(a); // 2

console.log(window.c); // "Error"
console.log(window.globalElement); // "global"
```

### Pourquoi utiliser const par défaut ?

Le mot-clé `const` a une portée au niveau du bloc, ce qui signifie que si on déclare une variable avec `const` dans une boucle, une condition ou une fonction, cette variable ne sera pas accessible en dehors de la boucle ou de la condition.

Sa particularité est qu'une fois qu'on a déclaré une variable avec `const`, on ne peut plus la réassigner à une autre valeur.

- Pour éviter les bugs liés à la réassignation de variables :

```js
const name = "John";
name = "Jane"; // TypeError: Assignment to constant variable.
```

- Pour éviter les bugs liés à la modification de variables :

```js
const person = {
  name: "John",
  age: 30,
};

person.age = 31; // OK
person = {
  // TypeError: Assignment to constant variable.
  name: "Jane",
  age: 31,
};
```

(On peut modifier les propriétés d'un objet déclaré avec const, mais on ne peut pas réassigner la variable à un autre objet.)

> On verra les objets plus tard dans le cours, pas de panique.

### On peut toujours utiliser let si on a besoin de réassigner la variable !

```js
let name = "John";
name = "Jane"; // OK
```

## On dit les termes : déclaration, initialisation, affectation et expression.

La déclaration, c'est le fait de déclarer une variable avec un mot-clé (var, let ou const). Celà permet de réserver un espace mémoire pour la variable.

L'initialisation, c'est le fait de donner une valeur initiale à la variable.

L'affectation, c'est le fait de modifier la valeur d'une variable.

Une expression peut être vue comme une unité de code valide qui est résolue en une valeur. Il existe deux types d'expressions, celles qui ont des effets de bord (par exemple l'affectation d'une valeur) et celles qui sont purement évaluées.

Un statement est une série d'instruction pour réaliser une action dans le programme (dans une boucle if, dans une fonction, etc.)


```js
let a = 1; // déclaration et initialisation
a = 2; // affectation
let b = a + 1; // expression

let c, d; // déclaration en série;
```

## Les différents types de variables en JavaScript

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
- bigint : pour représenter les nombres

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
let max = 9007199254740991n;

console.log(typeof prenom); // "string"
console.log(typeof age); // "number"
console.log(typeof estMajeur); // "boolean"
console.log(typeof nom); // "object"
console.log(typeof nom2); // "undefined"
console.log(typeof id); // "symbol"
console.log(typeof max); // "bigint"
```

- Les types complexes : object et function.

On parle de type complexes car ils sont composés de plusieurs valeurs, qui peuvent être de n'importe quel type.

Le type `object` est un type de données qui permet de représenter des objets. Un objet est un ensemble de propriétés et de méthodes.

Dans la vraie vie, on décrit des objets a partir de leurs propriétés : une chaise a un dossier et quatre pieds, une voiture a quatre roues et un volant, etc. On ne décrit jamais la totalité d'un objet, c'est impossible, on ne peut pas tout décrire. On décrit juste les propriétés qui nous intéressent.

Le type `object` en JavaScript fonctionne de la même manière : on décrit un objet a partir de ses propriétés et de ses méthodes.

> Parfois, pour parler d'objet, on utilise le terme tableau associatif. C'est un terme qui vient des autres langages de programmation comme le PHP, et qui n'est pas très utilisé en JavaScript.

Comme les objets dans la vraie vie, les `objects` en JavaScript ont des fonctionnalités. Par exemple, une voiture peut démarrer, s'arrêter, accélérer, etc. En JavaScript, on appelle ces fonctionnalités des méthodes.

Ici, notre étudiant a une méthode `sayMyName` qui permet d'afficher son prénom dans une boîte de dialogue. On peut appeler cette méthode en utilisant la syntaxe `etudiant.sayMyName()`.

```js
let etudiant = {
  prenom: "John",
  nom: "Doe",
  age: 30,
  note: 15.5,
  sayMyName: function () {
    alert(this.prenom);
  },
};

etudiant.sayMyName(); // Affiche "John" dans une boîte de dialogue.
```

Un `array` est un type de données, dérivé du type `object`, qui permet de représenter des tableaux. Un tableau est un ensemble de valeurs, qui peuvent être de n'importe quel type.

On parle aussi de tableau car on peut accéder aux valeurs d'un tableau en utilisant un index, qui est un nombre entier qui représente la position de la valeur dans le tableau.

Le premier élement d'un tableau est en position 0, le deuxième en position 1, etc.

C'est un peu comme parcourir un tableau Excel : on a des lignes et des colonnes, et on peut accéder à une cellule en utilisant sa position dans le tableau.

```js
let fruits = ["pomme", "banane", "cerise", "orange"];
```

Le type `function` est un type de données qui permet de représenter des fonctions. Une fonction est un ensemble d'instructions qui peuvent être appelées plusieurs fois dans un programme.

```js
function additionner(a, b) {
  return a + b;
}
```

> On verra les fonctions plus tard dans le cours, pas de panique.

Vous noterez que les `objects` et les `arrays` sont de type `object` : ce sont des objets particuliers, qui ont des propriétés et des méthodes spécifiques.

```js
console.log(typeof etudiant); // "object"
console.log(typeof fruits); // "object"
console.log(typeof additionner); // "function"
```

Les variables étudiantes et fruits sont toutes les deux des objets, mais elles ne se ressemblent pas. L'objet étudiant est un objet littéral, tandis que l'objet fruits est un tableau. Les tableaux sont des objets particuliers, qui ont des propriétés et des méthodes spécifiques.

Tous les types de données en JavaScript sont des objets, sauf les types primitifs (string, number, boolean, null, undefined, symbol, bigInt) et les fonctions, qui sont a part.

## Opérations de base sur les variables.

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

- Attention a NaN : Not a Number.

```js
let test = NaN;
// NaN = Not a Number
// Ca arrive quand on fait des trucs interdits sur des chiffres
//(ou ce qu'on croit être des chiffres)
if (typeof test === "number") {
  if (isNaN(test)) {
    console.log("C'est un nombre mais c'est pas un nombre : Nan");
  } else {
    console.log("c'est un nombre");
  }
} else {
  console.log("ce n'est pas un nombre");
}
```

- Attention aux opérations sur les chaînes de caractères :

Javascript est un langage faiblement typé, ce qui signifie que l'on peut faire des opérations sur des variables de types différents. Ce qui a des avantages, mais aussi des inconvénients.

Par exemple, on peut faire des opérations sur des chaînes de caractères, mais le résultat peut être surprenant.

```js
let a = "10";
let b = "20";

let addition = a + b; // "1020"
let soustraction = a - b; // NaN
let multiplication = a * b; // 200
let division = a / b; // 0.5
```

Il faut donc faire attention aux opérations que l'on fait sur les chaînes de caractères et vérifier leur type.

```js
let a = "10";
let b = "20";

if (typeof a === "number" && typeof b === "number") {
  let addition = a + b; // 30
  let soustraction = a - b; // -10
  let multiplication = a * b; // 200
  let division = a / b; // 0.5
} else {
  console.log(
    "Les variables sont des chaînes de caractères, ne faite pas n'importe quoi !"
  );
}
```

## Les opérateurs de comparaison.

Les opérateurs de comparaison permettent de comparer deux valeurs et de retourner un booléen (true ou false) en fonction du résultat de la comparaison.

- Opérateurs de comparaison :

```js
let a = 10;
let b = 20;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
```

En programmation, il faut faire la distinction entre l'opérateur d'assignation `=`, l'opérateur de comparaison `==` et l'opérateur de comparaison strict `===`.

On utilise le symbole `!` pour dire "non". Par exemple, `a != b` signifie "a n'est pas égal à b". C'est un opérateur de différence.

Ensuite, les opérateurs de comparaison `>` et `<` permettent de comparer deux valeurs. Par exemple, `a > b` signifie "a est supérieur à b". C'est la même utiliastion qu'en mathématiques.

- Opérateurs de comparaison stricts :

Comme on l'a vu précédemment, JavaScript est un langage faiblement typé, ce qui signifie que l'on peut faire des opérations sur des variables de types différents.

On peut donc faire le choix de faire des comparaisons stricts (strict equality) pour vérifier que les variables que l'on compare sont bien du même type.

```js
let a = 10;
let b = "10";

console.log(a === b); // false
console.log(a !== b); // true

console.log(a == b); // true
console.log(a != b); // false
```

- Le modulo :

Le modulo est un opérateur qui permet de calculer le reste d'une division euclidienne.

```js
let a = 10;
let b = 3;

console.log(a % b); // 1
```

Ca fait peur mais on l'utilise souvent pour savoir si un nombre est pair ou impair ou bien s'il est divisible par un autre nombre.

```js
let a = 10;

if (a % 2 === 0) {
  console.log("a est pair");
} else {
  console.log("a est impair");
}

let b = 15;
let c = 3;

if (b % c === 0) {
  console.log("b est divisible par c");
} else {
  console.log("b n'est pas divisible par c");
}
```

## Quelques bonnes pratiques pour les variables

Déja, lorsqu'on travaille avec des variables, il faut faire attention à la casse. En effet, JavaScript est sensible à la casse, ce qui signifie que les variables `prenom` et `Prenom` sont deux variables différentes.

Ensuite, même si l'on travaille seul, il faut être cohérent : il faut se mettre d'accord sur des conventions et les respecter. Par exemple, on peut décider de toujours utiliser le camelCase pour nommer les variables, et de toujours utiliser des noms de variables en anglais.

Pour Uncle Bob (le surnom de Robert C. Martin, un auteur prolifique sur la qualité dans le code et l'architecture), un nom de variable doit être :

- Significatif et révélateur.
- Facile à prononcer.
- Facile à rechercher.
- Différent dans les détails.

Significatif et révélateur :

- `let a = 10;` -> `let age = 10;`
- `let b = 20;` -> `let note = 20;`
- `let c = a + b;` -> `let somme = age + note;`

Il vaut mieux utiliser des noms de variables qui ont du sens, plutôt que des noms de variables qui ne veulent rien dire. Même si c'est plus long, c'est plus facile à comprendre.

Facile à prononcer :

- `let heroPwr = 10;` -> `let heroPower = 10;`

Imaginez que vous devez expliquer votre code à quelqu'un, il vaut mieux utiliser des noms de variables qui sont faciles à prononcer. Et ca évite les erreurs de frappe et les postillons sur le clavier.

Facile à rechercher :

- `let as = 10;` -> `let ageStudent = 10;` Car si on cherche "as" dans le code, on va trouver beaucoup de choses, mais si on cherche "ageStudent", on va trouver que cette variable.

Différent dans les détails :

- `let ageStudent = 10;` -> `let ageTeacher = 10;` Car si on a deux variables qui s'appellent "age", on ne sait pas si c'est l'age de l'étudiant ou du professeur.

## Quelques fonctions qui vont nous permettre de faire des exercices.

Nous n'avons pas encore vu les fonctions, mais nous allons en utiliser quelques unes pour faire des exercices. Pour faire simple, une fonction c'est un bout de code que l'on peut appeler plusieurs fois, sans avoir a tout retaper ou même a tout comprendre (on parle d'abstraction).

- `prompt()` : permet de demander à l'utilisateur d'entrer une valeur.
- `alert()` : permet d'afficher une boîte de dialogue avec un message.
- `console.log()` : permet d'afficher un message dans la console du navigateur.
- `confirm()` : permet d'afficher une boîte de dialogue avec un message et deux boutons (OK et Annuler).

## Exemple pratique

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
