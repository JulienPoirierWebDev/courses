import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css";

function CardList() {
  const cards = [
    {
      icone: "/icones/img1.png",
      title: "Using Abstract",
      content:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      icone: "/icones/img2.png",
      title: "Manage your account",
      content:
        "Configure your account settings, such as your email, profile details, and password.",
      special: false,
    },
    {
      icone: "/icones/img3.png",
      title: "Manage organizations, teams, and projects",
      content:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
      special: false,
    },
    {
      icone: "/icones/img4.png",
      title: "Manage billing",
      content: "Change subscriptions and payment details.      ",
    },
    {
      icone: "/icones/img5.png",
      title: "Authenticate to Abstract",
      content:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.    ",
    },
    {
      icone: "/icones/img6.png",
      title: "Abstract support",
      content: "Get in touch with a human.",
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => {
        return <Card key={card.content} card={card} />;
      })}
    </div>
  );
}

export default CardList;
