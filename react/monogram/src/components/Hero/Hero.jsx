import React from "react";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp)",
        backgroundPosition: "top",
        minHeight: "max(90vh,400px)",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 100vmax rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
        gap: "20px",
        position: "relative",
        zIndex: "4",
      }}
    >
      <h1>
        A CONSOLE FOR <br /> EVERY WORKFLOW
      </h1>
      <p>Discover the perfect console for yours.</p>

      <p
        style={{
          position: "absolute",
          bottom: "30px",
          transform: "rotate(90deg)",
          color: "red",
        }}
        className={styles.arrow}
      >
        {">"}
      </p>
    </div>
  );
}

export default Hero;
