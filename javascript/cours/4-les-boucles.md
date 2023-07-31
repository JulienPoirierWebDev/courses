# Les conditions et les boucles en JavaScript

Si les variables sont les briques et les fonctions les murs, les conditions et les boucles sont les batiments et villes que l'on construit avec ces briques et ces murs.

Les conditons et les boucles permettent de contrôler le flux d'exécution du programme, c'est à dire de décider quelles instructions exécuter et dans quel ordre.

## Conditions

Les conditions permettent d'exécuter des instructions seulement si une condition est vraie. C'est comme si on disait : "Si cette condition est vraie, alors exécute ces instructions".

Il y a donc une condition, qui prend souvent la forme d'une comparaison, et des instructions à exécuter si la condition est vraie.

## Conditions simples

- Syntaxe de la structure `if...else` :

```js
if (condition) {
  // Instructions à exécuter si la condition est vraie
} else {
  // Instructions à exécuter si la condition est fausse
}
```

Le bloc `else` est optionnel. Si la condition est fausse, les instructions dans le bloc `else` ne seront pas exécutées.

- Exemple d'utilisation de `if...else` :

```js
let age = 18;

if (age >= 18) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes mineur.");
}
```

### Exercices

- Écrivez une fonction en JavaScript qui prend en paramètre un nombre et vérifie s'il est pair. Si c'est le cas, la fonction renvoie "Le nombre est pair", sinon elle renvoie "Le nombre est impair".

- Écrivez une fonction en JavaScript qui prend en paramètre une chaîne de caractères et vérifie si elle est vide. Si la chaîne est vide, la fonction renvoie "La chaîne est vide". Sinon, elle renvoie "La chaîne n'est pas vide".

## Conditions enchainées

- Syntaxe de la structure `if...else if...else` :

```js
if (condition1) {
  // Instructions à exécuter si la condition1 est vraie
} else if (condition2) {
  // Instructions à exécuter si la condition2 est vraie
} else {
  // Instructions à exécuter si aucune des conditions n'est vraie
}

// Exemple :

let note = 10;

if (note < 10) {
  console.log("Vous n'êtes pas reçu.");
} else if (note >= 10 && note < 12) {
  console.log("Vous êtes reçu.");
} else if (note >= 12 && note < 14) {
  console.log("Vous êtes reçu avec mention.");
} else if (note >= 14 && note < 16) {
  console.log("Vous êtes reçu avec mention bien.");
} else if (note >= 16 && note < 18) {
  console.log("Vous êtes reçu avec mention très bien.");
} else {
  console.log("Vous êtes reçu avec les félicitations du jury.");
}
```

### Exercices

- Écrivez une fonction en JavaScript qui prend en paramètre un jour de la semaine et affiche un message correspondant au type de journée. Si le jour est "Lundi" ou "Mardi", affichez "Début de la semaine". Si le jour est "Mercredi" ou "Jeudi", affichez "Milieu de la semaine". Pour les autres jours, affichez "Mais c'est le week-end !".

### Conditions multiples

Avec les conditions multiples, on peut vérifier plusieurs conditions à la fois.
Les conditions multiples sont très utiles pour vérifier plusieurs conditions en même temps: si la première condition est fausse, on passe à la suivante, et ainsi de suite.

Les opérateurs logiques `&&` et `||` permettent de combiner plusieurs conditions tandis que l'opérateur logique `!` permet d'inverser une condition.

```js
if (condition1 && condition2) {
  // Instructions à exécuter si les deux conditions sont vraies
}

if (condition1 || condition2) {
  // Instructions à exécuter si au moins une des deux conditions est vraie
}

if (!condition) {
  // Instructions à exécuter si la condition est fausse
}
```

### Exercices

- Écrivez un programme qui demande a l'utilisateur s'il veut commander une pizza puis si il veut commander une boisson, puis si il veut commander un dessert. Si il a commandé les trois élements, affichez "Vous avez pris un menu", s'il a commandé deux élements, affichez "Vous avez pris un menu partiel", sinon affichez "Vous n'avez pas pris de menu".

## Switch

Dans certains cas, on peut utiliser la structure `switch` à la place de la structure `if...else if...else`. La structure `switch` est plus lisible et plus facile à comprendre lorsque l'on a beaucoup de conditions à vérifier.

Par contre, la structure `switch` ne permet pas de vérifier des conditions multiples.

```js
let fruit = prompt("Quel fruit aime tu ?");

if (fruit === "orange") {
  console.log("orange");
} else if (fruit === "banane") {
  console.log("banane");
} else if (fruit === "pomme") {
  console.log("pomme");
} else {
  console.log("t'aime pas les fruits");
}

// -----------

switch (fruit) {
  case "orange":
    console.log("orange");
    break;

  case "banane":
    console.log("orange");
    break;

  case "pomme":
    console.log("pomme");
    break;

  default:
    break;
}
```

La structure `switch` est plus lisible et plus facile à comprendre lorsque l'on a beaucoup de conditions à vérifier.

Elle se présente sous la forme suivante :

```js
switch (variable) {
  case valeur1:
    // Instructions à exécuter si la variable vaut valeur1
    break;

  case valeur2:
    // Instructions à exécuter si la variable vaut valeur2
    break;

  case valeur3:
    // Instructions à exécuter si la variable vaut valeur3
    break;

  default:
    // Instructions à exécuter si aucune des valeurs ne correspond
    break;
}
```

Le mot-clé `break` permet de sortir de la structure `switch` et d'éviter d'exécuter les instructions des autres `case`. C'est très important de ne pas oublier le `break` à la fin de chaque `case`, c'est une sécurité pour éviter d'exécuter des instructions par erreur.

### Exercices

- Écrivez une fonction en JavaScript qui prend en paramètre une chaîne de caractères représentant une couleur et renvoie son code hexadécimal correspondant en utilisant une instruction switch. Si la couleur n'est pas reconnue, renvoyez "Couleur inconnue".

## Boucle `for`

Les boucles permettent d'exécuter plusieurs fois une même instruction ou un même bloc d'instructions. C'est comme si on disait : "Exécute ces instructions tant que cette condition est vraie". C'est utile pour gérer des listes de données, par exemple.

La boucle `for` est la plus utilisée. Elle permet d'exécuter un bloc d'instructions un nombre de fois déterminé à l'avance. Nous verrons plus tard qu'il existe d'autres types de boucles mais la boucle `for` est la plus utilisée et la plus polyvalente (et la moins dangereuse).

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

### Exercices

- Ecrire une fonction qui prend en paramètre un tableau de ventes et qui renvoie le total des ventes. Par exemple, si le tableau est `[10, 20, 30]`, la fonction doit renvoyer `60`. Si le tableau est vide, la fonction doit renvoyer `0`. Si le tableau est `[10, 0, 50, 120, 25, 14, 18]`, la fonction doit renvoyer `237`.

- Ecrire une fonction qui prend en paramètre deux nombres et qui renvoi la somme des nombres entre ces deux nombres. Par exemple, si les nombres sont `1` et `5`, la fonction doit renvoyer `15` (car `1 + 2 + 3 + 4 + 5 = 15`). Si les nombres sont `10` et `20`, la fonction doit renvoyer `165`.

- Créer un programme qui demande à l'utilisateur d'entrer un nombre, puis affiche la table de multiplication de ce nombre :

### Boucles `for` spéciales

- Exemple de for of

La boucle `for...of` permet de parcourir un tableau ou une chaîne de caractères. Elle est plus simple à utiliser que la boucle `for` classique.

```js
let arr = [0, 1, 2];

for (const element of arr) {
  console.log(element);
}
```

- Exemple de for in

La boucle `for...in` permet de parcourir les propriétés d'un objet.

```js
let object = {
  name: "John",
  age: 50,
  address: "Here from somewhere",
};

for (property in object) {
  console.log(property); // name, puis age, puis address
  console.log(object[property]); // "John", 50, "Here from somewhere"
}
```

## Boucle `while`

Alors, que la boucle `for` permet d'exécuter un bloc d'instructions un nombre de fois déterminé à l'avance, la boucle `while` permet d'exécuter un bloc d'instructions tant qu'une condition est vraie.

C'est plus souple que la boucle `for` mais il faut faire attention à ne pas créer de boucles infinies. Si la condition est toujours vraie, la boucle ne s'arrêtera jamais. Et si la boucle ne s'arrête jamais, le programme ne s'arrêtera jamais. Et si la boucle ne s'arrête jamais, le programme ne s'arrêtera jamais. Et si la boucle ne s'arrête jamais, le programme ne s'arrêtera jamais. Et si la boucle ne s'arrête jamais, le programme ne s'arrêtera jamais...

Et si vous utilisez la boucle `while` pour créer des élements 3D, vous risquez de créer un trou noir qui va aspirer la Terre et toute la galaxie ou au pire, de faire planter votre navigateur, votre ordinateur et tout Internet.

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

- Créer un programme qui demande à l'utilisateur d'entrer un nombre, puis le décompte jusqu'à 0.
