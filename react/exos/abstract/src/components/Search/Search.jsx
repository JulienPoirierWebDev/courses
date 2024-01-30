import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.searchContainer}>
      <h1>How can we help?</h1>
      <input type="text" name="search" id="search" placeholder="Search" />
      <label htmlFor="search" hidden>
        search
      </label>
    </div>
  );
}

export default Search;
