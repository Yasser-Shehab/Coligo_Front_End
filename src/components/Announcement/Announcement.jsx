import React from "react";
import classes from "./Announcement.module.scss";
import { announces } from "../../service/Announcment";

const Announcement = () => {
  return (
    <section className={classes.announceContainer}>
      <div className={classes.heading}>
        <div className={classes.title}>
          <h1>Announcments</h1>
          <p>We educate winners keep updated</p>
        </div>
        <div className={classes.expandAll}>All</div>
      </div>
      <div>
        <ul className={classes.listContainer}>
          {announces.map((item) => {
            return (
              <li key={item.id} className={classes.list}>
                <div className={classes.info}>
                  <img src={item.icon} alt="Profile Icon" />
                  <div>
                    <p>{item.name}</p>
                    <p className={classes.spec}>{item.specialization}</p>
                  </div>
                </div>
                <div>
                  <p className={classes.description}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Announcement;
