function Header() {
  const items = ["Accueil", "Produits", "Notre culture", "Contact"];

  const jsxItems = items.map((element) => {
    return <li key={element}>{element}</li>;
  });
  return (
    <header className="mainHeader">
      <nav>
        <ul>{jsxItems}</ul>
      </nav>
    </header>
  );
}

export default Header;
