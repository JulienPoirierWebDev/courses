# Intro

Pourquoi Vitest plutot que Jest ? En effet, on peut voir partout des ressources sur Jest (et Jasmin, Moccha, etc.)

Déja, Vitest est 3 fois plus rapide.

Ensuite, jest ne fonctionne pas facilement avec Vite.

Par contre, on pourrai utiliser Jest avec NextJS, pas de problème !

A noter que pour les cas les plus courants, l'API de Vitest (le nom des fonctions) est identique a celle de Jest. Donc on peut facilement passer de l'un a l'autre.

## Pourquoi le combo Vitest + React Testing Library avec les projets viteJS ?

Vitest est un 'test runner' (comme jest), c'est a dire qu'il permet de détecter la présence de tests, de les lancer et de générer un rapport.

React Testing Library (RTS) est une lib de test faite par l'équipe de React qui donne les outils pour tester React avec une philosophie particulière :

- De la même manière que l'utilisateur consomme notre application.
- En fonctionnant comme le ferait un screen reader, basé sur les élements d'accessibilité.

RTS permet de rendre disponible ce DOM simulé a l'assertion et aux interactions.

La fonction `render` de RTS permet de simulé un DOM et de le rendre accessible via l'objet `screen`

on peut donc faire

```jsx
test("App contains correct heading", () => {
  // vitest
  render(<App />); // RTS
  const headingElement = screen.getByText(/learn react/i); // RTS
  expect(headingElement).toBeInTheDocument(); // vitest
});
```

`headingElement` contient l'élement DOM qui correspond a ce getter.
`toBeInTheDocument()` vérifie si l'élement existe bien.

## Assertions

Voici une assertion :
`expect(linkElement).toBeInTheDocument()`

`expect` est une fonction globale qui comment l'assertion.
Vient ensuite un matcher, qui peut avoir des arguments, parfois pas.

`expect(element.textContent).toBe('hello')`

`expect(elementArray).toHabeLength(7)`

Il y a des assertions spécifiques au DOM. On les retrouve notamment dans l'extension `jest-dom` de React Testing Library. Elle s'appelle `jest-dom` mais fonctionne bien avec Vitest !

// TODO Mettre le lien ici, vers les matchers.

## Jest-DOM / Vitest-DOM

Il faut importer cette lib avant chaque test, ce qui rend les matchers dispo. Ce sont des matchers spécifiques au DOM, comme son nom l'indique.
`expect(elementArray).toBeVisible()`
`expect(elementArray).toBeChecked()`
`expect(elementArray).toBeInTheDocument()`

la fonction `test` prend deux arguments : une description et une fonction de test.

Le test passe si la fonction de test s'éxécute sans problème. Si la fonction de test soulève une erreur, notamment lorsque qu'un expect n'est pas résolu, alors le test échoue.

## TDD

On peut utiliser les tests pour faire du TDD : il s'agit d'écrire le test avant le code d'implémentation, en suivant les spécifications données par le client.

Attention, le but n'est PAS d'écrire TOUS les tests avant de coder. C'est de faire par baby-step.

Quand on a notre test, il échoue puisqu'il n'y a pas de code pour y répondre : c'est le `red`.

On implémente la fonctionnalité testée, en théorie le code passe au vert. C'est le `green`.

On vient ensuite tester les cas limites : les moments les plus compliqué où dans certains cas, la fonctionnalité doit se comporter d'une certaine manière (par exemple : impossible de divisé par 0, authentification échouée, etc.). Cela refait passer les tests au `red`.

Au développeur de les faire repasser au vert et ainsi de suite.

C'est du red-green testing.

## La philosophie RTL

### Les types de test :

- Unit test :
  Permet de tester une unité de code en isolation. Pas d'interaction.

- Test d'intégration :
  Permet de tester plusieurs unités de code fonctionnant ensemble.

- Test fonctionnel :
  Permet de tester une fonction d'un logiciel : pas une fonction de code, bien un comportement du logiciel.
  Par exemple, remplir un formulaire, traiter les données pour les renvoyer sous le bon format.

- Test End To End (e2e) :
  Pas avec RTS et vitest, plutot avec Cypress, playwright, Selenium, etc

### Et que permet de faire Vitest et RTL ?

L'idée de RTL, c'est plutôt de faire du test fonctionnel : ce n'est pas le code en soi que l'on teste mais un comportement. Il faut que le comportement attendu soit là : faire apparaitre un texte lorsque l'utilisateur clique quelque part, etc.

Bien sur, on peut tout de même faire de l'unit test de base : vérifier que le composant Typography rende bien a l'écran ce qui est passé dans la props `content`. Mais ce n'est plus un test de comportement et dans certains cas, notamment les plus simples, on peut s'en passer.
(Mais pour s'entrainer, cela peut être bien de faire tout un projet en testant au maximum, même les trucs simples, pour s'habituer a la syntaxe.)

## Exemple simple

Nous avons ce bouton :

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const nextColor = color === "red" ? "blue" : "red";

  const handleClick = () => {
    console.log("here", nextColor);
    if (nextColor == "red") {
      console.log("red click");
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={color}>
        Click me to have a {nextColor} button
      </button>
    </div>
  );
}

export default App;
```

Au premier render, il contient la phrase `Click me to have a blue button` et il possède la classe `red`, faisant dans le CSS qu'il a un background red.

Si l'on veut vérifier cela, on peut produire le test suivant :

```js
test("button start with the correct color and text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");
});
```

On voit bien les trois étapes :

- Arrange : on prépare le terrain, ici via le render.
- Act : l'action, il n'y en a pas vraiment mais on récupère le bouton
- Assert : on vérifie la donnée, ici que le bouton a bien la classe `red`

Maintenant, imaginons que nous souhaitions tester le comportement au click.

Lorsque l'on clique, on attend a ce que la classe change de `red` a `blue` et que le texte change lui aussi pour affichier `Click me to have a red button`.

Dans notre test, il faudrait alors suivre ces étapes :

- Rendre le composant dans le DOM simulé avec la fonction render.
- Selectionner notre bouton.
- Lancer l'évènement click.
- Vérifier qu'il possède bien les nouvelles valeurs.

Voici le test :

```js
test("button has the correct color after click", () => {
  render(<App />); // arrange

  const button = screen.getByRole("button"); // act
  fireEvent.click(button); // act

  expect(button).toHaveClass("blue"); // assert
  expect(button).toHaveTextContent(/red/i); // assert
});
```

Voici un exemple plus complexe. Imaginons que l'on veuille rajouter un checkbox qui permet de désactiver le bouton. Quand le checkbox est coché, alors on ne peut plus cliquer sur le bouton.

```jsx
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabledButton, setDisabledButton] = useState(false);
  const nextColor = color === "red" ? "blue" : "red";

  const handleClick = () => {
    if (nextColor == "red") {
      console.log("red click");
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  const handleCheckbox = () => {
    setDisabledButton(!disabledButton);
  };

  return (
    <div>
      <button onClick={handleClick} className={color} disabled={disabledButton}>
        Click me to have a {nextColor} button
      </button>
      <input
        onChange={handleCheckbox}
        type="checkbox"
        name="disabledButton"
        id="disabledButton"
      />
      <label htmlFor="disabledButton">Bouton désactivé</label>
    </div>
  );
}

export default App;
```

Voici le test :

```js
test("when checkbox checked, the button should be disabled, but when checkbox unchecked, the button should be enabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");
  expect(button).toHaveTextContent(/blue/i);
  expect(button).toBeEnabled();

  fireEvent.click(button);

  expect(button).toHaveClass("blue");
  expect(button).toHaveTextContent(/red/i);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  fireEvent.click(button);

  expect(button).not.toBeEnabled();
  expect(button).toHaveClass("blue");
  expect(button).toHaveTextContent(/red/i);

  fireEvent.click(checkbox);

  fireEvent.click(button);

  expect(button).toBeEnabled();
  expect(button).toHaveClass("red");
  expect(button).toHaveTextContent(/blue/i);
});
```
