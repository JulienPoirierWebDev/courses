import List from "./List";

const Footer = () => {
  document.documentElement.style.setProperty("--color1", "#ff0000");

  const items = ["Mentions Légales", "Blabla"];
  return (
    <>
      <List items={items} type={"footer"} />
    </>
  );
};

export default Footer;
