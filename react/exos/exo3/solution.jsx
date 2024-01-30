// Etape 1 : créer le composant App
// -> le composant App doit retourner un titre h1 et un paragraphe p
// -> le composant App doit être rendu dans la div #root

const App = () => {
  return (
    <div>
      <h1>Exo 3</h1>
      <p>
        Créer un composant <code>App</code> qui affiche un titre <code>h1</code>{" "}
        et un paragraphe <code>p</code>.
      </p>
      <p>
        Le composant <code>App</code> doit être rendu dans la div{" "}
        <code>root</code>.
      </p>
    </div>
  );
};

// Etape 2 : selection la div #root
const rootDiv = document.getElementById("root");

// Etape 3 : créer le root React
const root = ReactDOM.createRoot(rootDiv);

// Etape 4 : rendre le composant App dans le root React

root.render(App());

// Etapes BONUS :
// -> créer un composant Title qui affiche un titre h1
// -> créer un composant Paragraph qui affiche un paragraphe p
// -> utiliser ces composants dans le composant App
// -> créer d'autres composants pour afficher d'autres éléments HTML

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Paragraph = () => {
  return <p>Paragraphe</p>;
};

const App2 = () => {
  return (
    <div>
      <Title title={"hello"} />
      <Paragraph />
    </div>
  );
};

root.render(<App2 />);
