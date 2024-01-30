import React from "react";

function Footer() {
  const other = [
    "info@abstract.com",
    "© Copyright 2023",
    "Abstract Studio Design, Inc.",
    "All rights reserved",
  ];

  const footerParts = [
    {
      title: "Abstract",
      elements: ["Start Trial", "Pricing", "Download"],
    },
    {
      title: "Resources",
      elements: ["Blog", "Help Center", "Release Notes", "Status"],
    },
    {
      title: "Community",
      elements: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
    },
    {
      title: "Company",
      elements: ["About Us", "Careers", "Legal", "Contact Us"],
    },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "var(--color3)",
    color: "var(--color4)",
    flexWrap: "wrap",
  };

  const footerPartsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "var(--color3)",
    color: "var(--color4)",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <div style={footerPartsStyle}>
        {footerParts.map((part) => {
          return (
            <div key={part.title} style={{ margin: "40px" }}>
              <h3>{part.title}</h3>
              <ul>
                {part.elements.map((element) => {
                  return (
                    <li key={element} style={{ listStyle: "none" }}>
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div style={{ margin: "20px" }}>
        {other.map((element) => {
          return <p key={element}>{element}</p>;
        })}
      </div>
    </div>
  );
}

export default Footer;
