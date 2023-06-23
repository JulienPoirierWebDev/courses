# TODO

- [ ] Ajouter le tableau des versions EcmaScript.
- [ ] Ajouter les ajouts de chaque version EcmaScript.
- [ ] Refaire l'arborecence du cours.
- [ ] Reprendre les exercices et mettre les solutions dans un dossier.
- [ ] Revoir la place des opérations sur les chaînes de caractères.
- [ ] Reprendre a partir des fonctions.

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

### Les tableaux à deux dimensions

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
x--; //
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

- Créer un programme qui demande à l'utilisateur d'entrer deux nombres, puis affiche le résultat de toutes les opérations arithmétiques de base, sous forme d'objet :

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

- Exemple de for of

  ```js
  let arr = [0, 1, 2];

  for (element of arr) {
    console.log(element);
  }
  ```

- Exemple de for in

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

  7.2.5 Switch

```js
let fruit = parseInt(prompt("Quel fruit aime tu ?"));

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
  case "orange": //Do Something
    console.log("orange");
    break;

  case "banane": //Do Something
    console.log("orange");
    break;

  case "pomme": //Do Something
    console.log("pomme");
    break;

  default: //Default will perform if all case’s fail
    console.log("t'aime pas les fruits");
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
      let nombre = parseInt(
        prompt("Entrez un nombre pour afficher sa table de multiplication :")
      );

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
      .couleur1 {
        color: red;
      }
      .couleur2 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p id="monParagraphe">Ceci est un exemple de texte.</p>
    <button id="monBouton">Changer la couleur</button>

    <script>
      let bouton = document.getElementById("monBouton");
      let paragraphe = document.getElementById("monParagraphe");

      bouton.addEventListener("click", function () {
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
    <input id="elementInput" type="text" placeholder="Élément de liste" />
    <button id="ajouter">Ajouter</button>
    <button id="supprimer">Supprimer le dernier élément</button>
    <ul id="maListe"></ul>

    <script>
      let ajouterBtn = document.getElementById("ajouter");
      let supprimerBtn = document.getElementById("supprimer");
      let elementInput = document.getElementById("elementInput");
      let liste = document.getElementById("maListe");

      ajouterBtn.addEventListener("click", function () {
        let nouvelElement = document.createElement("li");
        nouvelElement.textContent = elementInput.value;
        liste.appendChild(nouvelElement);
        elementInput.value = "";
      });

      supprimerBtn.addEventListener("click", function () {
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
xhttp.onreadystatechange = function () {
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
  .then((response) => response.text())
  .then((data) => {
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

      chargerBtn.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            let html = "<ul>";
            for (let utilisateur of data) {
              html += `<li>${utilisateur.name} (${utilisateur.email})</li>`;
            }
            html += "</ul>";
            resultatDiv.innerHTML = html;
          })
          .catch((error) => {
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
  .then((resultat) => {
    // Traiter le résultat
  })
  .catch((erreur) => {
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

      chargerBtn.addEventListener("click", async function () {
        try {
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
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
      import {
        addition,
        soustraction,
        multiplication,
        division,
      } from "./calculs.js";

      console.log("Addition:", addition(4, 2));
      console.log("Soustraction:", soustraction(4, 2));
      console.log("Multiplication:", multiplication(4, 2));
      console.log("Division:", division(4, 2));
    </script>
  </body>
</html>
```
