# Les bases de React

## L'histoire de React

React est une librairie !

En mai 2011, Jordan Walke, un ingénieur logiciel chez Facebook, a créé une première version de React. Il l'a créé pour résoudre un problème de performance sur le site Facebook. En effet, le site était devenu très lent à cause de la complexité de l'interface. C'est pourquoi, il a créé React, une librairie JavaScript qui permet de créer des interfaces utilisateurs complexes et dynamiques. (L'objectif était de remplacer bolt.js, un framework JavaScript qui était utilisé par Facebook à l'époque.)

Ce qui change :

- Par rapport a Angular, React permet de ne pas séparer l'HTML, le CSS et le JS. Angular a une approche plus classique, il sépare le HTML, le CSS et le JS. React a une approche plus moderne, il permet de tout mettre dans le JS. (C'est ce qu'on appelle le JSX.).
  => React a enlevé le MVC (Model View Controller) et permet une approche par composant où lorsque la donnée change, on supprime tout et on recrée tout. (C'est ce qu'on appelle le Virtual DOM.)

En 2012, React est devenu open source. En 2013, React est devenu populaire et a été utilisé par Instagram.
Lors de la JSConf de 2013, React est présenté mais il n'est pas bien reçu. Pourtant, Instagram a continué à utiliser React et a même créé React Native. En 2014, React est devenu populaire et a été utilisé par Netflix.

https://youtu.be/x7cQ3mrcKaY?t=1121

https://www.youtube.com/watch?v=8pDqJVdNa44&ab_channel=Honeypot

https://npmtrends.com/angular-vs-react-vs-vue

https://careerkarma.com/blog/companies-that-use-react/

En 2015, React Native est crée.

En 2019, apparition des hooks ! Cela a généré un gros pic.

Le principal problème que React a résolu est la gestion des données : en détruisant et recréant tout, React permet de gérer les données plus facilement. Avec React, ce n'est pas un problème si les données changent constamment.

React, c'est principalement le V d'un dispositif MVC. Avec React, on peut créer des interfaces utilisateurs complexes et dynamiques. Mais avec Next.js, on peut créer des applications complètes, reprenant la totalité du MVC.

Le deuxième problème que React a résolu est la gestion des composants. React permet de créer des composants réutilisables, comprenant HTML, CSS et JS.

Le troisième problème que React a résolu est la gestion des événements. React permet de gérer les événements de manière simple et efficace.

## Les fondamentaux.

### Le virtual DOM

```js
const data = {
  username: "John",
  content: "Ceci est un article, avec du contenu.",
  titre: "Super titre",
};
```

```html
<body>
  <div id="main">
    <p>John</p>
    <div>
      <h1>Super titre</h1>
      <p>Ceci est un article, avec du contenu.</p>
    </div>
  </div>
  <footer>
    <p>Ceci est mon footer</p>
  </footer>
</body>
```

Si on fait plusieurs changements dans le DOM, cela va être très lent. Déja car au niveau du code, il va falloir selectionner les nodes, puis les modifier. Ensuite, il va falloir modifier le DOM.
Et même si l'on fait un "changement" en mettant la même donnée, cela va prendre du temps car il va falloir comparer les deux données.

Un render dans React, c'est un changement de données. Ce n'est pas un changement de DOM.

React a résolu ce problème en créant un Virtual DOM. Le Virtual DOM est une copie du DOM. Lorsque l'on fait un changement de données, React va comparer le Virtual DOM et le DOM. Si il y a une différence, React va modifier le DOM. Le virtual DOM est une copie "mentale" du DOM.

Le processus de comparaison entre le Virtual DOM et le DOM s'appelle le diffing.

Le virtual DOM demande au DOM de changer seulement les nodes qui ont changé.

Un render chez React, c'est donc un appel de la fonction qui permet de vérifier si il y a eu un changement de données. Si il y a eu un changement de données, React va modifier le DOM. Cela ne veut donc pas dire qu'a chaque render, le DOM est modifié, mais que potentiellement, le DOM peut être modifié.

Ensuite, React ne va pas modifier le DOM a chaque fois qu'il y a un petit changement, il va attendre d'avoir plusieurs changements pour modifier le DOM. C'est ce qu'on appelle le batching.
Lorsqu'un render génère des changements, on dit que React commit les changements.

### React sans JSX

Nous allons utiliser les exercices de ce repo :
//// TODO : A FAIRE

// Ajouter l'exemple du refresh d'un compteur, sans react puis avec react.

React permet de créer des composants réutilisables, comprenant HTML, CSS et JS. Il permet aussi de gérer les événements de manière simple et efficace. Enfin, il permet de gérer les données de manière simple et efficace.

Avant de faire du React, on va créer un "composant" en JS. Ce composant va être une fonction qui va retourner du HTML. On va ensuite l'ajouter dans le DOM.

#### Exercice 1

Pour créer un élement en js, on utilise la méthode `createElement` de `document`.

Ensuite on lui ajoute du contenu avec `innerHTML` (ou d'autres méthodes, selon).

Enfin, on l'ajoute dans le DOM avec `appendChild`.

```js
const element = document.createElement("div");
element.innerHTML = "Hello world !";
document.body.appendChild(element);
```

Si l'on veut créer un évènement, on utilise la méthode `addEventListener`.

```js
const element = document.createElement("div");
element.innerHTML = "Hello world !";
element.addEventListener("click", () => {
  console.log("click");
});
document.body.appendChild(element);
```

On peut mettre ce code dans une fonction, pour le rendre réutilisable.

```js
const createDiv = () => {
  const element = document.createElement("div");
  element.innerHTML = "Hello world !";
  element.addEventListener("click", () => {
    console.log("click");
  });
  document.body.appendChild(element);
};

createDiv();
```

Et l'on peut faire cela pour chaque élément que l'on veut créer. Mais il est clair que plus on avance, plus cela va être compliqué de gérer les évènements, les données, etc.
Le code va être long, compliqué et difficile à maintenir. Il y a un risque de code spaghetti.

#### Exercice 2

On va maintenant utiliser React pour créer un composant réutilisable.

Par soucis de simplicité, on va utiliser un `CDN` pour React.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>First React App</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="index.js"></script>
  </body>
</html>
```

<strong>Dans la vraie vie, il ne faut pas faire cela</strong> si vous commencez un projet 100% ReactJS !
Sauf si vous souhaitez faire un prototype, un test, etc.
Ou éventuellement si vous voulez ajouter React à un site existant.

Pour cela, on va utiliser la méthode `createElement` de `React`.

```js
const element = React.createElement("div", null, "Hello world !");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(element);
```

On remarque que la méthode `createElement` de `React` prend trois paramètres.

- Le premier est le type de l'élément : on met en guillemets le nom de la balise HTML que l'on veut créer.
- Le deuxième contient les props : on peut mettre `null` si il n'y a pas de props.
  Les props prennent la forme comme d'un objet et contiennent toutes les props possible, dont les attributs du TAG HTML créer, comme `className` ou `style`, des évènements, etc.
- Le troisième et suivant sont les enfants de l'élement HTML.

Ensuite on remarque qu'il faut sélectionner la div avec l'ID "root", indiquer avec la méthode `createRoot()`, prenant comme paramètre la fameuse div#root qu'elle est la racine de notre application.

Et ensuite utiliser sur l'instance de notre racine la méthode `render` pour envoyer dans le DOM les élements passés en paramètre !

Voici un autre exemple d'un paragraphe avec la classe article-paragraph

```js
const myParagraph = React.createElement(
  "p",
  { className: "article-paragraph" },
  "Je suis un paragraphe"
);

root.render(myParagraph); // on réutilise la racine déja créer !
```

Je vous propose de faire l'exercice 2 :) !

## React avec JSX

On est d'accord, même si c'est plus simple avec React et ReactDOM, l'utilisation de la méthode `createElement` est très lourde et pas très lisible.

Le jsx est une syntaxe qui permet de créer des élements React de manière plus simple et plus lisible. A première vue, on dirait du HTML, mais en réalité, c'est du JavaScript.

Voici un exemple de `functionnal component` (ou composant fonctionnel en Français) React sans JSX :

```js
const element = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Hello world !")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(element());
```

Et voici le même composant React avec JSX :

```js
const Element = () => {
  return (
    <div className="container">
      <h1>Hello world !</h1>
    </div>
  );
};
```

> Nous ne verrons pas dans ce cours les `class component` (ou composant de classe en Français) React. Ils vous seront utiles si vous intervenez sur des vieux projets React. Mais si vous commencez un projet React, il faut utiliser les `functionnal component`.

Comment est ce possible ? C'est possible grâce à Babel. Babel est un transpileur qui permet de transformer du code en un autre code. Dans notre cas, Babel va transformer le JSX en JavaScript.

> Nous n'allons pas voir dans ce cours les bases de Babel, mais si vous voulez en savoir plus, je vous invite à regarder ce cours : https://www.youtube.com/watch?v=8pDqJVdNa44&ab_channel=Honeypot
>
> > Babel peut transformer du JSX en JavaScript, mais il peut aussi transformer du JavaScript ES2022 en JavaScript ES2015. Cela permet de rendre le code compatible avec les anciens navigateurs.

> > En vrai, il faudrait utiliser un bundler comme Webpack pour utiliser Babel, mais pour l'instant, nous allons utiliser Babel directement dans le navigateur.

Je vous propose de faire l'exercice 3 :) !

## Conclusion de cette partie

Vous connaissez maintenant les bases de React. Vous savez créer un composant React avec JSX et le mettre dans le DOM.

Mais il reste de nombreuses choses à voir. Nous allons voir juste après comment utiliser des props et des événements avec React, ainsi que comment faire de la composition de composants.
