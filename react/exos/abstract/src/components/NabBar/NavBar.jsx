import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/starter-pokemon-gen1"}>Poké 1</Link>
          <Link to={"/starter-pokemon-gen2"}>Poké 2</Link>
          <Link to={"/tasks"}>Tasks</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
