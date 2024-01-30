import React from "react";
import Button from "./Button";
import styles from "./Header.module.css";
import LogoContainer from "./LogoContainer";

function Header() {
  return (
    <div className={styles.header}>
      <LogoContainer />
      <div className={styles.container}>
        <Button text={"Submit a request"} type="outline" />
        <Button text={"Sign in"} type="full" />
      </div>
    </div>
  );
}

export default Header;
