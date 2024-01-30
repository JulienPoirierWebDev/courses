import React from "react";
import styles from "./Card.module.css";

function Card({ card }) {
  let cardStyle;
  if (card.special === true) {
    cardStyle = `${styles.special} ${styles.card}`;
  } else {
    cardStyle = styles.card;
  }

  return (
    <div className={cardStyle}>
      <div>
        <img src={card.icone} alt="" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.content}>{card.content}</p>
        <a className={styles.link} href="#">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
