import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes.button} style={props.style}>
      {props.title}
    </button>
  );
};

export default Button;
