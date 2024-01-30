// Etape 1 : créer le composant App
// -> le composant App doit retourner un titre h1 et un paragraphe p
// -> le composant App doit être rendu dans la div #root

const App = () => {
  return (
    <>
      <h1>Test</h1>
      <p>Hello</p>
    </>
  );
};

// Etape 2 : selection la div #root
const rootDiv = document.querySelector("#root");

// Etape 3 : créer le root React

const root = ReactDOM.createRoot(rootDiv);
root.render(<App />);

// Etape 4 : rendre le composant App dans le root React

// Etapes BONUS :
// -> créer un composant Title qui affiche un titre h1
// -> créer un composant Paragraph qui affiche un paragraphe p
// -> utiliser ces composants dans le composant App
// -> créer d'autres composants pour afficher d'autres éléments HTML
