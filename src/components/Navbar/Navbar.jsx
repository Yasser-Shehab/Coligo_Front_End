import React from "react";
import Search from "../../Shared/Search/Search";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navContainer}>
      <div className={classes.message}>
        <h1>Welcome User,</h1>
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
