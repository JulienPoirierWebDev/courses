# Utilisation de la bibliothèque jQuery

Jquery est une bibliothèque JavaScript qui permet de simplifier l'écriture de code JavaScript. Elle est encore très utilisée dans les anciens projets, mais elle est de moins en moins utilisée dans les nouveaux projets, car elle est devenue obsolète avec l'arrivée de nouvelles fonctionnalités dans JavaScript.

Elle reste cependant très utile pour comprendre comment fonctionne JavaScript, et pour comprendre les anciens projets qui l'utilisent encore.

## Installation de jQuery

Pour utiliser jQuery, il faut d'abord télécharger la bibliothèque jQuery et l'ajouter à votre projet.

Vous pouvez télécharger jQuery sur le site officiel : [https://jquery.com/download/](https://jquery.com/download/)

Vous pouvez aussi utiliser un CDN (Content Delivery Network) pour charger jQuery depuis un serveur externe :

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
```

## Syntaxe de base

La syntaxe de base de jQuery est la suivante :

```js
$("selecteur").methode();
```

- `$` est un alias pour la fonction `jQuery()`, qui est la fonction principale de jQuery. C'est la porte d'entrée de jQuery, qui permet de sélectionner des éléments HTML et de les manipuler.

- `selecteur` est un sélecteur CSS qui permet de sélectionner un ou plusieurs éléments HTML.

- `methode()` est une méthode de jQuery qui permet de manipuler les éléments HTML sélectionnés.

## Exemple pratique

- Créer un programme qui change la couleur du texte d'un paragraphe lorsqu'on clique sur un bouton :

```js
$("#monBouton").click(function () {
  $("#monParagraphe").css("color", "red");
});
```

L'équivalent en JS serait :

```js
document.getElementById("monBouton").addEventListener("click", function () {
  document.getElementById("monParagraphe").style.color = "red";
});
```

## Sélection d'éléments

La fonction `jQuery()` permet de sélectionner des éléments HTML en utilisant un sélecteur CSS.

- Sélectionner un élément HTML :

```js
$("p");
```

- Sélectionner plusieurs éléments HTML :

```js
$("p, div, span");
```

- Sélectionner un élément HTML avec un attribut :

```js
$("p[title]");
```

- Sélectionner un élément HTML avec un attribut et une valeur :

```js
$("p[title='monTitre']");
```

## Manipulation d'éléments

Une fois que vous avez sélectionné un ou plusieurs éléments HTML, vous pouvez les manipuler en utilisant les méthodes de jQuery.

- Modifier le contenu HTML d'un élément :

```js
$("p").html("Nouveau contenu");
```

- Modifier le contenu texte d'un élément :

```js
$("p").text("Nouveau contenu");
```

## Faire des requêtes AJAX

jQuery permet de faire des requêtes AJAX en utilisant la méthode `$.ajax()`.

- Syntaxe de base :

```js
$.ajax({
  url: "url",
  method: "GET",
  dataType: "json",
  success: function (data) {
    // Traiter les données reçues
  },
  error: function (error) {
    // Gérer l'erreur
  },
});
```

C'est l'une des méthodes qui était utilisée avant l'arrivée de Fetch API et qui rend jquery obsolète.

## Ecouteurs d'événements

jQuery permet d'ajouter des écouteurs d'événements à des éléments HTML en utilisant la méthode `on()`.

- Syntaxe de base :

```js
$("selecteur").on("evenement", function () {
  // Code à exécuter
});
```

- Exemple d'utilisation :

```js
$("#monBouton").on("click", function () {
  alert("Bouton cliqué !");
});
```

## Animation d'éléments

jQuery permet d'animer des éléments HTML en utilisant la méthode `animate()`.

- Syntaxe de base :

```js
$("selecteur").animate(
  {
    propriete: valeur,
  },
  duree,
  function () {
    // Code à exécuter à la fin de l'animation
  }
);
```

- Exemple d'utilisation avec une transition de page

  ```js
  $("#monBouton").on("click", function () {
    $("#monParagraphe").animate(
      {
        opacity: 0,
      },
      1000,
      function () {
        window.location.href = "https://google.com";
      }
    );
  });
  ```

## Changer les classes CSS

jQuery permet de changer les classes CSS d'un élément HTML en utilisant les méthodes `addClass()`, `removeClass()` et `toggleClass()`.

- Ajouter une classe CSS :

```js
$("selecteur").addClass("maClasse");
```

- Supprimer une classe CSS :

```js
$("selecteur").removeClass("maClasse");
```

- Ajouter ou supprimer une classe CSS :

```js
$("selecteur").toggleClass("maClasse");
```

- Fonctions de manipulation des tableaux :

  - $.each() : Parcourt les éléments d'un tableau ou d'un objet.

```js
$.each([1, 2, 3], function (index, value) {
  console.log(index, value);
});
```

- $.map() : Transforme les éléments d'un tableau en un autre tableau.

```js
$.map([1, 2, 3], function (value, index) {
  return value * 2;
});
```

- $.grep() : Filtre les éléments d'un tableau en fonction d'une condition.

```js
$.grep([1, 2, 3], function (value, index) {
  return value > 1;
});
```

- Gestion des cookies :

  - $.cookie() : Lit, écrit et supprime les cookies du navigateur.

```js
$.cookie("cookieName", "cookieValue");
```

- Fonctions de validation de formulaires :

  - $.validate() : Valide les formulaires en appliquant des règles de validation personnalisées.

```js
$("#monFormulaire").validate({
  rules: {
    nom: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
  },
});
```

- $.serialize() : Encode les données d'un formulaire pour les envoyer via une requête AJAX.

```js
$("#monFormulaire").serialize();
```

- Manipulation des chaînes de caractères :

  - $.trim() : Supprime les espaces vides au début et à la fin d'une chaîne de caractères.

```js
$.trim("  Hello World  ");
```

- $.replace() : Remplace des parties spécifiques d'une chaîne de caractères.

```js
"Hello World".replace("World", "John");
```

- Fonctions de manipulation des attributs :

  - $.attr() : Récupère ou définit la valeur d'un attribut d'un élément HTML.

```js
$("a").attr("href");

$("a").attr("href", "https://google.com");
```

- $.removeAttr() : Supprime un attribut d'un élément HTML.

```js
$("a").removeAttr("href");
```

- Fonctions de manipulation des classes :

  - $.addClass() : Ajoute une ou plusieurs classes à un élément HTML.

```js
$("p").addClass("maClasse");
```

- $.removeClass() : Supprime une ou plusieurs classes d'un élément HTML.

```js
$("p").removeClass("maClasse");
```

- $.toggleClass() : Ajoute ou supprime une classe d'un élément HTML en fonction de sa présence.

```js
$("p").toggleClass("maClasse");
```

- Fonctions de manipulation des événements :

  - $.on() : Attache un gestionnaire d'événements à un élément HTML.

```js
$("p").on("click", function () {
  alert("Paragraphe cliqué !");
});
```

- $.off() : Supprime un ou plusieurs gestionnaires d'événements d'un élément HTML.

```js
$("p").off("click");
```

- Fonctions de manipulation du style CSS :

  - $.css() : Récupère ou définit les propriétés CSS d'un élément HTML.

```js
$("p").css("color");

$("p").css("color", "red");
```

- $.addClass() et $.removeClass() (mentionnées précédemment) peuvent également être utilisées pour manipuler les classes liées au style CSS

```js
$("p").addClass("maClasse");
```

- $.toggleClass() peut également être utilisée pour manipuler les classes liées au style CSS

```js
$("p").toggleClass("maClasse");
```

- Fonction de manipulation des événements :

  - $.on() : Attache un gestionnaire d'événements à un élément HTML.

```js
$("p").on("click", function () {
  alert("Paragraphe cliqué !");
});
```

- $.off() : Supprime un ou plusieurs gestionnaires d'événements d'un élément HTML.

```js
$("p").off("click");
```

- Fonctions de manipulation du style CSS :

  - $.css() : Récupère ou définit les propriétés CSS d'un élément HTML.

```js
$("p").css("color");

$("p").css("color", "red");
```

## Jquery UI

Jquery UI est une extension de Jquery qui permet de créer des interfaces graphiques.

- Installation de Jquery UI :

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css"
  integrity="sha512-ELV+xyi8IhEApPS/pSj66+Jiw+sOT1Mqkzlh8ExXihe4zfqbWkxPRi8wptXIO9g73FSlhmquFlUOuMSoXz5IRw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/theme.min.css"
  integrity="sha512-hbs/7O+vqWZS49DulqH1n2lVtu63t3c3MTAn0oYMINS5aT8eIAbJGDXgLt6IxDHcWyzVTgf9XyzZ9iWyVQ7mCQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

- Liste des fonctionnalités de Jquery UI:
  https://jqueryui.com/demos/

On va voir l'exemple du datepicker dans les exercices.
