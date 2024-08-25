import styles from "./FlexboxContainer.module.css";
// import "./FlexboxContainer.css"

function FlexboxContainer({ children }) {
  console.log(styles);
  return <div className={styles.flex}>{children}</div>;
}

export default FlexboxContainer;
