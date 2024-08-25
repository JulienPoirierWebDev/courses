import DropDown from "./DropDown";
import MenuLink from "./MenuLink";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "burlywood",
        height: "50px",
        padding: "20px",
        position: "fixed",
        top: "20px",
        left: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <div className="logo">
        <img src="#" alt="mon-logo" />
        <p>MONOGRAM</p>
      </div>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginRight: "20px",
        }}
      >
        <MenuLink text={"how it works"} url={"#"} />

        <DropDown
          text="workflow"
          items={[
            {
              name: "contact",
            },
            { name: "Autre" },
            { name: "Licence" },
          ]}
        />

        <MenuLink text={"download"} url={"#"} />
        <MenuLink text={"blog"} url={"#"} />
        <MenuLink text={"support"} url={"#"} />
        <MenuLink text={"shop"} url={"#"} />
        <DropDown
          text={"devise"}
          items={[
            {
              name: "item1",
            },
            { name: "item2" },
            { name: "other item" },
          ]}
          img={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"}
        />
      </nav>
    </div>
  );
}

export default Header;
