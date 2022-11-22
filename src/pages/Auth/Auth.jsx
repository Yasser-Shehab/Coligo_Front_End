import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import classes from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={classes.authFormContainer}>
      <AuthForm />
    </div>
  );
};

export default Auth;
