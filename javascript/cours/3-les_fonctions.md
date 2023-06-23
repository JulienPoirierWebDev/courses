## Déclaration et utilisation des fonctions

On va parler des fonctions, ces blocs de code qui permettent d'exécuter une série d'instructions. Si les variables sont les briques de base de la programmation, les fonctions sont les murs, les plafonds, les fenêtres, les portes, etc.

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

Un paramètre est une variable qui va contenir une valeur qui sera passée à la fonction lors de son appel. On peut l'utiliser dans la fonction comme n'importe quelle autre variable.

Tips : On peut déclarer une fonction avec des paramètres mais l'appeler sans arguments. Dans ce cas, les paramètres auront la valeur `undefined`.

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

sumWithoutReturn(2, 3);

let firstOp = myResult;

sumWithoutReturn(5, 7);

let secondOp = myResult;

console.log(firstOp, secondOp);

// ------------------

let myVar;
let myVar2;
// fonction sans effets de bords (paramètre ou pas) ->
// fonction pure
function sumWithReturn(a, b) {
  let result = a + b;
  return result;
}

myVar = sumWithReturn(2, 3);
myVar2 = sumWithReturn(5, 7);

console.log(myVar, myVar2);

// -------------

let a = 5;
let b = 5;
function sumWithoutParameters() {
  return a + b;
}

let other = sumWithoutParameters();

a = 2;
b = 7;

let c = 2;

let other2 = sumWithoutParameters();

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

      let tempC = parseFloat(
        prompt("Entrez une température en degrés Celsius :")
      );
      let tempF = celsiusToFahrenheit(tempC);
      alert(`${tempC} °C équivaut à ${tempF} °F.`);

      let tempF2 = parseFloat(
        prompt("Entrez une température en degrés Fahrenheit :")
      );
      let tempC2 = fahrenheitToCelsius(tempF2);
      alert(`${tempF2} °F équivaut à ${tempC2} °C.`);
    </script>
  </body>
</html>
```
