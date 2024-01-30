import PropTypes from "prop-types";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = ({ items, type }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return <ListItem key={item} item={item} type={type} />;
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
