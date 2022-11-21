import React from "react";
import classes from "./Hero.module.scss";
import study from "../../assets/images/study.png";
import Button from "../../Shared/Button/Button";

const Hero = () => {
  return (
    <section className={classes.heroContainer}>
      <div className={classes.heroStyle}>
        <h1>EXAMS TIME</h1>
        <p>
          Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for
          your exams.
        </p>

        <p className={classes.quote}>"Nothing happens until something moves" - Albert Einstein</p>
        <Button
          title="View exams tips"
          style={{ backgroundColor: "#4ECDC4", color: "white", marginTop: 30 }}
        />
      </div>
    </section>
  );
};

export default Hero;
