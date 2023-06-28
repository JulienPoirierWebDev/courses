# Manipulation du DOM avec JavaScript

Le DOM (Document Object Model) est une interface de programmation qui permet de manipuler le contenu d'une page web avec JavaScript.

Concrètement, le DOM est une représentation de la page web sous forme d'arbre. Chaque élément de la page est un nœud de l'arbre. Les nœuds peuvent être des éléments HTML, des attributs, du texte, etc.

Avec JS, on peut récupérer les nœuds de l'arbre, qui se comporte alors comme un objet. On peut ensuite modifier le contenu de la page en modifiant les propriétés de ces objets.

## Sélection d'éléments

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

- Sélection d'un élément par son sélecteur CSS :

> Personnellement, je préfère utiliser `querySelector` et `querySelectorAll` pour sélectionner des éléments, car ils permettent d'utiliser les sélecteurs CSS, qui sont plus pratiques que les autres méthodes.

- Avec les selecteurs CSS, on peut sélectionner des éléments par leur ID, leur classe, leur nom de balise, leur attribut, etc. C'est un outil très puissant et très pratique.

```js
let element = document.querySelector("selecteurCSS");
```

## Modification de contenu

Une fois que l'on a sélectionné un élément, on peut modifier son contenu en modifiant les propriétés de l'objet.

Une petite liste des propriétés les plus utiles :

- `textContent` : Contenu textuel de l'élément
- `innerHTML` : Contenu HTML de l'élément
- `id` : ID de l'élément
- `className` : Classes de l'élément
- `style` : Style CSS de l'élément
- `value` : Valeur de l'élément (pour les inputs, les textarea, etc.)
- `src` : Source de l'élément (pour les images, les vidéos, etc.)
- `href` : URL de l'élément (pour les liens)
- `alt` : Texte alternatif de l'élément (pour les images)

Une fois que l'on a sélectionné un élément, on peut modifier son contenu en modifiant les propriétés de l'objet.

```js
// Changer la couleur, le contenu et la taille de la police d'un élément :

element.style.color = "red";
element.textContent = "Nouveau contenu";
element.style.fontSize = "20px";
```

### Exercices

- Créer un programme qui permet à l'utilisateur de modifier la couleur de fond du body en cliquant sur un bouton. Bonus : ajouter un bouton "reset" qui remet la couleur de fond à sa valeur initiale. Bonus 2 : stocker les couleurs dans un tableau et changer la couleur de fond à chaque clic, en parcourant le tableau. Bonus 3 : ajouter un input type color qui permet de choisir la couleur de fond directement.

## Modifier un attribut

Rappel : un attribut est une information supplémentaire qui peut être ajoutée à un élément HTML. Il est composé d'un nom et d'une valeur, et est toujours spécifié dans la balise de l'élément.

Par exemple, la balise `<a>` peut avoir un attribut `href` qui contient l'URL de la page vers laquelle le lien pointe.

On a vu dans la partie précédente que l'on peut modifier les attributs d'un élément en modifiant les propriétés de l'objet.

Mais il existe une méthode plus simple pour modifier les attributs d'un élément :

```js
element.setAttribute("attribut", "nouvelleValeur");
```

### Exercices

- Donner la valeur "color: blue; font-size: 18px;" à l'attribut style d'un élément.
- Modifier la source d'une image.
- Modifier l'URL d'un lien.

## Ajout et suppression d'éléments

Avec le DOM, on peut modifier des élements existants, mais on peut aussi ajouter et supprimer des éléments.

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

- Créer une page HTML contenant :

  - Une balise header : un menu.
  - Une balise main : Un titre principal, un paragraphe de présentation, un lien vers votre github, une liste de compétence.
  - Une balise footer : Un lien vers votre linkedin, un lien vers votre twitter, un lien vers votre instagram.

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
