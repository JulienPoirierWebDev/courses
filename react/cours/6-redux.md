# La librairie Redux

## Introduction

Redux est une librairie qui permet de gérer l'état d'une application. Elle est très utilisée avec React, mais peut être utilisée avec d'autres frameworks.

Elle s'est imposée comme un standard dans le monde React, et est utilisée par de nombreux développeurs.

C'est aussi pour cela que nous allons l'utiliser dans le cadre de cette formation.

Toutefois, il est important de comprendre que Redux n'est pas obligatoire pour développer une application React.

Elle est utile pour gérer des applications complexes, mais peut être un peu lourde à mettre en place pour des applications simples. Il ne faut pas négliger les autres solutions qui existent pour gérer l'état d'une application React.

Voici une liste de librairies qui permettent de gérer l'état d'une application React :

- [Redux](https://redux.js.org/)
- [MobX](https://mobx.js.org/README.html)
- [Recoil](https://recoiljs.org/)
- [XState](https://xstate.js.org/docs/)
- [React Query](https://react-query.tanstack.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

Pour des applications simples, je ne peux que vous conseiller de vous tourner vers [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) qui est très simple à mettre en place. Cette librairie est d'ailleurs numéro 2 du classement des librairies de gestion d'état React sur [fe-tool](https://fe-tool.com/awesome-react-state-management).

## Présentation de Redux

Redux permet de créer ce que l'on appelle un store. Ce store est un objet qui contient l'état de l'application.
Au lieu d'avoir de l'état dans chaque composant, on va centraliser l'état dans le store.

On peut ensuite dispatcher des actions qui vont modifier l'état du store. Ces actions sont des objets qui contiennent un type et des données. Cela ressemble beaucoup au hook `useReducer` que nous avons vu précédemment.

> Nous allons voir du code Redux "a l'ancienne" dans cette partie. En effet, il est recommandé aujourd'hui d'utiliser Redux Toolkit qui simplifie grandement la mise en place de Redux. Nous verrons Redux Toolkit dans la partie suivante.

### Ancienne version.

Voici un exemple de code Redux, qui se situe dans le fichier `store.js`, dans un dossier `store` :

```js
// src/store.js
import { createStore } from "redux";

const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  INCREMENT_BY_AMOUNT: "INCREMENT_BY_AMOUNT",
  DECREMENT_BY_AMOUNT: "DECREMENT_BY_AMOUNT",
};

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const reset = () => ({
  type: types.RESET,
});

export const incrementByAmount = (amount) => ({
  type: types.INCREMENT_BY_AMOUNT,
  payload: amount,
});

export const decrementByAmount = (amount) => ({
  type: types.DECREMENT_BY_AMOUNT,
  payload: amount,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.RESET:
      return {
        ...state,
        count: 0,
      };
    case types.INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case types.DECREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
```

````js

// src/index.js

import { Provider } from "react-redux";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);```

```js
// src/App.js

import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./store";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Compteur : {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
    </div>
  );
}
````

Cela peut paraître un peu compliqué au premier abord, mais il n'y a rien de bien sorcier, il faut comprendre le rôle de chaque élément.

- Le store est créé avec la fonction `createStore` de Redux. Cette fonction prend en paramètre un reducer et un état initial.
- Le reducer est une fonction qui prend en paramètre l'état actuel et une action, et qui retourne le nouvel état. L'état initial est l'état de départ de l'application.
  Dans le reducer, on va utiliser un switch pour savoir quelle action est exécutée. En fonction de l'action, on va modifier l'état. Chaque action va modifier l'état d'une manière différente et c'est ce que l'on retrouve dans chaque case du switch.

- Les actions sont des objets qui contiennent un type et des données. Le type permet de savoir quelle action est exécutée, et les données sont les données qui sont nécessaires pour modifier l'état.

- Les fonctions `increment`, `decrement`, `reset`, `incrementByAmount` et `decrementByAmount` sont des fonctions qui retournent des actions. Elles sont appelées des action creators. On peut s'en passer mais cela permet de ne pas avoir à créer manuellement les objets actions.

> C'est comme avec le hook `useReducer` que nous avons vu précédemment.

Voila pour la partie `store.js`.

Ensuite, nous avons le fichier `index.js`.

- Le composant `Provider` permet de fournir le store à l'application. Il prend en paramètre le store. Cela permet de rendre le store disponible dans toute l'application.

Enfin, voyons la partie `App.js`.

- Le hook `useSelector` permet de récupérer une partie du store. Il prend en paramètre une fonction qui permet de sélectionner la partie du store que l'on souhaite récupérer. Cette fonction prend en paramètre le store et retourne la partie du store que l'on souhaite récupérer.
  En utilisant le hook `useSelector`, on va pouvoir récupérer la valeur de `count` dans le store. Si on modifie la valeur de `count` dans le store, la valeur de `count` dans le composant sera automatiquement mise à jour.

- Le hook `useDispatch` permet de récupérer la fonction `dispatch` qui permet de dispatcher une action. C'est cette fonction qui va permettre de modifier l'état du store. On va pouvoir appeler cette fonction en lui passant une action en paramètre. Cela va déclencher le reducer qui va modifier l'état du store. En l'occurence, on va utiliser les `action creators` : `increment`, `decrement`, `reset`, `incrementByAmount` et `decrementByAmount` que nous avons créé précédemment.

Alors vous avez vu la base, mais on peut avoir des states très complexes avec Redux. On peut avoir des states qui contiennent des objets, des tableaux, des tableaux d'objets, etc. C'est là que Redux est très utile, car il permet de gérer des states complexes et de nous imposer une structure pour le state.

Exemple de state :

Imaginons que nous travaillons sur une application de gestion de tâches et des rendez-vous. Cette application peut être utiliser par plusieurs utilisateurs. Chaque utilisateur peut avoir plusieurs tâches et plusieurs rendez-vous.

Voici un exemple de state pour cette application :

```js
const state = {
  userId: 1,
  tasks: [
    {
      id: 1,
      title: "Faire les courses",
      completed: false,
      userId: 1,
    },
    {
      id: 2,
      title: "Faire la vaisselle",
      completed: true,
      userId: 1,
    },
    {
      id: 3,
      title: "Faire le ménage",
      completed: false,
      userId: 1,
    }
  ],
  appointments: [
    {
      id: 1,
      title: "Rendez-vous chez le médecin",
      date: "2021-09-01-10:00",
      userId: 1,
    },
    {
      id: 2,
      title: "Rendez-vous chez le dentiste",
      date: "2021-09-01-11:00",
      userId: 1,
    },
    {
      id: 3,
      title: "Rendez-vous chez le coiffeur",
      date: "2021-09-01-12:00",
      userId: 1,
    }
  ]
}
```

On peut voir que le state est un objet qui contient un `userId`, un tableau de `tasks` et un tableau de `appointments`.
Dans notre application Redux, il faudrait vérifier que l'utilisateur est bien connecté avant de lui afficher ses tâches et ses rendez-vous. L'initial state serait donc un objet vide, et on mettrait à jour le state une fois que l'utilisateur est connecté.

Un des actions devra récupérer les tâches et les rendez-vous de l'utilisateur et les ajouter au state, à partir de l'`userId` de l'utilisateur.

Ensuite, on pourra créer des actions pour ajouter, modifier et supprimer des tâches et des rendez-vous.

Il faudra que ces actions mettent à jour le state en conséquence, pour un affichage local mais aussi pour un affichage côté serveur, avec des requêtes HTTP.

Enfin, il faudra une action pour déconnecter l'utilisateur et vider le state.

Nous voyons donc que le code sera déja plus complexe que ce que nous avons vu précédemment. C'est pour cela que Redux est très utile pour gérer des applications complexes.

> Il était important que vous puissiez comprendre Redux en partant de la base, notamment car vous pourriez être amené à travailler sur un projet qui utilise Redux. Mais aujourd'hui, il est recommandé d'utiliser Redux Toolkit qui simplifie grandement la mise en place de Redux.

### Nouvelle version avec Redux Toolkit

Redux Toolkit est une librairie qui simplifie grandement la mise en place de Redux. Elle permet de créer un store, des reducers et des actions en quelques lignes de code.

Le `getting started` de Redux Toolkit est très bien fait, je vous invite à le lire : [https://redux-toolkit.js.org/introduction/getting-started](https://redux-toolkit.js.org/introduction/getting-started).
Celui de Redux est aussi très bien fait : [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started) et il conseille d'utiliser Redux Toolkit.

Comment créer un projet avec Redux Toolkit ?

Nous allons créer un projet avec Vite et React. Nous allons installer Redux Toolkit et React Redux.

```bash
npm init vite@latest
cd vite-react
npm install
npm install @reduxjs/toolkit react-redux
```

Nous allons créer un dossier `store` dans le dossier `src`. Dans ce dossier, nous allons créer un fichier `store.js` qui va contenir le code suivant :

```js
// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
```

Il faut ensuite fournir le Provider à l'application. Pour cela, nous allons modifier le fichier `index.js` :

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

Pour l'instant, notre store est vide. Mais il est disponible dans toute l'application.

Pour organiser le code, Redux Toolkit conseille de créer un dossier `features` dans le dossier `src`. Dans ce dossier, nous allons créer un dossier `counter` et un fichier `counterSlice.js`.

Une slice est une couche, un morceau de l'application. C'est une fonction qui va permettre de créer un reducer et des actions, que l'on pourra injecter dans le store.

Cette organisation permet d'avoir un dossier par slice et par feature. Cela permet de bien organiser le code.

```js
// src/features/counter/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
```

On remarque plusieurs choses :

- On utilise la fonction `createSlice` de Redux Toolkit pour créer une slice. Cette fonction prend en paramètre un objet qui contient le nom de la slice, l'état initial et les reducers.
- La modification du state se fait de manière "mutante". C'est à dire que l'on modifie directement le state. C'est un choix de structure de Redux Toolkit. Cela permet de ne pas avoir à retourner un nouvel objet à chaque fois que l'on modifie le state. On evite ainsi les opérations de spread qui rendent le code long et pas toujours évident a écrire et a lire.
- Les actions creators sont automatiquement générés par Redux Toolkit. On peut les utiliser directement dans le composant.
- Le reducer est automatiquement généré par Redux Toolkit. On peut l'utiliser directement dans le store.

On peut ensuite utiliser la slice dans le store :

```js
// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

Il suffit alors d'ajouter le counterReducer dans le store pour qu'il soit disponible dans toute l'application.

On peut ensuite utiliser le state et les actions dans le composant :

```js
// src/App.js

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Compteur : {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
    </div>
  );
}

export default App;
```

On peut voir que l'on utilise le hook `useSelector` pour récupérer la valeur de `count` dans le state. On utilise ensuite le hook `useDispatch` pour récupérer la fonction `dispatch` qui permet de dispatcher une action.

On peut ensuite utiliser les actions dans le composant.

## Conclusion

Redux est une librairie très utilisée dans le monde React. Elle permet de gérer l'état d'une application. Elle est très utile pour gérer des applications complexes.

Il est important de comprendre comment fonctionne Redux, mais aujourd'hui, il est recommandé d'utiliser Redux Toolkit qui simplifie grandement la mise en place de Redux.

Nous allons réaliser ensuite un projet avec Redux Toolkit.
