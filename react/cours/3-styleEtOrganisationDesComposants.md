# Gérer le style et l'arborecence des composants

ReactJS permet de faire beaucoup de choses, il est très flexible. Cependant, il est important de garder une certaine cohérence dans le code. C'est pourquoi il est important de bien organiser son code et de bien gérer le style des composants.

## Gérer le style des composants

### Utiliser des classes CSS

On connait tous les classes CSS, elles permettent de styliser les éléments HTML. On peut les utiliser dans ReactJS, mais il y a quelques différences.

```js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mon titre</h1>
    </div>
  );
}

export default App;
```

Le mot-clé `class` est remplacé par `className`. C'est parce que `class` est un mot-clé réservé en JavaScript. On ne peut donc pas l'utiliser dans le code JSX.
C'est lors de la transpilation que `className` sera remplacé par `class`.

Ensuite, il faut importer le fichier CSS dans le fichier JS. On peut le faire avec `import './App.css';`. Il faut bien sûr que le fichier CSS soit dans le même dossier que le fichier JS.

> Attention, ce n'est pas parce que le fichier CSS est importé dans un composant qu'il n'agira que sur ce composant. Le fichier CSS est importé dans un composant mais il est appliqué à toute l'application.

### Utiliser des modules CSS

Les modules CSS permettent de créer des classes CSS qui ne seront appliquées qu'à un seul composant. C'est très utile pour éviter les conflits de noms de classes.

C'est assez cohérent avec la philosophie de ReactJS. En effet, on peut créer des composants qui ne seront utilisés qu'une seule fois. C'est la même chose avec les classes CSS.

Pour utiliser des modules CSS, il faut créer un fichier CSS avec l'extension `.module.css`. Par exemple, `App.module.css`. Ensuite, on peut créer des classes CSS dans ce fichier.

```css
.App {
  text-align: center;
}

.title {
  color: red;
}
```

Pour utiliser ces classes dans un composant, il faut importer le fichier CSS avec `import styles from './App.module.css';`. Ensuite, on peut utiliser les classes avec `className={styles.App}`.

```js
import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Mon titre</h1>
    </div>
  );
}

export default App;
```

> Attention, il faut bien utiliser `className={styles.App}` et non `className={styles.app}`. En effet, `styles.App` correspond à la classe `App` du fichier CSS. `styles.app` correspond à la classe `app` du fichier CSS. Or, il n'y a pas de classe `app` dans le fichier CSS.

> Avec les modules CSS, on n'a pas besoin d'utiliser une syntaxe particulière pour les classes CSS. On peut utiliser les classes CSS comme on le ferait normalement. La méthode BEM n'est alors pas nécessaire (mais vous pouvez l'utiliser si vous le souhaitez).

### Utiliser des variables CSS

Les variables CSS permettent de créer des variables qui peuvent être utilisées dans les fichiers CSS. C'est très utile pour éviter de répéter des valeurs.

Les variables CSS peuvent être utilisé n'importe où dans le code, vous pouvez en créer avec le selecteur `:root` si vous voulez qu'elles soient globales.

```css
:root {
  --primary-color: #61dafb;
  --secondary-color: #282c34;
}

.App {
  background-color: var(--secondary-color);
}

.title {
  color: var(--primary-color);
}
```

Mais vous pouvez aussi les créer dans un composant. Dans ce cas, elles ne seront utilisables que dans ce composant.

```css
.App {
  --primary-color: #61dafb;
  --secondary-color: #282c34;

  background-color: var(--secondary-color);
}

.title {
  color: var(--primary-color);
}
```

Dans cette situation, la couleur `--primary-color` ne sera utilisable que dans le composant `App` et la valeur par défaut sera `#61dafb`.

Vous pouvez modifier la valeur d'une variable CSS dans un composant. Dans ce cas, la nouvelle valeur sera utilisée dans le composant et dans tous les composants enfants.

```css
.App {
  --primary-color: #61dafb;
  --secondary-color: #282c34;

  background-color: var(--secondary-color);
}

.title {
  color: var(--primary-color);
}

.title:hover {
  --primary-color: #ff0000;
}
```

Dans cet exemple, la couleur `--primary-color` sera `#61dafb` par défaut. Mais si on passe la souris sur le titre, la couleur `--primary-color` sera `#ff0000` dans le composant `App` et dans tous les composants enfants.

Vous pouvez aussi modifier la valeur d'une variable CSS avec JavaScript. Dans ce cas, la nouvelle valeur sera utilisée dans tous les composants.

```js
function App() {
  document.documentElement.style.setProperty("--primary-color", "#ff0000");

  return (
    <div className="App">
      <h1>Mon titre</h1>
    </div>
  );
}
```

Dans cet exemple, la couleur `--primary-color` sera `#ff0000` dans tous les composants.

C'est très utile pour créer un thème sombre. Vous pouvez créer un composant `Theme` qui modifiera les variables CSS.

```js
function Theme() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--primary-color", "#282c34");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#61dafb"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#61dafb");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#282c34"
      );
    }
  }, [dark]);

  return (
    <div className="Theme">
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
```

Dans cet exemple, on a un composant `Theme` qui contient un bouton. Quand on clique sur le bouton, le thème change. Si le thème est sombre, les variables CSS seront modifiées.

### La library styled-components

La library styled-components permet de créer des composants avec du style. C'est une alternative aux modules CSS et aux variables CSS. Cela permet d'avoir un code plus propre et plus lisible.

Pour utiliser styled-components, il faut l'installer avec `npm install styled-components`. Ensuite, on peut créer un composant avec `styled.div``.

```js
import styled from "styled-components";

const App = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: red;
`;

function App() {
  return (
    <App>
      <Title>Mon titre</Title>
    </App>
  );
}

export default App;
```

L'avantage de styled-components est que le style est directement dans le composant. Cela permet de voir directement le style du composant. Cela permet aussi de ne pas avoir de conflits de noms de classes.

On peut aussi utiliser des variables CSS avec styled-components.

Et les changer avec JavaScript.

```js
import styled from "styled-components";

const App = styled.div`
  --primary-color: #61dafb;
  --secondary-color: #282c34;

  background-color: var(--secondary-color);
`;

const Title = styled.h1`
  color: var(--primary-color);
`;

function App() {
  return (
    <App>
      <Title>Mon titre</Title>
    </App>
  );
}

export default App;
```

On peut aussi utiliser des props dans les composants styled-components.

```js
import styled from "styled-components";

const App = styled.div`
  --primary-color: #61dafb;
  --secondary-color: #282c34;

  background-color: var(--secondary-color);
`;

const Title = styled.h1`
  color: ${(props) => (props.primary ? "var(--primary-color)" : "red")};
`;

function App() {
  return (
    <App>
      <Title primary>Mon titre</Title>
      <Title>Mon titre</Title>
    </App>
  );
}

export default App;
```

Avec styled-components, on peut ainsi créer des composants avec du style et sans logique. Cela permet de séparer la logique et le style.

On utilise ensuite ces composants dans d'autres composants.

```js
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? "var(--primary-color)" : "var(--secondary-color)"};
  color: ${(props) =>
    props.primary ? "var(--secondary-color)" : "var(--primary-color)"};
`;

const Task = styled.li`
  color: ${(props) =>
    props.done ? "var(--primary-color)" : "var(--secondary-color)"};
`;

const TaskList = styled.ul`
  list-style: none;
`;

function App() {
  return (
    <div className="App">
      <Button primary>Mon bouton</Button>
      <Button>Mon bouton</Button>
      <TaskList>
        <Task done>Faire la vaisselle</Task>
        <Task>Sortir les poubelles</Task>
      </TaskList>
    </div>
  );
}

export default App;
```

### La library `TailwindCSS`

La library `TailwindCSS` permet de créer des composants avec du style. C'est une alternative aux modules CSS et aux variables CSS. Cela permet d'avoir un code plus propre et plus lisible, dès lors que l'on a compris comment fonctionne `TailwindCSS`.

Pour utiliser `TailwindCSS`, il faut l'installer avec `npm install tailwindcss`.

Il faut ensuite créer un fichier `tailwind.config.js` à la racine du projet. Ce fichier permet de configurer `TailwindCSS`.

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Il faut ensuite créer un fichier `index.css` à la racine du projet. Ce fichier permet de configurer `TailwindCSS`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Il faut ensuite importer le fichier `index.css` dans le fichier `index.js`.

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Enfin, on peut utiliser la puissance de `TailwindCSS` dans les composants.

```js
import React from "react";

function App() {
  return (
    <div className="App">
      <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Mon bouton
      </button>
    </div>
  );
}

export default App;
```

L'avantage de `TailwindCSS` est que le style est directement dans le composant. Cela permet de voir directement le style du composant. On peut tout modifier rapidement.

Ce qui est inquiétant avec `TailwindCSS`, c'est que le nombre de classes CSS peut être très important. Cela peut rendre le code difficile à lire.

Ce sont des classes utilitaires, chaque classe correspond à une propriété CSS. Cela permet de créer des composants rapidement.

Relisons ensemble le code du bouton :

- La partie `py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md`
  - Cette partie correspond au style du composant `Button`. C'est le style par défaut, lorsque le bouton n'est pas survolé, ni cliqué.
- La partie `hover:bg-blue-700` correspond au style du composant `Button` lorsque le bouton est survolé.
- La partie `focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75` correspond au style du composant `Button` lorsque le bouton est cliqué.

On remarque donc que les préfixes `hover:` et `focus:` permettent de modifier le style du composant en fonction de l'état du composant.

Voyons ensemble quelques classes :

- `py-2` : padding-y de 2
- `px-4` : padding-x de 4
- `bg-blue-500` : background-color bleu de niveau 500
- `text-white` : couleur du texte blanche
- `font-semibold` : police de caractère semi-grasse
- `rounded-lg` : bordure arrondie
- `shadow-md` : ombre moyenne
- `hover:bg-blue-700` : background-color bleu de niveau 700 lorsque le bouton est survolé
- `focus:outline-none` : pas de contour `outline` lorsque le bouton est cliqué
- `focus:ring-2` : contour de 2px lorsque le bouton est cliqué

Les mauvais usages de `TailwindCSS` sont :

- Avoir des composants trop complexes, très longs et difficiles à lire. Les composants doivent être simples et courts, autrement `TailwindCSS` n'est pas adapté car il va ajouter de la complexité. Un composant long avec les classes `TailwindCSS` donnera l'impression de déborder, d'être lourd.
- Avoir des composants mals organisés. Si votre arborescence de composants est mal organisée, `TailwindCSS` ne vous aidera pas. Il faut d'abord organiser son code, puis utiliser `TailwindCSS`.

Les bons usages de `TailwindCSS` sont :

- Avoir des composants simples et courts. Les composants doivent être simples et courts, autrement `TailwindCSS` n'est pas adapté car il va ajouter de la complexité. Un composant simple avec les classes `TailwindCSS` donnera l'impression d'être léger, d'être aéré.
  Il n'y aura pas d'aller retour entre une feuille de style et le composant. Tout est dans le composant.
- Avoir des composants bien organisés. Si votre arborescence de composants est bien organisée, `TailwindCSS` vous aidera à créer des composants rapidement. Il faut d'abord organiser son code, puis utiliser `TailwindCSS`.

Comment faire des conditions avec `TailwindCSS` ?

```js
import React from "react";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className="App">
      <button
        class={`py-2 px-4 ${
          dark ? "bg-blue-500" : "bg-white"
        } text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        onClick={toggleTheme}
      >
        Mon bouton
      </button>
    </div>
  );
}

export default App;
```

On peut aussi utiliser une librairie donc clsx qui permet de gérer les classes CSS.

```js
import React, { useState } from "react";
import clsx from "clsx";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const buttonClasses = clsx(
    "py-2 px-4",
    dark ? "bg-blue-500" : "bg-white",
    "text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  );

  return (
    <div className="App">
      <button className={buttonClasses} onClick={toggleTheme}>
        Mon bouton
      </button>
    </div>
  );
}

export default App;
```

La librairie clsx permet de gérer les classes CSS. Elle permet de créer des classes CSS conditionnelles et liées à des variables ou des props.

> Les librairies clsx et TailwindCSS sont très utiles pour créer des composants rapidement. Toutefois, vous rendez votre code dépendant de ces librairies. Si vous voulez changer de librairie, vous devrez modifier tous vos composants. Il faut donc bien réfléchir avant d'utiliser ces librairies.
> TailwindCSS peut être complexe a utiliser pour faire des animations. Il est donc préférable d'utiliser une autre librairie pour faire des animations.

On peut aussi créer des classes avec `TailwindCSS`.

```js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button className="button">Mon bouton</button>
    </div>
  );
}

export default App;
```

```css
.button {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
```

Personnellement, je trouve que l'on perd un peu de coté pratique de `TailwindCSS` avec cette méthode. En effet, on doit a nouveau naviguer entre le fichier CSS et le composant. On perd donc l'avantage de `TailwindCSS` qui est de tout avoir dans le composant.
Toutefois, pour des composants très complexes, cela peut être utile.

Enfin, l'un des avantages de `TailwindCSS` est qu'il est parfait pour créer un `style system` (un système de style). C'est a dire un système de couleurs, de tailles, de polices, etc. Cela permet de créer un thème et de l'appliquer à toute l'application.

Pour cela, il faut modifier le fichier `tailwind.config.js`.

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
```

La documentation de `TailwindCSS` est très complète, vous pouvez la consulter pour plus d'informations : [TailwindDocs](https://tailwindcss.com/docs/configuration).

## Organiser les composants

Il y a différentes manières d'organiser les composants. Il n'y a pas de bonne ou de mauvaise manière, c'est à vous de choisir celle qui vous convient le mieux.

Le plus important, c'est la cohérence. Il faut que votre code soit cohérent. Si vous utilisez une manière d'organiser les composants, il faut l'utiliser partout. Et si vous travaillez a plusieurs, il faut que tout le monde utilise la même manière d'organiser les composants.

### Organiser les composants par fonctionnalité

La première manière d'organiser les composants est de les organiser par fonctionnalité. C'est la manière la plus simple et la plus intuitive.

Par exemple, si on a une application qui permet de gérer des tâches, on peut créer un dossier `Task` qui contiendra tous les composants liés aux tâches.

```

src/
  Task/
    Task.jsx
      TaskList.jsx
      TaskForm.jsx
      TaskItem.jsx
App.js

```

Pour plus de lisibilité, on peut aussi créer un dossier `components` qui contiendra tous les dossiers de composants fonctionnels ainsi qu'un dossier pour les composants partagés.

```

src/
  components/
    Task/
      Task.jsx
      TaskList.jsx
      TaskForm.jsx
      TaskItem.jsx
    Header/
      Header.jsx
      HeaderMenu.jsx
    Footer/
      Footer.jsx
    Shared/
      Button.jsx
      Title.jsx
  App.jsx

```

Enfin, on peut ajouter un dossier `pages` qui contiendra tous les composants de pages.

```

src/
  components/
    Task/
      Task.jsx
      TaskList.jsx
      TaskForm.jsx
      TaskItem.jsx
    Header/
      Header.jsx
      HeaderMenu.jsx
    Footer/
      Footer.jsx
    Shared/
      Button.jsx
      Title.jsx
    pages/
      HomePage.jsx
      TaskPage.jsx
  App.jsx

```

Cela permet d'avoir une logique basée sur les routes (chaque page correspond à une route) et sur les fonctionnalités (chaque dossier correspond à une fonctionnalité).

Le risque de cette approche est que le nombre de composants partagés soient très faible ou trop important. Dans les deux cas, c'est problématique car soit on a des composants non partagés qui devraient l'être, soit on a des composants partagés qui sont très nombreux, mélangés et difficiles à maintenir.

Il faut garder un équilibre entre les composants partagés et les composants non partagés.
Il ne faut pas changer le style des composants partagés sans prendre en compte les autres composants qui les utilisent.

### L'approche par `Atomic Design`

L'approche par `Atomic Design` est une approche qui permet de créer des composants réutilisables et maintenables. Elle est inspirée de la chimie et du tableau périoque des éléments.

L'idée est qu'un écosystème est composé d'organismes, qui sont composés de molécules, qui sont composées d'atomes.

Et que nous pouvons appliquer cette logique à notre code.

![Atomic Design](https://bradfrost.com/blog/post/atomic-web-design)

````

Il y a 5 niveaux dans l'approche par `Atomic Design` :

- Les atomes
- Les molécules
- Les organismes
- Les templates
- Les pages

#### Les atomes

Les atomes sont les plus petits éléments de l'application. Ce sont les éléments HTML de base. Par exemple, un titre, un bouton, un input, etc.

Ces éléments sont très simples et ne contiennent pas de logique. Ils peuvent être utilisés dans plusieurs composants. Ils sont donc très réutilisables.

Idéalement, un atome doit être composé d'un seul élément HTML. Par exemple, un titre doit être composé d'un seul élément `h1`, un bouton d'un seul élément `button`, etc.

Il peut contenir du style, que l'on peut modifier avec des props. Par exemple, on peut créer un composant `Title` qui contient un élément `h1` et qui a une couleur par défaut. Mais on peut aussi modifier la couleur avec une prop.

```js
function Title({ children, color }) {
  return <h1 style={{ color }}>{children}</h1>;
}
````

#### Les molécules

Les molécules sont des composants plus complexes. Ils sont composés d'atomes. Les molécules ne sont pas autonomes, elles ne peuvent pas être utilisées seules. Elles doivent être utilisées dans un organisme.

Elles peuvent contenir de la logique, mais elles ne doivent pas contenir de logique métier. Elles peuvent contenir de la logique d'affichage, mais pas de logique de récupération de données.

Par exemple, on peut créer une molécule `SearchBar` qui contient un champ de recherche et un bouton. Elle prend en props une fonction `onSubmit` qui sera appelée quand on clique sur le bouton.

```js
function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Rechercher</button>
    </form>
  );
}
```

De cette manière, on peut réutiliser la molécule `SearchBar` dans plusieurs composants. Par exemple, on peut l'utiliser dans un composant `Header` et dans un composant `HomePage`.
La logique de la molécule `SearchBar` est indépendante de la logique des composants `Header` et `HomePage`. La props `onSubmit` permet de faire le lien entre la molécule et l'organisme.

Dans certains cas spécifiques, de la logique de validation de données peut-être présente dans une molécule.

#### Les organismes

Les organismes sont des composants plus complexes. Ils sont composés d'atomes et de molécules. Ils peuvent être autonomes, ils peuvent être utilisés seuls.

Les organismes occupent une section de l'application. Par exemple, on peut créer un organisme `Header` qui contient un titre, un menu et une barre de recherche.

```js
function Header() {
  return (
    <header>
      <Title>Mon titre</Title>
      <HeaderMenu />
      <SearchBar />
    </header>
  );
}
```

De cette manière, on peut réutiliser l'organisme `Header` dans plusieurs templates. Par exemple, on peut l'utiliser dans une page `HomePage` et dans une page `TaskPage`.

Un autre exemple d'organisme serait un formulaire. Un formulaire est composé d'atomes et de molécules. Il peut être utilisé seul, mais il peut aussi être utilisé dans un template.

```js
import React, { useState } from "react";

// Atome Input
const Input = ({ label, type, value, onChange }) => (
  <input type={type} value={value} onChange={onChange} />
);

// Atome Label
const Label = ({ text }) => <label>{text}</label>;

// Molécule FormField
const FormField = ({ label, type, value, onChange }) => (
  <div>
    <Label text={label} />
    <Input type={type} value={value} onChange={onChange} />
  </div>
);

// Molécule ErrorMessage
const ErrorMessage = ({ message }) => (
  <div>
    <span>{message}</span>
  </div>
);

// Organisme Form
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des données
    if (!name || !email) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    // Logique de soumission des données
    // ...

    // Réinitialisation des champs
    setName("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Nom"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
```

#### Les templates

Les templates sont des composants de mise en page. Ce sont un peu les wireframes de l'application.

Ils prennent en props des organismes et les affichent.

Par exemple, un layout avec un header, un footer et un contenu.

```js
function template({ header, footer, children }) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

function FirstPage{
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <HomePage />
    </Layout>
  );
}
```

Souvent, les templates sont bien plus complexes que ça. Ils peuvent contenir de la logique d'affichage, mais pas de logique métier.

```js
// Template
const GridTemplate = ({
  headerProps,
  sidebarProps,
  mainContentProps,
  footerProps,
  errorProps,
}) => {
  const StyledAtomicTemplate = styled.div`
    /* styles spécifiques */
  `;

  const GridArea = styled.div`
    /* styles spécifiques */
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "gridElement1 gridElement1 gridElement1"
      "gridElement2 gridElement2 sidebar"
      "gridElement2 gridElement2 sidebar";
    gap: 20px;

    width: 100%;
    height: auto;
  `;

  const FirstGridElement = styled.div`
    grid-area: gridElement1;
  `;

  const SecondGridElement = styled.div`
    grid-area: gridElement2;
  `;

  const SidebarGridElement = styled.div`
    grid-area: sidebar;
  `;

  return (
    <StyledAtomicTemplate>
      <Header {...headerProps} />
      <GridArea>
        <FirstGridElement>{searchProps}</FirstGridElement>
        <SecondGridElement>{mainContentProps}</SecondGridElement>
        <SidebarGridElement>{sidebarProps}</SidebarGridElement>
      </GridArea>
      <Footer {...footerProps} />
      {errorProps.errorMessage && <ErrorZone {...errorProps} />}
    </StyledAtomicTemplate>
  );
};
```

#### Les pages

Les pages sont des composants qui correspondent à une route. Elles sont composées de templates, d'organismes, de molécules et d'atomes.

Elles peuvent contenir de la logique métier, mais pas de logique d'affichage.

```js

const HomePage = () => {

  // Logique métier


  const headerProps = <Header onClick={someFunction}/>;

  const sidebarProps = <Sidebar elements=[element1, element2, element3]/>;

  const mainContentProps = <MainContent title="Super titre"/>;

  const footerProps = <Footer content="Tous droits réservés | 2023"/>;

  return (
     <GridTemplate headerProps={headerProps} sidebarProps={sidebarProps} mainContentProps={mainContentProps} footerProps={footerProps} >
  )
}

```

## En conclusion de cette partie.

L'organisation des composants est très importante. Il faut bien réfléchir à la manière dont on va organiser ses composants. Il faut que l'organisation soit cohérente et qu'elle soit partagée par toute l'équipe.
