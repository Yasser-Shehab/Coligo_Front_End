import { FaHourglassHalf } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const icons = [FaHourglassHalf, HiOutlineClipboardCheck];

const dueDate = [
  {
    id: "task1",
    name: "Unit 2 quiz",
    course: "Physics 02",
    icon: icons[0],
    topic: "Unit2: Motion and forces",
    due: "20 Dec 2017 - 09:00 PM",
    type: "Start Quiz",
  },
  {
    id: "task2",
    name: "12-12 Assignment",
    course: "Arabic K12",
    icon: icons[1],
    topic: "الوحدة الثانية - الافعال",
    due: "20 Dec 2017 - 09:00 PM",
    type: "Start Assignment",
  },
];

export default dueDate;
