import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import DueDate from "../../components/DueDate/DueDate";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenu/SideMenu";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={classes.dashboardContainer}>
      <aside className={classes.aside}>
        <SideMenu />
      </aside>
      <div>
        <Navbar />

        <Hero />

        <Announcement />

        <DueDate />
      </div>
    </div>
  );
};

export default Dashboard;
