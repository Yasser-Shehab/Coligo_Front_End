import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import classes from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={classes.authFormContainer}>
      <SignIn />
    </div>
  );
};

export default Auth;
