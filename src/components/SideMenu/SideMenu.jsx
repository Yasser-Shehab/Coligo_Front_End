import React from "react";
import classes from "./SideMenu.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaHome, FaRegCalendarAlt, FaBook, FaGraduationCap, FaChartLine } from "react-icons/fa";

const navLinks = [
  {
    id: "link1",
    title: "Home",
    icon: <FaHome />,
  },
  {
    id: "link2",
    title: "Schedule",
    icon: <FaRegCalendarAlt />,
  },
  {
    id: "link3",
    title: "Courses",
    icon: <FaBook />,
  },
  {
    id: "link4",
    title: "Gradebook",
    icon: <FaGraduationCap />,
  },
  {
    id: "link5",
    title: "Performance",
    icon: <FaChartLine />,
  },
  {
    id: "link6",
    title: "Announcment",
    icon: <HiSpeakerphone />,
  },
];

const SideMenu = (props) => {
  return (
    <div className={classes.sidecontainer}>
      <div className={classes.top}>
        <div>
          <h1 className={classes.header}>Coligo</h1>
        </div>
        <div className={classes.close}>
          <IoCloseSharp onClick={props.handleClose} />
        </div>
      </div>
      <div>
        <ul>
          {navLinks.map((item) => {
            return (
              <div key={item.id} className={classes.listContainer}>
                <li className={classes.listStyle}>
                  <span>{item.icon}</span>
                  {item.title}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
