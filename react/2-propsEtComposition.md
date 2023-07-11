# Les props et la composition de composants

Pour l'instant, nous avons créer des composants `hard-coded`, c'est-à-dire que les composants affichent toujours la même chose. Nous allons maintenant voir comment rendre nos composants réutilisables.Les

L'un des grands avantages de React, c'est de permettre d'avoir des composants réutilisables et combinables, réduisant fortement le code à écrire et à maintenir, si l'on est bien organisé.

## Les props

Les composants React peuvent recevoir des données en entrée, appelées `props` (pour _properties_). Les props sont passées au composant lors de son appel, comme des attributs HTML.

```jsx
const App = () => {
  return (
    <div>
      <Title text="Titre" />
      <Paragraph text="Paragraphe" />
    </div>
  );
};
```

Les props sont accessibles dans le composant via un objet `props` passé en paramètre de la fonction composant.

```jsx
const Header2 = (props) => {
  return <h2>{props.text}</h2>;
};

const Paragraph = (props) => {
  return <p>{props.text}</p>;
};
```

C'est un peu verbeux ainsi, il y a le mot `props` partout. On peut utiliser la décomposition pour extraire les props dans des variables.

```jsx
const Header2 = ({ text }) => {
  return <h1>{text}</h1>;
};

const Paragraph = ({ text }) => {
  return <p>{text}</p>;
};
```

De cette manière, je n'ai pas a créer un composant par titre mais je peux réutiliser le même composant pour afficher des titres différents.

```jsx
const App = () => {
  return (
    <div>
      <section>
        <Header2 text="La meilleur manière d'apprendre ReactJS" />
        <Paragraph text="Vous avez vu le nombre de tuto ReactJS et vous vous demandez pourquoi les gens veulent apprendre ça ? On va voir cela ensemble !" />
      </section>
      <section>
        <Header2 text="Et une fois que je sais faire du ReactJS ?" />
        <Paragraph text="Apprendre ReactJS ,n'est qu'une porte d'entrée dans le monde fabuleux de ReactJS. Vous pouvez ensuite utiliser Typescript avec React, mais aussi apprendre a utiliser NextJS, un framework basé sur React et qui permet de faire du ServerSideRendering, entre autres choses !" />
      </section>
    </div>
  );
};
```

## Les enfants

Les composants React peuvent aussi recevoir des enfants. Les enfants sont les composants qui sont à l'intérieur du composant. Ils sont accessibles via la propriété `children` de l'objet `props`.

Un des cas d'utilisation des enfants est de créer des composants de mise en page. Par exemple, un composant `Card` qui affiche un titre et un contenu.

```jsx
const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>{title}</h2>
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
};
```

On peut ensuite utiliser ce composant de la manière suivante :

```jsx
const App = () => {
  return (
    <div>
      <Card title="Titre de la carte">
        <p>Ma carte possède un enfant paragraphe</p>
        <a href="https://www.joshwcomeau.com/">
          Voici un site qui parle de React !
        </a>
      </Card>
    </div>
  );
};
```

Ainsi, tout ce qui est passé entre les balises ouvrantes et fermantes du composant `Card` sera accessible via la propriété `children` du composant et pourra être affiché.

C'est très puissant car c'est ce qui permet de créer des composants flexibles. Cela permet de passer des composants React en tant qu'enfants, et donc de créer des composants qui ne sont pas limités à un contenu textuel.

## Exercice 4

Pour l'exercice 4, nous allons créer une application React.

ReactJS et son écosystème sont très riches, et il existe de nombreux outils pour créer une application React.

Dans la documentation officielle, il est recommandé d'utiliser un framework comme [NextJS](https://nextjs.org/) ou [Gatsby](https://www.gatsbyjs.com/). Ces frameworks permettent de créer des applications React plus facilement, en ajoutant des fonctionnalités comme le Server Side Rendering, le Static Site Generation, le routing, etc.

Nous n'allons pas utiliser ces frameworks car nous voulons apprendre a maitriser ReactJS, et non pas un framework.

Auparavant, il était conseillé d'utiliser [Create React App](https://create-react-app.dev/) pour créer une application React. C'est un outil qui permet de créer une application React avec un minimum de configuration.

Cet outil a été déprécié car trop lourd et trop complexe. Il est maintenant recommandé d'utiliser [Vite](https://vitejs.dev/), un outil qui permet de créer une application React avec un minimum de configuration, mais qui est beaucoup plus léger et rapide que Create React App.

Pour créer une application React avec Vite, il faut utiliser la commande suivante :

```bash
npm create vite@latest
```

Nous allons appelé notre application `exo4` et choisir `react` comme framework, en utilisant juste le JavaScript.

A la fin de l'installation, une série de commande s'affiche. Nous allons les éxécuter pour lancer notre application.

```bash
  cd exo4
  npm install
  npm run dev
```

Nous pouvons ouvrir le serveur de développement a l'adresse indiqué dans la console, et nous devrions voir une page d'accueil.

Une arborescence de fichier a été créée.

- Le dossier `src` contient le code source de notre application. Rappelons que ReactJS doit transpiler notre code pour le rendre compatible avec les navigateurs. Le code source est donc dans le dossier `src`, et le code transpilé est dans le dossier `dist` (qui n'existe pas encore car il faut lancer le scrit `npm run build`).
- Dans `main.jsx`, nous avons le point d'entrée de notre application. C'est ici que nous allons importer notre composant `App` et l'afficher dans le DOM. On reconnait la méthode `ReactDOM.createRoot` a laquelle est chaînée la méthode `render`.
  On remarque qu'un fichier `css` est importé. C'est un fichier `css` global qui sera appliqué a toute l'application. Nous pouvons le supprimer lui-même ou son contenu.
- Dans `App.jsx`, nous avons le composant `App` qui est affiché dans le DOM. Nous allons modifier ce composant pour afficher notre application. C'est ici que allons importer nos composants principaux.
- Un dossier `assets` a été créé pour stocker les images, les polices, etc. Nous pouvons le garder mais le vider.
- Il manque un dossier `components` pour stocker nos composants. Nous allons le créer.

Une fois ce nettoyage effectué, nous pouvons commencer a créer notre application.
