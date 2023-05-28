import { BsFillQuestionCircleFill, BsPersonCircle, BsTools, BsUnity, BsListTask, BsPersonWorkspace } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
export const Menu = [
  {
    name: "FAQ",
    Icon: BsFillQuestionCircleFill,
    link: "faq-list",
  },
  {
    name: "Work",
    Icon: FaListAlt,
    link: "work",
  },
  {
    name: "About",
    Icon: BsPersonCircle,
    subMenu: [
      {
        name: "About Me",
        Icon: BsPersonCircle,
        link: "about-me",
      },
      {
        name: "Values & Beliefs",
        Icon: BsUnity,
        link: "values-and-beliefs",
      },
      {
        name: "Tools & Services",
        Icon: BsTools,
        link: "tools-and-services",
      },
      {
        name: "Passion Projects",
        Icon: BsPersonWorkspace,
        link: "passion-projects",
      },
      {
        name: "Work Experience",
        Icon: BsListTask,
        link: "work-experience",
      },
    ],
  },
  {
    name: "Logout",
    Icon: RiLogoutBoxFill,
    link: "logout",
  },
];
