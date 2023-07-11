import styles from "./RoundBorder.module.css";

const RoundBorder = ({ children, color }) => {
  let colorStyle = "";

  if (color === "red") {
    colorStyle = styles.red;
  } else if (color === "blue") {
    colorStyle = styles.blue;
  } else if (color === "green") {
    colorStyle = styles.green;
  } else if (color === "yellow") {
    colorStyle = styles.yellow;
  } else {
    colorStyle = styles.defaultColor;
  }
  return (
    <div className={`${styles.container} + ${colorStyle}`}>{children}</div>
  );
};

export default RoundBorder;
