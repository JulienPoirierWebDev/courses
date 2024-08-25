import { PropTypes } from "prop-types";

import styles from "../Card/Card.module.css";

const Card = ({ backgroundColor = "white", title, children }) => {
  console.log(styles);
  return (
    <div
      style={{
        width: "400px",
        padding: "30px",
        margin: "20px",
        backgroundColor: backgroundColor,
        borderRadius: "20px",
        color: "black",
      }}
    >
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default Card;
