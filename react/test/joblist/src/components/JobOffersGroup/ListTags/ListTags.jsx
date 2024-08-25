import { PropTypes } from "prop-types";
import styles from "./ListTags.module.css";

const ListTags = ({ tools, languages }) => {
  return (
    <div>
      <ul className={styles.list}>
        {tools.map((tool) => {
          return <li key={tool}>{tool}</li>;
        })}
        {languages.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
    </div>
  );
};

ListTags.propTypes = {
  tools: PropTypes.array,
  languages: PropTypes.array,
};

export default ListTags;
