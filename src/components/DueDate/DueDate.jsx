import React from "react";
import classes from "./DueDate.module.scss";

import Button from "../../Shared/Button/Button";
import dueDate from "../../service/fakeQuizesService";
import { FaHourglassHalf } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const DueDate = () => {
  return (
    <section className={classes.dueDateContainer}>
      <div className={classes.heading}>
        <div className={classes.title}>
          <h1>What's Date</h1>
          <p>Sometimes "LATER" becomes "NEVER" Go Now</p>
        </div>
        <div className={classes.expandAll}>All</div>
      </div>
      <ul className={classes.listContainer}>
        {dueDate.map((item) => {
          return (
            <li key={item.id} className={classes.listItem}>
              <div className={classes.listHeader}>
                <span>{<item.icon />}</span> <p>{item.name}</p>
              </div>
              <p className={classes.marginTop}>Course : {item.course}</p>
              <p className={classes.marginTop}>Topic : {item.topic}</p>
              <p className={classes.marginTop}>Due to : {item.due}</p>
              <Button
                title={item.type}
                style={{
                  backgroundColor: "white",
                  border: "2px solid #4ecdc4",
                  color: "#4ecdc4",
                  width: "100%",
                  marginTop: "1rem",
                }}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DueDate;
