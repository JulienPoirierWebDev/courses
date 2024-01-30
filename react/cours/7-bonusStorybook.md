# Storybook for React

La librairie Storybook permet de développer et tester des composants React de manière isolée, sans avoir à les intégrer dans une application.

## Installation

```bash
npx storybook@latest init
```

Il faut que le projet ait déja été créer.

## Lancer Storybook

```bash

npm run storybook
```

Cela va vous ouvrir une page web avec l'ensemble des composants que vous avez créé. Si votre projet est vide, vous aurez juste un composant par défaut.

## Créer des stories

Storybook permet de développer des composants de manière isolée, c'est à dire sans avoir à les intégrer dans une application. Pour cela, il faut créer des stories.

Quel avantage a faire cela ?

- On peut tester un composant sans avoir à le mettre dans une application
- On peut tester un composant avec des données différentes
- On peut tester un composant avec des props différentes
- On peut tester un composant avec des états différents
- On créer une documentation vivante de nos composants

=> Cela évite d'avoir des pages de test qui ne sont jamais à jour. Et de devoir hardcoder des données dans nos composants pour les tester.

### Créer une story

Pour créer une story, il faut créer un fichier avec l'extension `.stories.js` à côté du composant que l'on veut tester.

Par exemple, pous une application de quizz, on pourrait avoir un composant `Question` et un fichier `Question.stories.js` à côté.

```js
import React from "react";
import Question from "./Question";

export default {
  title: "Components/Atoms/Question",
  component: Question,
  tags: ["autodocs"]
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args : {
    test: "Hello",
  }
}

```

Le premier export, qui est en `default`est un objet qui permet de configurer la story :

- Title permet de donner un titre à la story mais aussi, si vous avez plusieurs niveaux de dossiers, de les séparer avec un `/`. Cela permet de créer une arborescence dans Storybook.
  - Si vous respectez une hiérarchie, vous pourrez avoir par exemple tous les composants d'une feature dans un dossier et les composants d'un type dans un sous-dossier. Cela permet de s'y retrouver plus facilement.
  - Dans le cadre d'un projet en Atomic Design, on peut utiliser le nom des dossiers pour définir le type de composant (Atoms, Molecules, Organisms, Templates, Pages)
- Component permet de définir le composant que l'on veut tester.
- Tags permet de définir des tags pour la story. Cela permet de les retrouver plus facilement.
  - Surtout, le tag `autodocs` permet de générer une documentation automatique de notre composant, qui reprend toutes les props et leurs types, ainsi que la description du composant et des différentes stories.
- Parameters permet de définir des paramètres pour la story. Ici, on définit que les controls seront toujours ouverts. Cela permet de voir directement les différentes props et de les modifier.

Ensuite, les export suivants sont des objets qui permettent de définir les différentes stories. On peut en créer autant que l'on veut.

Le nom de la story est le nom de l'export. Ici, on a une story `Default`, qui permet de tester le composant avec des props par défaut.

Vous pouvez ensuite créer des stories pour des états différents, des props différentes, etc.

Par exemple, pour un boutton, on pourrait avoir :

- Default : un bouton par défaut
- Disabled : un bouton désactivé
- Loading : un bouton en cours de chargement
- WithIcon : un bouton avec une icone
- WithText : un bouton avec du texte
- WithIconAndText : un bouton avec une icone et du texte
- WithLongText : un bouton avec un texte long
- WithLongTextAndIcon : un bouton avec un texte long et une icone
- Primary : un bouton avec un style primaire
- Secondary : un bouton avec un style secondaire

Dans la story, vous pouvez aussi ajouter un paramètre `render` qui permet de définir un template pour la story. Cela permet de tester le composant avec des données différentes.

```js
export const MultipleQuestions = {
  args: {
    test: "Hello",
  },
  render: (args) => (
    <div>
      <Question {...args} />
      <Question {...args} />
      <Question {...args} />
      <Question {...args} />
    </div>
  ),
};
```

Cela permet de tester le composant avec des données différentes, dans des intégrations différentes.

### Créer des stories avec des données

Pour créer des stories avec des données, on peut utiliser le paramètre `args` dans la story.

```js
export const Default = {
  args: {
    test: "Hello",
  },
};
```

Cela permet de définir des valeurs par défaut pour les props du composant.

On peut ensuite utiliser ces valeurs dans le composant :

```js
const Question = ({ test }) => {
  return <div>{test}</div>;
};
```

On peut ensuite modifier ces valeurs dans Storybook.

> On peut utiliser ces arguments dans le composant mais aussi dans le template de la story, si l'on veut tester le composant avec des données différentes.

### Créer des stories avec des décorateurs

Pour créer des stories avec des hooks, on peut utiliser le paramètre `decorators` dans la story.

```js
export const Default = {
  args: {
    test: "Hello",
  },
  decorators: [
    (Story) => (
      <div style={{ border: "1px solid red" }}>
        <Story />
      </div>
    ),
  ],
};
```

Les décorateurs permettent de modifier le rendu de la story. Ici, on ajoute une bordure rouge autour de la story. On pourrait croire que cela revient a faire un render mais les décorateurs peuvent aussi être utilisé pour modifier le contexte de la story ou bien pour s'appliquer à toutes les stories d'un composant, voir de l'application.

```js

export default {
  title: "Components/Atoms/Question",
  component: Question,
  tags: ["autodocs"]
  parameters: {
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ border: "1px solid red" }}>
        <Story />
      </div>
    ),
  ],
};

```

Ici, on applique le décorateur à toutes les stories du composant.

## Liste d'articles sur Storybook

- [Documenter des custom hooks avec Storybook](https://farrant.me/posts/documenting-react-hooks-with-storybook)
