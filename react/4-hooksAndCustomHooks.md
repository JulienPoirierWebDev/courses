# Les hooks et les custom hooks

Avec ReactJS, vous entendez souvent parler de hooks. Mais qu'est-ce que c'est ? Et à quoi ça sert ?

Les hooks sont des fonctions qui permettent ajoutent des fonctionnalités a nos composants et que l'on peut manipuler pour modifier le comportement de nos composants : on peut les utiliser pour gérer des états, des effets, des contextes, etc.

ReactJS nous fournit des hooks de base, mais on peut aussi créer nos propres hooks, que l'on appelle des custom hooks.

## Les hooks de base

### useState

Le hook useState permet de gérer des états dans nos composants. Il prend en paramètre la valeur initiale de l'état et retourne un tableau avec la valeur de l'état et une fonction pour modifier la valeur de l'état.

```js
const [count, setCount] = useState(0);
```

Donc ici `count` est la valeur de l'état et `setCount` est la fonction pour modifier la valeur de l'état.

Comment mettre a jour la valeur de l'état ? On appelle la fonction `setCount` en lui passant la nouvelle valeur de l'état en paramètre.

```js
setCount(1);
```

Cette manière peut fonctionner dans la plupart des cas mais parfois, on a besoin de mettre a jour la valeur de l'état en fonction de la valeur précédente.
C'est notamment le cas pour les compteurs de clics : on veut partir de la valeur précédente pour ajouter un nombre a celle-ci (1, dans le cas d'un compteur classique).

Dans ce cas, on peut passer une fonction en paramètre de `setCount` qui prend en paramètre la valeur précédente de l'état et retourne la nouvelle valeur de l'état.

```js
setCount((prevCount) => prevCount + 1);
```

Attention, concept important pour l'état : la valeur de l'état est immuable. On ne peut pas modifier directement la valeur de l'état, on ne peut que la remplacer par une nouvelle valeur.

En javascript classique, on peut faire ceci :

```js
let count = 0;

count++;
```

Mais en ReactJS, on ne peut pas faire ceci :

```js
const [count, setCount] = useState(0);

count++;
```

On dit que la valeur de l'état est immuable. Cela veut dire que l'on ne peut pas la modifier directement. On ne peut que la remplacer par une nouvelle valeur.

C'est pour cela que React nous fournit la fonction `setCount` qui permet de modifier la valeur de l'état.

Pourquoi ne pas permettre de modifier directement la valeur de l'état ? Pour plusieurs raisons :

- Déja car si l'on modifie directement une valeur de l'état, React ne s'en rend pas compte et ne met pas a jour le composant. Les fonctions comme `setCount` permettent de prévenir React qu'il faut mettre a jour le composant.
- Ensuite, React ne met pas a jour la valeur directement, il met a jour la valeur de l'état de manière asynchrone, pour améliorer les performances. En gros, il enregistre les changements a faire, les mets de coté quelques instants, et les applique tous en même temps. Cela permet d'éviter de mettre a jour le composant a chaque fois que l'on modifie la valeur de l'état et de mettre a jour le composant une seule fois avec toutes les modifications a faire.

### useReducer

Le hook useReducer permet de gérer des états de manière plus complexe que le hook useState. En général, il fait peur mais il est très utile pour gérer des états complexes.

Il prend en paramètre une fonction reducer, un état initial et un état initial alternatif (optionnel).

```js
const [state, dispatch] = useReducer(
  reducer,
  initialState,
  initialAlternativeState
);
```

Les différentes paramètres :

- `reducer` est une fonction qui prend en paramètre la valeur de l'état et une action et retourne la nouvelle valeur de l'état.
- `initialState` est la valeur initiale de l'état.
- `initialAlternativeState` est une valeur alternative initiale de l'état. Elle est optionnelle, ici on s'en fiche un peu.

Les valeurs de retour :

- `state` est la valeur de l'état et `dispatch` est la fonction pour modifier la valeur de l'état.
- `dispatch` est une fonction qui permet de modifier la valeur de l'état. Elle prend en paramètre une action.

Une action est un objet qui contient un type et une valeur. Le type permet de savoir quelle action effectuer et la valeur est la valeur a utiliser pour effectuer l'action.

Cela parait un peu complexe mais prenons un exemple. Imaginons que nous voulons gérer un porte-monnaie. On veut pouvoir ajouter de l'argent, en retirer et vider le porte-monnaie. On pourrait utiliser useSate pour gérer cela :

```js
const [wallet, setWallet] = useState(0);

const addMoney = (amount) => {
  setWallet(wallet + amount);
};

const removeMoney = (amount) => {
  setWallet(wallet - amount);
};

const emptyWallet = () => {
  setWallet(0);
};
```

Mais le problème de cette solution est que l'on doit gérer nous même les différents cas. Par exemple, si on veut retirer de l'argent mais qu'il n'y en a pas assez, on doit gérer cela nous même. En plus, on doit gérer nous même la valeur de l'état, ce qui peut être compliqué si l'on veut faire des choses plus complexes. Cela peut être source d'erreur, notamment si l'on travaille en équipe.

On peut utiliser useReducer pour gérer cela :

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return state + action.value;
    case "REMOVE_MONEY":
      if (state - action.value < 0) {
        return 0;
      } else {
        return state - action.value;
      }
    case "EMPTY_WALLET":
      return 0;
    default:
      throw Error("Unknown action.");
  }
};

const [state, dispatch] = useReducer(reducer, 0);

const addMoney = (amount) => {
  dispatch({ type: "ADD_MONEY", value: amount });
};

const removeMoney = (amount) => {
  dispatch({ type: "REMOVE_MONEY", value: amount });
};

const emptyWallet = () => {
  dispatch({ type: "EMPTY_WALLET" });
};
```

En utilisant useReducer, on doit déterminer a l'avance les différentes actions possibles et comment gérer ces actions. Cela permet de gérer plus facilement les différents cas et de gérer plus facilement la valeur de l'état. Un développeur qui vient utiliser dispatch sait exactement ce qu'il peut faire et comment il peut le faire.

Avec useReducer, l'état n'est pas nécessairement une valeur mais peut aussi être un objet ou un tableau. Dans notre cas, nous pourrions stocker le montant du porte-monnaie et éventuellement un message d'erreur si l'on veut retirer plus d'argent qu'il n'y en a dans le porte-monnaie.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { amount: state.amount + action.value };
    case "REMOVE_MONEY":
      if (state.amount - action.value < 0) {
        return {
          amount: 0,
          error: "Not enough money",
          debt: action.value - state.amount,
        };
      } else {
        return { amount: state.amount - action.value };
      }
    case "EMPTY_WALLET":
      return { amount: 0 };
    default:
      throw Error("Unknown action.");
  }
};

const [state, dispatch] = useReducer(reducer, { amount: 0 });

const addMoney = (amount) => {
  dispatch({ type: "ADD_MONEY", value: amount });
};

const removeMoney = (amount) => {
  dispatch({ type: "REMOVE_MONEY", value: amount });
};

const emptyWallet = () => {
  dispatch({ type: "EMPTY_WALLET" });
};
```

Dans la pratique, il est conseillé d'utiliser useReducer pour gérer des états complexes et useState pour gérer des états simples.

Une des conventions est de ne pas laisser de type en format string mais de créer des constantes pour les types.

```js
const ADD_MONEY = "ADD_MONEY";
const REMOVE_MONEY = "REMOVE_MONEY";
const EMPTY_WALLET = "EMPTY_WALLET";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return { amount: state.amount + action.value };
    case REMOVE_MONEY:
      if (state.amount - action.value < 0) {
        return {
          amount: 0,
          error: "Not enough money",
          debt: action.value - state.amount,
        };
      } else {
        return { amount: state.amount - action.value };
      }
    case EMPTY_WALLET:
      return { amount: 0 };
    default:
      throw Error("Unknown action.");
  }
};

const [state, dispatch] = useReducer(reducer, { amount: 0 });

const addMoney = (amount) => {
  dispatch({ type: ADD_MONEY, value: amount });
};

const removeMoney = (amount) => {
  dispatch({ type: REMOVE_MONEY, value: amount });
};

const emptyWallet = () => {
  dispatch({ type: EMPTY_WALLET });
};
```

Vous pouvez aussi stocker les contantes dans un objet pour éviter de polluer l'espace de nom.

```js
const ACTIONS = {
  ADD_MONEY: "ADD_MONEY",
  REMOVE_MONEY: "REMOVE_MONEY",
  EMPTY_WALLET: "EMPTY_WALLET",
};
```

Avec les constantes, vous évitez les erreurs de frappe et vous pouvez plus facilement retrouver les différents types avec l'auto-complétion.

### useEffect

Le hook useEffect permet d'effectuer des effets de bord dans nos composants. Il prend en paramètre une fonction et un tableau de dépendances (optionnel).

```js
useEffect(() => {
  // Code a exécuter après le rendu du composant et après chaque modification des dépendances
  return () => {
    // Code a exécuter avant de détruire le composant
  };
}, [dependencies]);
```

Les différentes paramètres :

- La`callback` est une fonction qui sera exécutée après le rendu du composant et après chaque modification des dépendances. Elle peut retourner une fonction qui sera exécutée avant de détruire le composant (pour nettoyer les event listeners par exemple).
- `dependencies` est un tableau de dépendances. Il est optionnel. Si il est présent, la `callback` sera exécutée après chaque modification des dépendances. Si il n'est pas présent, la `callback` sera exécutée après le rendu du composant et après chaque modification de l'état. Si il est vide, la `callback` sera exécutée après le rendu initial du composant et avant la destruction du composant.

Dans quel cas utiliser useEffect ? En général, on l'utilise pour effectuer des effets de bord, c'est a dire des actions qui ne sont pas directement liées au rendu du composant. Par exemple, on peut utiliser useEffect pour effectuer des appels HTTP, pour gérer des event listeners, pour gérer des animations, etc.

#### L'importance des dépendances

Soyons clair : les dépendances sont très importantes. Si vous ne les mettez pas, vous aurez des problèmes. Si vous les mettez mal, vous aurez des problèmes.

Déja, si l'on ne met pas du tout de tableau de dépendances, la `callback` sera exécutée après chaque modification d'un état. Cela peut être problématique si l'on effectue des appels HTTP dans la `callback` : on risque de faire des appels HTTP en boucle.

Par exemple, si l'on a un input text, a chaque fois que l'on tape une lettre, la `callback` sera exécutée et on fera un appel HTTP. Cela peut être problématique si l'on a un nombre limité d'appels HTTP par jour (et ça sert a rien).

```js
const [text, setText] = useState("");

useEffect(() => {
  try{
    let isMounted = true;
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (isMounted) {
      setData(data);
    }
  } catch (error) {
    console.log(error);
  }
  return () => {
    isMounted = false;
  };
});

return (
  <input
    type="text"
    value={text}
    onChange={(event) => setText(event.target.value)}
  />
);
```

Pour éviter cela, on peut mettre un tableau de dépendances vide. Comme cela, la `callback` ne sera exécutée qu'après le rendu initial du composant et avant la destruction du composant.

```js

const [text, setText] = useState("");

useEffect(() => {
  try{
    let isMounted = true;
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (isMounted) {
      setData(data);
    }
  } catch (error) {
    console.log(error);
  }
  return () => {
    isMounted = false;
  };
}, []);

return (
  <input
    type="text"
    value={text}
    onChange={(event) => setText(event.target.value)}
  />
);
```

Enfin, avec un tableau de dépendance, la `callback` sera exécutée après le rendu initial du composant et après chaque modification des dépendances.

Cela peut être utile pour effectuer des appels HTTP en fonction de la valeur d'un état. Par exemple, si l'on a un input text et que l'on veut effectuer un appel HTTP a chaque fois que l'on tape une lettre, on peut mettre l'état de l'input text dans le tableau de dépendances. Comme cela, la `callback` sera exécutée après le rendu initial du composant et après chaque modification de l'état de l'input text.

C'est pratique notamment s'il y a plusieurs inputs mais qu'un seul doit déclencher l'appel HTTP.

```js

const [text, setText] = useState("");
const [otherText, setOtherText] = useState("");

useEffect(() => {
  try{
    let isMounted = true;
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (isMounted) {
      setData(data);
    }
  } catch (error) {
    console.log(error);
  }
  return () => {
    isMounted = false;
  };
}, [text]);

return (
  <input
    type="text"
    value={text}
    onChange={(event) => setText(event.target.value)}
  />
  <input
    type="text"
    value={otherText}
    onChange={(event) => setOtherText(event.target.value)}
);
```

#### Les cas concrets d'utilisation de useEffect

##### Faire des appels HTTP

On peut utiliser useEffect pour effectuer un appel HTTP :

```js
const [data, setData] = useState(null);

useEffect(async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  setData(data);
}, []);
```

Ici, on effectue un appel HTTP pour récupérer des données. On utilise useEffect pour effectuer cet appel HTTP après le rendu initial du composant. On utilise un tableau de dépendances vide pour que la `callback` ne soit exécutée qu'après le rendu initial du composant.

Nous n'avons pas mis de `return` dans la `callback`, donc aucun code ne s'exécutera avant la destruction du composant. On voit souvent cet exemple mais il n'est pas optimal car on ne gère pas le cas où le composant est détruit avant que l'appel HTTP soit terminé. On peut utiliser une un abort controller pour gérer cela :

```js
const [data, setData] = useState(null);

useEffect(async () => {
  const controller = new AbortController();

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        signal: controller.signal,
      }
    );
    const data = await response.json();
    setData(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.log(error);
    }
  }

  return () => {
    controller.abort();
  };
}, []);
```

Dans cet exemple, on utilise un abort controller pour gérer le cas où le composant est détruit avant que l'appel HTTP soit terminé.
Un abort controller permet d'annuler une requête HTTP. On peut l'utiliser en passant un signal dans les options de la requête HTTP. Cela signifie que si le signal est annulé, la requête HTTP sera annulée. On peut annuler le signal en appelant la fonction abort du controller.

C'est pour cela que l'on retourne une fonction dans la `callback` : pour annuler le signal avant de détruire le composant.

On peut aussi utiliser un flag pour gérer cela, qui est plus simple mais moins robuste :

```js
const [data, setData] = useState(null);

useEffect(async () => {
  let isMounted = true;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    if (isMounted) {
      setData(data);
    }
  } catch (error) {
    console.log(error);
  }

  return () => {
    isMounted = false;
  };
}, []);
```

##### Gérer des event listeners

On peut aussi utiliser useEffect pour gérer des event listeners :

```js
const [count, setCount] = useState(0);

useEffect(() => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);
```

Ici, on ajoute un event listener sur le document pour gérer les clics. On utilise useEffect pour ajouter l'event listener après le rendu initial du composant. On utilise un tableau de dépendances vide pour que la `callback` ne soit exécutée qu'après le rendu initial du composant.

> Il ne faut pas oublier de supprimer l'event listener avant de détruire le composant. Sinon, on aura des fuites mémoires et des comportements inattendus.

##### Gérer des animations

On peut aussi utiliser useEffect pour gérer des animations :

```js
import { useState, useEffect } from "react";

const AnimatedBox = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
        top: "50%",
        left: `${position}px`,
      }}
    ></div>
  );
};

const App = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      {active ? <AnimatedBox /> : null}
      <button onClick={() => setActive(!active)}>Button</button>
    </>
  );
};

export default App;
```

Ici, on utilise useEffect pour gérer une animation. On utilise un interval pour modifier la position de la boite toutes les 100ms. On utilise useEffect pour ajouter l'interval après le rendu initial du composant. On utilise un tableau de dépendances vide pour que la `callback` ne soit exécutée qu'après le rendu initial du composant.

Avec le bouton, on peut activer ou désactiver l'animation. Si on désactive l'animation, on détruit le composant. On voit que l'on a bien supprimé l'interval avant de détruire le composant.

### useContext

Jusqu'a maintenant, nous avons géré l'état de nos composants avec useState et useReducer. Mais que faire si l'on veut partager l'état entre plusieurs composants ? On peut le passer en props mais cela peut être fastidieux si l'on a beaucoup de composants : c'est ce que l'on appelle le prop drilling et c'est un danger pour la maintenabilité de l'application.

Pour éviter cela, on peut utiliser le contexte. Le contexte permet de partager des données entre plusieurs composants sans passer par les props.

Le contexte est composé de deux choses :

- Un contexte : c'est un objet qui contient les données que l'on veut partager.
- Un provider : c'est un composant qui permet de fournir le contexte aux composants enfants.

Pour créer un contexte, on utilise la fonction createContext de React :

```js
const MyContext = React.createContext();
```

On peut ensuite utiliser le contexte dans un composant en utilisant le hook useContext :

```js
const MyComponent = () => {
  const context = useContext(MyContext);
  return <div>{context}</div>;
};
```

On peut aussi utiliser le contexte dans un composant enfant :

```js
const MyComponent = () => {
  return <MyChildComponent />;
};

const MyChildComponent = () => {
  const context = useContext(MyContext);
  return <div>{context}</div>;
};
```

Pour fournir le contexte aux composants, il faut les wraper dans un provider :

```js
const App = () => {
  return (
    <MyContext.Provider value="Hello world">
      <MyComponent />
    </MyContext.Provider>
  );
};
```

On peut ainsi donner accès au contexte a toute l'app ou bien seulement a une partie de l'app.

Dans notre exemple, on donne une valeur mais on ne peut pas la modifier. Pour modifier la valeur du contexte, on peut utiliser le hook useState :

```js
const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello world");
  return (
    <MyContext.Provider value={value}>
      {children}
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>
    </MyContext.Provider>
  );
};

const Element = () => {
  const context = useContext(MyContext);
  console.log("context", context);
  return <>{context}</>;
};

const App = () => {
  return (
    <MyProvider>
      <p>
        <Element />
      </p>
    </MyProvider>
  );
};
```

Dans le composant Element, on a accès au contexte. On peut le modifier avec l'input. On voit que le contexte est bien modifié dans le composant Element.

Toutefois, ici, on ne peut pas modifier le contexte dans le composant Element. Pour cela, il faudrait passer dans le contexte une fonction pour modifier le contexte.

```js
const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello world");
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>
    </MyContext.Provider>
  );
};
```

Et pour acceder a la fonction, on peut utiliser le hook useContext :

```js
const Element = () => {
  const { value, setValue } = useContext(MyContext);
  console.log("context", value);
  return (
    <>
      {value}
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};
```

Avec cette manière de faire, on peut passer de nombreux états dans le contexte et les modifier dans les composants enfants.

Nous verrons plus tard des exemples plus concrets d'utilisation du contexte.

### useRef

Le hook useRef permet de créer une référence un élément qui ne doit pas générer de render lorque l'on modifie la référence et qui est maintenu en mémoire lors d'un re-render (comme les states).

Dans les faits, on l'utilise souvent pour faire référence a un élément du DOM et ainsi pouvoir le manipuler.

```js
const MyComponent = () => {
  const ref = useRef(null);
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus</button>
    </div>
  );
};
```

Le hook useRef est très utile lorsque l'on travaille avec un canvas. En effet, on peut utiliser le hook useRef pour faire référence au canvas et ainsi pouvoir le manipuler.

```js
const MyComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.fillRect(0, 0, 100, 100);
  }, []);

  return <canvas ref={canvasRef} width="100" height="100" />;
};
```

### useMemo

Le hook useMemo permet de mémoriser le résultat d'une fonction et de ne pas la ré-exécuter si les paramètres de la fonction n'ont pas changé.

```js
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("");

  const result = useMemo(() => {
    console.log("useMemo");
    return count * 2;
  }, [count]);

  return (
    <>
      <p>{result}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Button
      </button>
      <input
        type="text"
        value={string}
        onChange={(event) => setString(event.target.value)}
    </>
  );
};
```

Ici, on utilise useMemo pour mémoriser le résultat de la fonction. La fonction ne sera ré-exécutée que si la valeur de count change. Si la valeur de count ne change pas, la fonction ne sera pas ré-exécutée.

Dans quels cas utiliser useMemo ? On peut l'utiliser pour mémoriser le résultat d'une fonction qui prend du temps a s'exécuter. Par exemple, si l'on a une fonction qui effectue un appel HTTP, on peut utiliser useMemo pour mémoriser le résultat de la fonction et ne pas ré-exécuter la fonction a chaque fois que l'on modifie un état.

C'est notamment le cas lorsque la donnée récupérée n'est impactée que par un ou plusieurs états et que l'on veut éviter de ré-exécuter la fonction a chaque modification d'un autre état, qui n'a pas d'impact sur la donnée.

Il faut alors passer en paramètre de useMemo les états qui ont un impact sur la donnée, dans un tableau de dépendances.

### useCallback

Le hook useCallback permet de mémoriser une fonction et de ne pas la ré-exécuter si les paramètres de la fonction n'ont pas changé.

En effet, a chaque render, les fonctions sont recréées. Cela peut être problématique si l'on passe une fonction en props a un composant enfant : le composant enfant sera re-render a chaque fois que la fonction sera recréée.

```js
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("");

  const handleClick = useCallback(() => {
    console.log("useCallback");
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Button</button>
      <input
        type="text"
        value={string}
        onChange={(event) => setString(event.target.value)}
      />
    </>
  );
};
```

En termes de performances, useCallback est équivalent a useMemo avec une fonction en paramètre.

Dans une situation simple comme celle-ci, si l'on n'utilise pas useCallback, les performances resteront bonnes. Mais si l'on a un composant qui a beaucoup d'états et de fonctions, cela peut être problématique. Surtout si l'on a des composants enfants qui reçoivent des fonctions en props, comme c'est souvent le cas avec les composants contrôlés.

### Conclusions sur les hooks

Nous avons vu les hooks de base de ReactJS. Ils en existent d'autres, que vous pourrez être amené a utiliser plus tard, lorsque vous rencontrerez des problématiques spécifiques. La documentation de ReactJS est très bien faite et vous permettra de trouver les hooks dont vous avez besoin.

## Les custom hooks

Parfois, nous créons des composants avec une logique intéressante, qui peut être réutilisée dans d'autres composants. Par exemple, lorsque nous faisons une requête HTTP, nous avons souvent besoin de gérer l'état de la requête (chargement, données, erreur) et de gérer l'annulation de la requête lorsque le composant est détruit. Cela représente plusieurs lignes de code, que l'on devra réécrire a chaque fois que l'on fera une requête HTTP.

Pour éviter cela, on peut créer un custom hook. Un custom hook est une fonction qui commence par use et qui utilise des hooks de base. On peut ensuite utiliser ce custom hook dans nos composants.

> commencer le nom du custom hook par use permet a ReactJS de savoir que c'est un custom hook et de l'afficher dans les devtools. C'est aussi une convention simple pour comprendre que l'on utilise un hook.

```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

const MyComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <p>{data.title}</p>;
};
```

Ici, on a créé un custom hook useFetch qui permet de faire une requête HTTP. On peut ensuite utiliser ce custom hook dans nos composants. On voit que l'on a bien accès aux données de la requête HTTP. On peut aussi gérer le chargement et les erreurs.

Le composant MyComponent est beaucoup plus simple a lire et a comprendre. Et cette simplicité se retrouve dans tous les composants qui utilisent le custom hook.

On peut aussi créer un custom hook pour gérer un état complexe :

```js
const useWallet = (initialAmout = 0) => {
  const [amount, setAmount] = useState(initialAmout);
  const [error, setError] = useState(null);

  const addMoney = (amount) => {
    setAmount((prevAmount) => prevAmount + amount);
  };

  const removeMoney = (amount) => {
    if (amount > amount) {
      setError("Not enough money");
    } else {
      setAmount((prevAmount) => prevAmount - amount);
    }
  };

  const emptyWallet = () => {
    setAmount(0);
  };

  return { amount, error, addMoney, removeMoney, emptyWallet };
};
```

Ici, on a créé un custom hook useWallet qui permet de gérer un porte-monnaie. On peut ensuite utiliser ce custom hook dans nos composants.

```js
const MyComponent = () => {
  const { amount, error, addMoney, removeMoney, emptyWallet } = useWallet(100);

  return (
    <>
      <p>{amount}</p>
      <p>{error}</p>
      <button onClick={() => addMoney(10)}>Add money</button>
      <button onClick={() => removeMoney(10)}>Remove money</button>
      <button onClick={() => emptyWallet()}>Empty wallet</button>
    </>
  );
};
```

Ce qui est intéressant, c'est que l'on peut aussi retourner des fonctions qui vont modifier l'état généré dans le custom hook.

Il faut voir les custom hooks comme des briques de logique que l'on peut utiliser dans des composants pour les rendre plus simples et plus lisibles. Ces briques créeent une sorte d'instance de logique qui est propre a chaque composant. Cela permet de ne pas avoir de conflits entre les différents composants qui utilisent le custom hook.

### Quand faut-il créer un custom hook ?

Le plus simple est de designer son composant et de voir ensuite s'il est utile et possible de créer un custom hook. Il faut aussi se poser la question de la réutilisation du custom hook : est-ce que je vais réutiliser ce custom hook dans d'autres composants ? Si la réponse est non, il n'est pas nécessaire de créer un custom hook.

C'est a vous de voir si vous voulez créer un custom hook pour chaque composant ou si vous voulez créer des custom hooks plus génériques et les réutiliser dans plusieurs composants.

Extraire la logique d'un composant a chaque fois donnera un dossier de custom hooks avec beaucoup de custom hooks. Cela peut être intéressant si vous voulez réutiliser la logique dans d'autres projets. Mais cela peut aussi être source de confusion si vous avez beaucoup de custom hooks.
