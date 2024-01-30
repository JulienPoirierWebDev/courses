import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

const ListItem = ({ item, type }) => {
  let liStyle;

  if (type === "footer") {
    liStyle = `${styles.item} ${styles.footer} `;
  } else if (type === "header") {
    liStyle = `${styles.item} ${styles.header} `;
  }
  return <li className={liStyle}>{item}</li>;
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListItem;
