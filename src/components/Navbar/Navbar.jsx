import React from "react";
import Search from "../../Shared/Search/Search";
import classes from "./Navbar.module.scss";
import { AiFillBell } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import user from "../../assets/images/AquaApple.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.userName);
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className={classes.navContainer}>
      <div className={classes.message}>
        <span className={classes.burgerMenu}>
          {!props.isSideClose ? (
            <GiHamburgerMenu onClick={props.handleClose} />
          ) : (
            <IoCloseSharp onClick={props.handleClose} />
          )}
        </span>
        <h1>Welcome {username},</h1>
      </div>
      <div className={classes.accountUtils}>
        <div className={classes.search}>
          <Search />
        </div>
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
          <span>
            <BiLogOut className={classes.iconColor} onClick={handleLogout} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
