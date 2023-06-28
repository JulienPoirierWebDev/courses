# Introduction aux modules JavaScript

Objectif : Apprendre a structurer votre code en utilisant des modules JavaScript pour améliorer la modularité et la réutilisabilité du code.

## Concepts de base des modules

- Les modules permettent de séparer le code en plusieurs fichiers pour faciliter l'organisation, la maintenance et la réutilisation du code.
- Un module est un fichier JavaScript qui peut exporter des variables, des fonctions ou des classes pour être utilisées dans d'autres modules.
- Les modules sont chargés et exécutés de manière asynchrone et isolée, ce qui évite les conflits de noms et les problèmes de portée.

## Comment active-t-on les modules ?

- Pour activer les modules JavaScript, il faut ajouter l'attribut `type="module"` à la balise `<script>` :
- Exemple :

```html
<script type="module" src="monScript.js"></script>
```

Cela permet d'indiquer au navigateur que le script est un module et qu'il doit être chargé et exécuté en tant que tel.

Cela permet aussi d'activer le mode strict par défaut, ce qui signifie que le code est exécuté en mode strict, sans avoir besoin d'ajouter la directive `"use strict";` au début du fichier.

Enfin, cela permet d'importer et d'exporter des membres depuis et vers d'autres modules.

Ainsi, nous n'avons qu'un seul script à charger dans la page HTML, et les modules sont chargés et exécutés de manière asynchrone et isolée.

## Exportation et importation de membres

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

Concretement, cela signifie que l'on importe toutes les variables, fonctions et classes exportées par le module dans un objet nommé `monModule`, grace au mot-clé `as` qui permet de renommer l'objet importé avec un alias.

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
