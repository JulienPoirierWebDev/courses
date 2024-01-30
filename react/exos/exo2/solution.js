// 1 - Créer un élément HTML de type div avec React.createElement

const div = React.createElement(
  "div",
  { id: "test" },
  "Je m'appelle Bob et je suis un composant React"
);

React.root = document.getElementById("root");

// 2 - Selectionner la div avec l'id "root"

const divRoot = document.getElementById("root");

// 3- Créer le root element

const root = ReactDOM.createRoot(divRoot);

// 4 - Rendre le composant dans le root element

root.render(div);

// 5 - Créer un composant React contenant un H1 avec le texte "Je suis un composant React" et deux bouttons avec le texte "Cliquez moi" et "Cliquez moi aussi"
// 5.1 - Ajouter les classes "button red" et "button blue" aux bouttons
// 5.2 - Ajouter la classe "container" à la div contenant le H1 et les bouttons
// 5.3 Ajouter un évènement click sur le boutton "Cliquez moi" qui affiche une alerte avec le texte "Vous avez cliqué sur le boutton rouge"

const h1 = React.createElement("h1", null, "Je suis un composant React");
const button1 = React.createElement(
  "button",
  {
    className: "button red",
    onClick: () => alert("Vous avez cliqué sur le boutton rouge"),
  },
  "Cliquez moi"
);
const button2 = React.createElement(
  "button",
  {
    className: "button blue",
    onClick: (e) => {
      e.stopPropagation();
      alert("Vous avez cliqué sur le boutton bleu");
    },
  },
  "Cliquez moi aussi"
);

const div2 = React.createElement(
  "div",
  {
    className: "container",
    onClick: (e) => {
      e.stopPropagation();
      alert("Vous avez cliqué sur le container");
    },
  },
  h1,
  button1,
  button2
);

// 6 - Rendre le composant dans le root element

root.render(div);
