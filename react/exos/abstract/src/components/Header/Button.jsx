import styles from "./Button.module.css";

const Button = ({ text, type }) => {
  let buttonStyle;

  if (type === "outline") {
    buttonStyle = `${styles.button} ${styles.outline}`;
  } else if (type === "full") {
    buttonStyle = `${styles.button} ${styles.full}`;
  }

  return <button className={buttonStyle}>{text}</button>;
};

export default Button;
