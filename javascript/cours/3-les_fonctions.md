# Les fonctions !

On va parler des fonctions, ces blocs de code qui permettent d'exécuter une série d'instructions. Si les variables sont les briques de base de la programmation, les fonctions sont les murs, les plafonds, les fenêtres, les portes, etc.

## Les bases des fonctions

### Déclaration de fonction

- Syntaxe pour déclarer une fonction en JavaScript :

Avant de pouvoir utiliser une fonction, il faut la déclarer. C'est-à-dire qu'on va lui donner un nom et lui indiquer les instructions qu'elle doit exécuter. On peut ensuite appeler la fonction autant de fois qu'on le souhaite.

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

### Appel d'une fonction

- Syntaxe pour appeler une fonction en JavaScript :

Une fois la fonction déclarée, on peut l'appeler en utilisant son nom suivi de parenthèses. On peut passer des arguments à la fonction en les plaçant entre les parenthèses.

- Arguments et paramètres sont deux termes qui désignent des choses très proches mais un peu différentes. Si vous ne comprenez pas la différence, ce n'est pas grave, vous pouvez utiliser les deux termes indifféremment. Mais si vous voulez comprendre la différence, voici une explication simple :
  - Les paramètres sont les variables déclarées dans la fonction. Elles sont utilisées dans la fonction comme n'importe quelle autre variable.
  - Les arguments sont les valeurs passées à la fonction lors de son appel. Elles sont utilisées dans la fonction comme n'importe quelle autre variable.

```js
nomDeLaFonction(arguments);
```

- Exemple d'appel de la fonction `afficherBonjour` :

```js
afficherBonjour(); // Affiche "Bonjour !"
```

### Fonctions avec paramètres / arguments

- Exemple d'une fonction avec des paramètres :

Un paramètre est une variable qui va contenir une valeur qui sera passée à la fonction lors de son appel. On peut l'utiliser dans la fonction comme n'importe quelle autre variable.

```js
function afficherNomComplet(prenom, nom) {
  console.log(prenom + " " + nom);
}
```

- Appel de la fonction avec des arguments :

```js
afficherNomComplet("John", "Doe"); // Affiche "John Doe"

let firstName = "Jane";
let lastName = "Doe";

afficherNomComplet(firstName, lastName); // Affiche "Jane Doe"
```

> Remarquez que l'on n'a pas besoin de déclarer les paramètres de la fonction. On peut directement les utiliser dans la fonction.
> Remarquez également que l'on peut passer des variables en argument à une fonction et que ces variables peuvent avoir n'importe quel nom.

### Fonctions avec valeur de retour

- Exemple d'une fonction qui retourne une valeur :

Une fonction peut retourner une valeur. Pour cela, on utilise le mot-clé `return` suivi de la valeur à retourner.

```js
function additionner(a, b) {
  return a + b;
}
```

Une fois la valeur retournée, la fonction s'arrête et le code qui suit le `return` n'est pas exécuté.

```js
function additionner(a, b) {
  return a + b;
  console.log("Cette ligne ne sera jamais exécutée !");
}
```

La valeur retournée peut être stockée dans une variable ou utilisée directement dans le code.

```js
let somme = additionner(10, 20);
console.log(somme); // 30

console.log(additionner(10, 20)); // 30
```

## Fonctions pures et fonctions avec effets de bord

### C'est quoi un effet de bord ?

Un effet de bord est une modification de l'état d'un programme qui n'est pas local à la fonction. C'est-à-dire que la fonction va modifier une variable qui n'est pas déclarée dans la fonction.

Pour faire plus simple, une fonction avec effets de bord va modifier une variable qui n'est pas déclarée dans la fonction. Cela veut dire que la fonction va modifier une variable qui n'est pas dans son "espace" et donc que l'on ne peut pas savoir ce qu'elle va faire.

Dans certains cas cela peut être utile mais en général, il vaut mieux éviter les fonctions avec effets de bord.

```js
let nombre = 10;

function ajouterCinq() {
  nombre = nombre + 5; // Ceci est un effet de bord - la fonction modifie une variable externe.
}

ajouterCinq();
console.log(nombre); // Cela affichera '15' car la fonction 'ajouterCinq' a modifié la variable 'nombre'.

ajouterCinq();
console.log(nombre); // Cela affichera '20' car la fonction 'ajouterCinq' a modifié la variable 'nombre'.
```

Dans cet exemple, la fonction `ajouterCinq` modifie la variable `nombre` qui n'est pas déclarée dans la fonction. C'est un effet de bord.

> Est-ce que vous pouvez dire ce que fait la fonction `ajouterCinq` en regardant uniquement la fonction ? Non, car elle modifie une variable qui n'est pas déclarée dans la fonction.

> Est-ce que les effets de bord sont toujours mauvais ? Non, mais il faut les éviter autant que possible.

Cas où un effet de bord est utile :

- Lorsque l'on veut modifier une variable globale (déclarée en dehors de toutes les fonctions) depuis une fonction.
- Lorsque l'on veut modifier un tableau ou un objet passé en paramètre à une fonction.
- Lorsque l'on veut modifier une variable déclarée dans une fonction parent depuis une fonction enfant.
- Dans le front, lorsqu'on veut modifier le DOM depuis une fonction, c'est-à-dire ajouter ou supprimer des éléments HTML.

> Ne vous inquiétez pas si vous ne comprenez pas tout, on verra tout ça en détail dans les prochains chapitres. Pour l'instant, retenez juste que les effets de bord sont à éviter autant que possible. Si vous en utilisez au début, ce n'est pas grave, vous parviendrez a les éviter avec le temps.

### C'est quoi une fonction pure ?

Une fonction pure est une fonction qui ne modifie pas l'état d'un programme. C'est-à-dire qu'elle ne modifie pas de variables qui ne sont pas déclarées dans la fonction.

Pour faire plus simple, une fonction pure ne modifie pas de variables qui ne sont pas déclarées dans la fonction. Cela veut dire que la fonction ne va pas modifier une variable qui n'est pas dans son "espace" et donc que l'on peut savoir ce qu'elle va faire.

Ce qui est bien avec une fonction pure, c'est qu'on peut savoir ce qu'elle fait en regardant uniquement la fonction. On n'a pas besoin de regarder le code qui l'appelle pour savoir ce qu'elle fait.

Elle est prévisible, on peut l'utiliser dans n'importe quel contexte et elle est facile à tester.

```js
function ajouterCinq(nombre) {
  return nombre + 5; // Ceci est une fonction pure - la fonction ne modifie pas de variable externe.
}

let nombre = 10;
let resultat = ajouterCinq(nombre);

console.log(nombre); // Cela affichera '10' car la fonction 'ajouterCinq' n'a pas modifié la variable 'nombre'.

console.log(resultat); // Cela affichera '15' car la fonction 'ajouterCinq' a retourné le résultat de l'addition.
```

Dans cet exemple, la fonction `ajouterCinq` ne modifie pas la variable `nombre` qui n'est pas déclarée dans la fonction. C'est une fonction pure.

> Est-ce que vous pouvez dire ce que fait la fonction `ajouterCinq` en regardant uniquement la fonction ? Oui, car elle ne modifie pas de variable qui n'est pas déclarée dans la fonction.

> Est-ce que les fonctions pures sont toujours bonnes ? Oui, et il faut les utiliser autant que possible.

> Est-ce que les fonctions pures peuvent modifier des variables ? Pas directement, mais elles peuvent retourner une valeur qui sera stockée dans une variable.

```js
function ajouterCinq(nombre) {
  return nombre + 5; // Ceci est une fonction pure - la fonction ne modifie pas de variable externe.
}

let nombre = 10;
nombre = ajouterCinq(nombre); // On stocke le résultat de la fonction dans la variable 'nombre'.

console.log(nombre); // Cela affichera '15' car la fonction 'ajouterCinq' a retourné le résultat de l'addition.
```

Dans cet exemple, nous avons modifié la variable `nombre` en stockant le résultat de la fonction `ajouterCinq` dans la variable `nombre`. C'est une modification volontaire, nous avons choisi de modifier la variable `nombre` et nous savons ce que fait la fonction `ajouterCinq`. C'est un choix du développeur. Ce n'est pas un effet de bord, ce n'est pas subit.

## Usages avancés des fonctions

### L'objet `arguments`

L'objet `arguments` est un objet qui contient tous les arguments passés à une fonction. C'est un objet qui est disponible dans toutes les fonctions.

```js
function afficherArguments() {
  console.log(arguments);
}

afficherArguments("Bonjour", "à", "tous"); // Affiche ['Bonjour', 'à', 'tous']
```

On remarque déja qu'on peut passer autant d'arguments que l'on veut à une fonction.

Même quand on ne déclare pas de paramètres, on peut récupérer les arguments passés à une fonction en utilisant l'objet `arguments`.

On peut également récupérer les arguments un par un en utilisant la propriété `length` de l'objet `arguments`.

```js
function afficherArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

afficherArguments("Bonjour", "à", "tous"); // Affiche 'Bonjour', 'à', 'tous'
```

L'objet `arguments` est vraiment peu utilisé. Il est surtout utile pour les fonctions qui peuvent recevoir un nombre variable d'arguments. Il est plus simple d'utiliser directement les paramètres de la fonction.

### Le `rest parameter`

Le `rest parameter` est une syntaxe qui permet de récupérer un nombre variable d'arguments passés à une fonction. C'est une syntaxe qui est disponible depuis ES6.

```js
function afficherArguments(...args) {
  console.log(args);
}

afficherArguments("Bonjour", "à", "tous"); // Affiche ['Bonjour', 'à', 'tous']
```

C'est plus lisible que d'utiliser l'objet `arguments` et c'est plus simple à utiliser que de récupérer les arguments un par un.
Au moins, on sait que tous les arguments sont stockés dans un tableau et que leur nombre peut varier.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters](Lire la doc sur le rest parameter)

### Les fonctions anonymes

Une fonction anonyme est une fonction qui n'a pas de nom. C'est-à-dire qu'elle n'est pas déclarée avec un nom.

```js
function () {
  // Instructions à exécuter
}
```

On peut utiliser une fonction anonyme comme n'importe quelle autre fonction. On peut l'appeler, lui passer des arguments, etc.

```js
let afficherBonjour = function () {
  console.log("Bonjour !");
};

afficherBonjour(); // Affiche "Bonjour !"
```

Vous remarquez que l'on a stocké la fonction dans une variable. C'est parce qu'une fonction anonyme n'a pas de nom et donc on ne peut pas l'appeler directement.

C'est une syntaxe qui est très peu utilisée. On préfère utiliser la syntaxe des fonctions fléchées.

### Les fonctions fléchées

Une fonction fléchée est une fonction qui est déclarée avec une syntaxe plus courte. C'est une syntaxe qui est disponible depuis ES6.

```js
let nomDeLaFonction = (parametre1, parametre2) => {
  // Instructions à exécuter
};
```

On peut utiliser une fonction fléchée comme n'importe quelle autre fonction. On peut l'appeler, lui passer des arguments, etc.

```js
let afficherBonjour = () => {
  console.log("Bonjour !");
};

afficherBonjour(); // Affiche "Bonjour !"
```

Vous remarquez que l'on a stocké la fonction dans une variable. Comme la fonction anonyme, la fonction fléchée n'a pas de nom et donc on ne peut pas l'appeler directement.

On peut également utiliser une fonction fléchée sans stocker la fonction dans une variable.

```js
(() => {
  console.log("Bonjour !");
})(); // Affiche "Bonjour !"
```

On utilise des parenthèses autour de la fonction pour indiquer à JavaScript que c'est une fonction et non une expression.

Cette fonction est appelée immédiatement après sa déclaration. C'est ce qu'on appelle une fonction auto-exécutée : on le remarque grâce aux parenthèses qui entourent la fonction et qui permettent de l'appeler immédiatement.

### Les fonctions fléchées

Une fonction fléchée est une fonction qui est déclarée avec une syntaxe plus courte. C'est une syntaxe qui est disponible depuis ES6.

```js
let nomDeLaFonction = (parametre1, parametre2) => {
  // Instructions à exécuter
};
```

On peut utiliser une fonction fléchée comme n'importe quelle autre fonction. C'est une syntaxe qui est très utilisée en JavaScript moderne car elle est plus courte et plus lisible.

```js
let afficherBonjour = () => {
  console.log("Bonjour !");
};

afficherBonjour(); // Affiche "Bonjour !"
```

### Et après ?

On a vu les bases des fonctions en JavaScript. On a vu comment déclarer une fonction, comment l'appeler, comment lui passer des arguments, comment elle peut retourner une valeur, etc.

On a également vu les fonctions pures et les fonctions avec effets de bord. On a vu que les fonctions pures sont à privilégier autant que possible.

On a vu l'objet `arguments` et le `rest parameter` qui permettent de récupérer un nombre variable d'arguments passés à une fonction.

On a vu les fonctions anonymes et les fonctions fléchées qui sont des syntaxes plus courtes pour déclarer des fonctions.

On a vu les fonctions auto-exécutées qui permettent d'exécuter une fonction immédiatement après sa déclaration.

Il y a encore beaucoup de choses à apprendre sur les fonctions. Vous en apprendrez plus au fur et a mesure que vous progresserez en JavaScript.

## Les fonctions natives

Il existe des fonctions qui sont disponibles directement en JavaScript. On appelle ces fonctions des fonctions natives.

Nous avons déja vu certaines fonctions natives comme `console.log`, `prompt`, `alert`, `confirm`.

Il y a beaucoup de fonctions natives en JavaScript.

- La fonction `parseInt` permet de convertir une chaîne de caractères en nombre entier.
- La fonction `parseFloat` permet de convertir une chaîne de caractères en nombre décimal.
- La fonction `isNaN` permet de vérifier si une valeur est "Not a Number".

Ensuite, il y a ce qu'on appelle les objets natifs. Ce sont des objets qui sont disponibles directement en JavaScript. Ces objets ont des méthodes (qui sont des fonctions) qui permettent de faire des choses.

- L'objet `Math` permet de faire des opérations mathématiques.
- L'objet `Date` permet de manipuler des dates.
- L'objet `String` permet de manipuler des chaînes de caractères.
- L'objet `Array` permet de manipuler des tableaux.
- L'objet `Object` permet de manipuler des objets.

### L'objet `Math`

L'objet `Math` permet de faire des opérations mathématiques.

- La méthode `Math.random` permet de générer un nombre aléatoire entre 0 et 1.
- La méthode `Math.floor` permet d'arrondir un nombre à l'entier inférieur.
- La méthode `Math.ceil` permet d'arrondir un nombre à l'entier supérieur.
- La méthode `Math.round` permet d'arrondir un nombre à l'entier le plus proche.
- La méthode `Math.min` permet de trouver le nombre le plus petit dans une liste de nombres.
- La méthode `Math.max` permet de trouver le nombre le plus grand dans une liste de nombres.

### L'objet `Date`

L'objet `Date` permet de manipuler des dates.

- La méthode `Date.now` permet de récupérer le nombre de millisecondes écoulées depuis le 1er janvier 1970.
- La méthode `Date.parse` permet de convertir une chaîne de caractères en nombre de millisecondes écoulées depuis le 1er janvier 1970.
- La méthode `Date.UTC` permet de convertir une chaîne de caractères en nombre de millisecondes écoulées depuis le 1er janvier 1970.
- La méthode `Date.prototype.getDate` permet de récupérer le jour du mois d'une date.
- La méthode `Date.prototype.getDay` permet de récupérer le jour de la semaine d'une date.
- La méthode `Date.prototype.getFullYear` permet de récupérer l'année d'une date.
- La méthode `Date.prototype.getHours` permet de récupérer l'heure d'une date.
- La méthode `Date.prototype.getMilliseconds` permet de récupérer les millisecondes d'une date.

> `Date.prototype` signifie que la méthode est disponible sur tous les objets `Date`. On parle de méthode de prototype. (On verra ça plus tard, dans la partie sur les objets).

```js
let date = new Date();

console.log(date.getDate()); // Récupère le jour du mois
console.log(date.getDay()); // Récupère le jour de la semaine
console.log(date.getFullYear()); // Récupère l'année
```

### L'objet `String`

L'objet `String` permet de manipuler des chaînes de caractères.

- La méthode `String.prototype.charAt` permet de récupérer un caractère à une position donnée.
- La méthode `String.prototype.includes` permet de vérifier si une chaîne de caractères contient une autre chaîne de caractères.
- La méthode `String.prototype.indexOf` permet de récupérer la position d'une chaîne de caractères dans une autre chaîne de caractères.
- La méthode `String.prototype.lastIndexOf` permet de récupérer la position de la dernière occurrence d'une chaîne de caractères dans une autre chaîne de caractères.
- La méthode `String.prototype.match` permet de récupérer les correspondances d'une chaîne de caractères avec une expression régulière.
- La méthode `String.prototype.replace` permet de remplacer une chaîne de caractères par une autre chaîne de caractères.
- La méthode `String.prototype.slice` permet de récupérer une partie d'une chaîne de caractères.
- La méthode `String.prototype.split` permet de découper une chaîne de caractères en plusieurs chaînes de caractères.
- La méthode `String.prototype.toLowerCase` permet de convertir une chaîne de caractères en minuscules.
- La méthode `String.prototype.toUpperCase` permet de convertir une chaîne de caractères en majuscules.
- La méthode `String.prototype.trim` permet de supprimer les espaces au début et à la fin d'une chaîne de caractères.

Il y a beaucoup d'autres objets natifs en JavaScript. Vous en apprendrez plus au fur et a mesure que vous progresserez en JavaScript.

## Exemple pratique

- Créer un programme qui utilise des fonctions pour convertir une température entre Celsius et Fahrenheit :
