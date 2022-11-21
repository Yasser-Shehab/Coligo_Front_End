import React from "react";
import classes from "./Search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchIcon}>
        <HiMagnifyingGlass />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
