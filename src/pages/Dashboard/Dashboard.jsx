import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import DueDate from "../../components/DueDate/DueDate";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenu/SideMenu";
import classes from "./Dashboard.module.scss";
import { useState } from "react";

const Dashboard = () => {
  const [isSideClose, setIsSideClose] = useState(true);
  const handleClose = () => {
    setIsSideClose((prev) => !prev);
  };
  return (
    <div className={classes.dashboardContainer}>
      {isSideClose && (
        <aside className={classes.aside}>
          <SideMenu handleClose={handleClose} />
        </aside>
      )}
      <div>
        <Navbar handleClose={handleClose} />
        <Hero />
        <div className={classes.twoCol}>
          <Announcement />
          <DueDate />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
