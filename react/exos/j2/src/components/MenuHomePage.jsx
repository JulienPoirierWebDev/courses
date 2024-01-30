import List from "./List";

const MenuHomePage = () => {
  const items = ["Acceuil", "Nos Produits", "Contact"];

  return (
    <nav>
      <List items={items} type={"header"} />
    </nav>
  );
};

export default MenuHomePage;
