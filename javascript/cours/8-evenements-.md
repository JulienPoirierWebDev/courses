# La gestion des événements en JavaScript

En ajoutant des gestionnaires d'événements à une page Web, on peut faire en sorte que le code JavaScript s'exécute en réponse à des actions de l'utilisateur, comme le clic sur un bouton ou le chargement de la page.

C'est là que JavaScript devient vraiment intéressant, car on peut créer des pages Web interactives et dynamiques.

Et en plus, c'est très facile à faire et très concrêt !

## Introduction aux événements

- Les événements sont des actions qui se produisent lors de l'interaction avec la page Web, par exemple : clics de souris, appuis sur des touches, chargement de la page, etc.

- JavaScript peut être utilisé pour détecter ces événements et exécuter du code en réponse à ces actions.

### Ajout d'un gestionnaire d'événements

- Syntaxe pour ajouter un gestionnaire d'événements à un élément HTML :

```js
<element evenement="nomDeLaFonction()">
```

- Exemple d'utilisation d'un gestionnaire d'événements pour un bouton :

```js
<button onclick="alert('Bouton cliqué !')">Cliquez ici</button>
```

### Utilisation de la méthode `addEventListener`

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

### Exemple pratique

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
