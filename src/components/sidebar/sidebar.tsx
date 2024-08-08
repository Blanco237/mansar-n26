import React from "react";
import styles from "./sidebar.module.css";
import LogoIcon from "@/icons/logo.icon";
import NavItem from "./navItem";
import {
  FaCalendar,
  FaChartLine,
  FaChevronRight,
  FaCog,
  FaCreditCard,
  FaHeadphones,
  FaHome,
  FaMoneyBill,
  FaPiggyBank,
  FaPlus,
} from "react-icons/fa";
import NavDropDown from "./navDropDown";
import { FaArrowsTurnRight, FaShield } from "react-icons/fa6";
import NavUser from "./navUser";

const actions = [
  {
    icon: <FaCog />,
    title: "Company Setings",
    subtitle: "IBAN, transfers, top-up rules.",
  },
  {
    icon: <FaShield />,
    title: "Accounts and Privacy",
    subtitle: "Manage Accounts",
  },
  {
    icon: <FaMoneyBill />,
    title: "Invoice Manager",
    subtitle: "View and Manage Invoices",
  },
  {
    icon: <FaPlus />,
    title: "Create new invoice",
    subtitle: "Add new invoice",
  },
];

const Sidebar = () => {
  return (
    <section className={styles.body}>
      <div className={styles.infos}>
        <span>
          <LogoIcon className="size-12" />
        </span>
        <h3 className={"text-3xl"}>
          Welcome back <br />
          <b>David C.</b> to the <br />
          company dashboard.
        </h3>
        <p className={"text-sm"}>
          You have received{" "}
          <span className="underline font-semibold">2 new requests</span> from
          your employees. <br />
          <span className="font-semibold">4 invoices</span> were recently paid,
          and <span className="underline font-semibold">12 more await</span>{" "}
          <br /> payment.
        </p>
        <div className={styles.buttons}>
          <button>Send Money</button>
          <button>Check Request(2)</button>
        </div>
      </div>
      <div className={styles.actions}>
        {actions.map((action) => (
          <Action {...action} key={action.title} />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;

interface ActionProps {
  icon: any;
  title: string;
  subtitle: string;
}

const Action: React.FC<ActionProps> = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.action}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.text}>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
      <span className={styles.chevron}>
        <FaChevronRight />
      </span>
    </div>
  );
};
