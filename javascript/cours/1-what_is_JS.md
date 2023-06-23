# Chapitre 1 - Introduction à JavaScript

Nous allons parler d'où vient Javascript, de ce qu'il est aujourd'hui et de comment l'utiliser.

## Qu'est-ce que JavaScript ?

Javascript est un langage de programmation qui permet d'ajouter des fonctionnalités dynamiques à un site web. Il est utilisé pour créer des applications web interactives, des jeux, des applications mobiles, des logiciels de bureau, etc.

C'est un langage de programmation de haut niveau, qui peut s'utiliser autant en orienté objet qu'en fonctionnel. Il est multi-paradigme, c'est-à-dire qu'il permet d'utiliser plusieurs styles de programmation différents.
C'est a la fois simple de s'y mettre et en même temps complèxe de le maitriser.

C'est un langage interprété, c'est-à-dire qu'il est exécuté par un interpréteur (ou moteur) JavaScript, qui est un programme qui lit et exécute le code JavaScript. Les navigateurs web modernes intègrent un moteur JavaScript pour exécuter les scripts JavaScript des pages web.

On dit que Javascript est un langage de script, car il est conçu pour être utilisé comme langage de script pour les pages web. Il est généralement exécuté dans le navigateur web, mais il peut également être exécuté côté serveur avec des technologies comme Node.js (mais ça sera le sujet d'un autre cours).

## L'histoire de JavaScript :

Le créateur de Javascript est Brendan Eich, qui a créé le langage en 1995 pour le compte de Netscape Communications Corporation. Il a été standardisé sous le nom de JavaScript par Ecma International en 1997. Il a été conçu pour être un langage de script simple et léger, qui permet d'ajouter des fonctionnalités dynamiques aux pages web. Il a été conçu en seulement 10 jours, et il a été initialement appelé Mocha, puis LiveScript, avant d'être renommé JavaScript pour des raisons marketing.

## EcmaScript, c'est quoi ?

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

| Nom de l'édition | Année de publication | Evènements                                                                                                      |
| ---------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| ES1              | 1997                 | Premiers standards                                                                                              |
| ES2              | 1998                 | Corrections                                                                                                     |
| ES3              | 1999                 | Améliorations (String, Error, Number)                                                                           |
| ES4              | Abandonnée           | Aucun accord entre les membres                                                                                  |
| ES5              | 2009                 | Support natif du format JSON                                                                                    |
| ES6              | 2015                 | Nombreuses évolutions qui font du JS un langage moderne                                                         |
| ES7              | 2016                 | Ajout de Array.includes()                                                                                       |
| ES8              | 2017                 | Ajout de Object.values() et Object.entries()<br/>Ajout de String.padStart() et String.padEnd()                  |
| ES9              | 2018                 | Améliorations des performances du moteur JS                                                                     |
| ES10             | 2019                 | Ajout de Array.flat()<br/>Ajout de Function.toString()                                                          |
| ES11             | 2020                 | Ajout du type BigInt                                                                                            |
| ES12             | 2021                 | Ajout de l'opérateur Nullish `??=`, And Assignment `&&=`, Or Assignment `\|\|=`                                 |
| ES13             | 2022                 | Await operator at the top-level -> en dehors d'une fonction<br/>Ajout de la méthode .at(x) aux types indéxables |
| ESNext           | A venir              | Nom générique de la future version                                                                              |

## C'est quoi, le runtime ?

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

## Rôle de JavaScript dans le développement web

- Manipulation du Document Object Model (DOM) pour modifier les éléments HTML et CSS.
- Validation des formulaires et collecte d'informations utilisateur.
- Création d'animations et d'effets visuels.
- Communication avec des serveurs pour récupérer ou envoyer des données (Ajax, Fetch API, etc.).
- Développement d'applications web en temps réel et d'applications mobiles avec des frameworks tels que React, Angular et Vue.js.

## Installation et configuration de l'environnement de développement.

Ce qu'il vous faut pour développer en JavaScript :

- Un navigateurs web moderne supportant les dernières fonctionnalités de JavaScript. On recommande d'utiliser Google Chrome ou Mozilla Firefox.
- Un éditeur de texte pour la programmation : Visual Studio Code, WebStorm ou autre. On recommande d'utiliser Visual Studio Code.
- En théorie, JavaScript est activé sur votre navigateur par défaut. Si ce n'est pas le cas, vous pouvez l'activer dans les paramètres du navigateur.
- La console du navigateur : c'est outil nécessaire pour tester des scripts JavaScript et déboguer le code (F12 ou Ctrl+Shift+I pour ouvrir la console dans la plupart des navigateurs).
- En bonus, des extensions pour le navigateur : l'extension Web Developer pour Firefox, ou l'extension Web Developer Tools pour Chrome.
- En bonus, des extensions pour VS Code : Live Server, Live Share, Prettier, ESLint, etc.

## D'accord, mais où est-ce que l'on fait du JS ?

Il y a plusieurs façons de faire du JavaScript :

- Dans un fichier HTML, avec la balise `<script>` : c'est la façon la plus simple de faire du JavaScript, mais elle n'est pas recommandée, car elle mélange le code HTML et le code JavaScript.

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
```

- Dans un fichier JavaScript externe, que l'on importe dans le fichier HTML avec la balise `<script>` : c'est la façon la plus courante de faire du JavaScript. On écrit le code JavaScript dans un fichier externe, et on l'importe dans le fichier HTML avec la balise `<script>`.
  > On peut importer plusieurs fichiers JavaScript dans un fichier HTML, mais <strong>il faut faire attention à l'ordre d'importation des fichiers<strong>, car le code JavaScript est exécuté dans l'ordre d'importation des fichiers. Si vous utiliser des fonctions définies dans un fichier JavaScript, il faut importer ce fichier avant le fichier qui utilise ces fonctions.

```html
<!-- index.html -->
<html>
  <head>
    <title>Introduction à JavaScript</title>
  </head>
  <body>
    <h1>Hello, JavaScript!</h1>
    <script src="script.js"></script>
  </body>
</html>
```

```js
// script.js
console.log("Hello, world!");
```

Dans cet exemple, le fichier javascript est importé à la fin du body, mais on peut aussi l'importer dans le head. Dans ce cas, il faut utiliser l'attribut `defer` pour que le script soit exécuté après le chargement de la page.

Si votre script agit sur le contenu HTML du site (ce qui est souvent le cas), c'est important que le contenu du site soit chargé avant que le script ne soit exécuté. C'est pour cela que l'on importe souvent les scripts à la fin du body ou bien on utilise l'attribut `defer`.

```html
<!-- index.html -->
<html>
  <head>
    <title>Introduction à JavaScript</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Hello, JavaScript!</h1>
  </body>
</html>
```

- On peut éxécuter du script JavaScript dans la console du navigateur : c'est utile pour tester des scripts JavaScript et déboguer le code. On peut aussi utiliser la console pour exécuter des commandes JavaScript directement dans le navigateur.

![Exemple de javascript dans la console](/javascript/cours/javascript-console.png)
