# React

## L'histoire de React

React est une librairie !

En mai 2011, Jordan Walke, un ingénieur logiciel chez Facebook, a créé une première version de React. Il l'a créé pour résoudre un problème de performance sur le site Facebook. En effet, le site était devenu très lent à cause de la complexité de l'interface. C'est pourquoi, il a créé React, une librairie JavaScript qui permet de créer des interfaces utilisateurs complexes et dynamiques. (L'objectif était de remplacer blitz.js, un framework JavaScript qui était utilisé par Facebook à l'époque.)

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
