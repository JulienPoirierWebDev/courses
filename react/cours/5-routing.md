# Le routing avec `React Router`

ReactJS nous permet de créer des applications single-page. Cela signifie que l'application ne se recharge pas à chaque changement de page.

C'est pratique mais parfois, nous avons quand même besoin de changer de page et d'avoir une url qui change, pour indiquer a l'utilisateur où il se trouve sur l'application web.

Par exemple, pour afficher une page de connexion, une page d'inscription, une page de profil, etc.

Pour cela, nous allons utiliser une librairie externe à ReactJS, qui s'appelle `react-router-dom`. Elle est très populaire et très utilisée.

> Notez que si vous passez a NextJS, vous n'aurez plus besoin de cette librairie, car elle est intégrée à NextJS et que l'arborescence des fichiers génère automatiquement les routes.

## Installation

Pour installer cette librairie, nous allons utiliser `npm`:

```bash
npm install react-router-dom
```

## Utilisation

N'hésitez pas a aller lire la doc dans tous les cas pour être sur de bien utiliser les nouvelles versions de la librairie : [documentation](https://reactrouter.com/en/main/start/tutorial).

C'est notamment le cas pour la version 6 qui est sortie récemment, et qui change pas mal de choses.

> Attention aux tutoriels qui ne sont pas a jour, et qui utilisent des anciennes versions de la librairie. Si vous avez un bug, vérifiez bien que les solutions que l'on vous propose sont pour la bonne version.

### Création du router et du routerProvider

Dans le dossier main.jsx, nous allons créer un router et un routerProvider, qui va nous permettre de gérer les routes de notre application.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  {
    path: "/login",
   element: <Login />
   }
   {
    path: "/register",
    element: <Register />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

On remarque que le router, retourné par la fonction `createBrowserRouter`, prend en paramètre un tableau d'objets. Chaque objet représente une route, et contient un `path` et un `element`.

Le `path` est l'url de la route, et l'`element` est le composant qui sera affiché lorsque l'url correspondra au `path`.

Pour plus de lisibilité, je vous conseille de créer un dossier `Pages` dans lequel vous mettrez tous les composants qui correspondent à une route.

Ce niveau de connaissance suffit pour des applications simples, mais si vous voulez aller plus loin, voici quelques autres paramètres.

#### Le paramètre `children`

En plus de `path` et `element`, vous pouvez ajouter d'autres propriétés à chaque objet, comme `children` par exemple, qui permet d'injecter des composants enfants à la route, lorsque l'url correspond au `path`.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
```

Dans cette configuration, le composant `Home` sera affiché lorsque l'url sera `/`, mais aussi lorsque l'url sera `/login` ou `/register`.
Le composant `Login` sera injecté dans le composant `Home` lorsque l'url sera `/login`, et le composant `Register` sera injecté dans le composant `Home` lorsque l'url sera `/register`.

Dans le composant `Home`, il faudra utiliser le composant `Outlet` pour afficher les composants enfants injectés.

```jsx
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};
```

C'est très pratique pour créer des layouts où l'un des emplacements est réservé pour un composant qui peut être variable.

Imaginons que vous développiez une web app qui permettent de jouer a des jeux de société en ligne. Vous pouvez créer un layout qui affiche un menu sur la gauche, et un emplacement pour le jeu sur la droite.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/game/uno",
        element: <Uno />,
      },
      {
        path: "/game/monopoly",
        element: <Monopoly />,
      },
      {
        path: "/game/scrabble",
        element: <Scrabble />,
      },
    ],
  },
]);
```

Dans ce cas, le composant `Home` affichera le menu sur la gauche, et le composant `Uno`, `Monopoly` ou `Scrabble` sur la droite, en fonction de l'url.

#### Le paramètre `loader`

Le paramètre `loader` permet de définir une fonction qui récupérera de la donnée a transmettre a la page, avant de l'afficher.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          return {
            users: data,
          };
        });
    },
  },
]);
```

Ici, nous avons créé une route `/` qui affiche la page `Home`, et qui récupère des données depuis une API.

Vous pouvez ensuite utiliser ces données dans votre composant `Home` en utilisant le hook `useLoaderData` :

```jsx
const Home = () => {
  const { users } = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};
```

Concrètement, cela remplace les requêtes `fetch` que nous faisions dans le `useEffect` de nos composants.

> Un paramètre `action` existe aussi qui lui, permet de définir une fonction qui sera éxécutée si une requête d'un autre type que `GET` est envoyée à la route (POST, PUT, DELETE, etc), lors de la soumission d'un formulaire par exemple.
>
> > Pour plus d'infos, voir la [action dans la doc](https://reactrouter.com/en/main/route/action).

#### Utiliser un `path` dynamique

Il est possible d'utiliser un `path` dynamique, en utilisant le caractère `:`.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);
```

Ici, nous avons créé une route `/user/:id`, qui affiche la page `User`, et qui récupère l'id de l'utilisateur dans l'url.

Pour récupérer cette id, nous allons utiliser le hook `useParams` :

```jsx
const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Utilisateur {id}</h1>
    </div>
  );
};
```

Vous pouvez enchainé les `:` pour récupérer plusieurs paramètres :

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id/name/:name",
    element: <User />,
  },
]);
```

Vous pouvez aussi rendre des paramètres optionnels en ajoutant un `?` :

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:category?",
    element: <Category />,
  },
]);
```

Ici, le paramètre `category` est optionnel. Si il est présent dans l'url, il sera récupéré, sinon, il sera `undefined`.

Cela permet de créer des routes qui peuvent être utilisées pour plusieurs pages, comme par exemple une page de catégorie, qui affiche tous les articles d'une catégorie, mais qui peut aussi afficher tous les articles si aucun paramètre n'est présent dans l'url.
C'est ensuite au composant de gérer le cas où le paramètre est `undefined`.

#### Le paramètre `caseSensitive`

Le paramètre `caseSensitive` permet de définir si le `path` est sensible à la casse ou non.

Par défaut, il est à `false`, ce qui signifie que `/user` et `/User` sont considérés comme la même route.

Si vous voulez que `/user` et `/User` soient deux routes différentes, il faut mettre le paramètre `caseSensitive` à `true`.

#### Gérer les erreurs 404

Pour gérer les erreurs d'une route, il faut utiliser le paramètre `errorElement` :

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);
```

Ici, nous avons créé une route `/` qui affiche la page `Home`, et qui affiche la page `Error404` si l'url ne correspond à aucune route.

En mettant le paramètre `errorElement` sur la route `/`, nous avons défini que cette page affichera la page `Error404` si l'url ne correspond à aucune route.

Mais nous pouvons aussi mettre le paramètre `errorElement` sur une route spécifique, comme par exemple la route `/user/:id`, pour afficher une page d'erreur spécifique à cette route.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RootError />,
  },
  {
    path: "/user/:id",
    element: <User />,
    errorElement: <UserError />,
  },
]);
```

Ici, si l'url `user/` n'inclut pas d'id, la page `UserNotFound` sera affichée.

> Il est recommandé d'avoir au moins la route `/` avec un `errorElement`, pour afficher une page d'erreur en cas d'erreur, autrement, l'application ne s'affichera pas.

> Un errorElement ne sert pas seulement a gérer les pages non disponibles, il peut aussi servir a gérer les erreurs de chargement de données, par exemple si une requête `fetch` échoue.
>
> > Cela sécurise le comportement de votre application en production.

Vous pouvez récupérer l'erreur dans votre composant en utilisant le hook `useRouteError` :

```jsx
const RootError = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return <Error404 />;
  }

  return (
    <div>
      <h1>Erreur</h1>
      <p>{error.message}</p>
    </div>
  );
};
```

Vous pouvez aussi envoyer des erreurs manuellement, pour cela je vous propose d'aller lire la documentation : [en savoir plus sur les erreurs](https://reactrouter.com/en/main/route/error-element)
