import { useState } from "react";

function DropDown({ text, items, img }) {
  const [showList, setShowList] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <p
        onClick={() => {
          setShowList(!showList);
        }}
      >
        {img ? (
          <span style={{ width: "20px" }}>
            <img
              style={{
                maxWidth: "20px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
              src={img}
              alt=""
            />
          </span>
        ) : null}

        {text.toUpperCase()}
        <span>+</span>
      </p>
      {showList ? (
        <ul
          style={{
            position: "absolute",
            top: "25px",
            border: "1px solid black",
            padding: "10px",
            width: "calc(100% + 40px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          {items.map((item) => (
            <li
              style={{
                listStyle: "none",
                width: "calc(100% + 20px)",
                paddingLeft: "10px",
                height: "30px",
              }}
            >
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default DropDown;
