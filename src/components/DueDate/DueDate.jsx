import React from "react";
import classes from "./DueDate.module.scss";

import { FaHourglassHalf } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Button from "../../Shared/Button/Button";

export const dueDate = [
  {
    id: "task1",
    name: "Unit 2 quiz",
    course: "Physics 02",
    icon: <FaHourglassHalf />,
    topic: "Unit2: Motion and forces",
    due: "20 Dec 2017 - 09:00 PM",
    type: "Start Quiz",
  },
  {
    id: "task2",
    name: "12-12 Assignment",
    course: "Arabic K12",
    icon: <HiOutlineClipboardCheck />,
    topic: "الوحدة الثانية - الافعال",
    due: "20 Dec 2017 - 09:00 PM",
    type: "Start Assignment",
  },
];

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
                <span>{item.icon}</span> <p>{item.name}</p>
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
