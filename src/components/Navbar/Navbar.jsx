import React from "react";
import Search from "../../Shared/Search/Search";
import classes from "./Navbar.module.scss";
import { AiFillBell } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import user from "../../assets/images/AquaApple.png";

const Navbar = () => {
  return (
    <nav className={classes.navContainer}>
      <div className={classes.message}>
        <h1>Welcome User,</h1>
      </div>
      <div className={classes.accountUtils}>
        <Search />
        <div className={classes.icons}>
          <span>
            <AiFillBell className={classes.iconColor} />
          </span>
          <span>
            <HiMail className={classes.iconColor} />
          </span>
          <span className={classes.imageContainer}>
            <img className={classes.profileImg} src={user} alt="User Image" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
