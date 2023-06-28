## Opérations sur les chaînes de caractères

Ce chapitre est consacré aux opérations sur les chaînes de caractères en JavaScript. Il est assez rapide car rien n'est très complexe et cela demande surtout de la pratique, que nous ferrons dans les exercices des prochains chapitres.

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

- `toUpperCase()` et `toLowerCase()` : méthodes pour convertir une chaîne en majuscules ou en minuscules

```js
let texteMaj = texte.toUpperCase();
let texteMin = texte.toLowerCase();
console.log(texteMaj); // "HELLO, WORLD!"
console.log(texteMin); // "hello, world!"
```

- `indexOf()` : méthode pour rechercher la première occurrence d'une sous-chaîne dans une chaîne de caractères

```js
let texte = "Hello, world!";
let position = texte.indexOf("world");
console.log(position); // 7
```

- `substring()` : méthode pour extraire une sous-chaîne à partir d'une chaîne de caractères

```js
let extrait = texte.substring(0, 5);
console.log(extrait); // "Hello"
console.log(texte); // "Hello world!"
```

- `split()` : méthode pour diviser une chaîne de caractères en un tableau de sous-chaînes

```js
let mots = texte.split(" ");
console.log(mots); // ["Hello,", "world!"]

let mots = texte.split("");

console.log(mots); // ["H","e","l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

let other = "Ceci est une phrase super longue.";

other.split("phrase"); // ["Ceci est une ", " super longue."]
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

      alert(
        `Votre phrase contient ${nbMots} mots et ${nbCaracteresWithoutSpace} caractères (sans les espaces).`
      );
    </script>
  </body>
</html>
```
