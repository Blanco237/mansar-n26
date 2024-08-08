import React from "react";
import styles from "./dash.module.css";
import { FaMoneyBill, FaReceipt, FaShoppingBag } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

const cards = [
    {
        icon: <FaShoppingBag />,
        title:  'Daily Shopping',
        subtitle: 'Aggresive Shopping offers.',
        label: 'ORDERS',
        value: '05',
    },
    {
        icon: <FaReceipt />,
        title:  'Request',
        subtitle: 'Update rights and permissions.',
        label: 'NEW REQUESTS',
        value: '04',
    },
    {
        icon: <FaBoltLightning />,
        title:  'Investment Bundle',
        subtitle: 'Check your investments',
        label: 'UPDATES',
        value: '5',
    },
    {
        icon: <FaReceipt />,
        title:  'Pay Slips',
        subtitle: 'Create & Export Pay Slips',
        label: 'PAY SLIPS',
        value: '311',
    },
    {
        icon: <FaMoneyBill />,
        title:  'Sales Revenue',
        subtitle: 'Check your performance',
        label: 'Sales',
        value: '412',
    },
]

const MyDashboard = () => {
  return (
    <section className={styles.body}>
      <h4>My Dashboard</h4>
      <div className={styles.cards}>
        {
            cards.map((card) => (<DashCard key={card.title} {...card} />))
        }
      </div>
    </section>
  );
};

export default MyDashboard;

interface DashCardProps {
    icon: any;
    title: string;
    subtitle: string;
    label: string;
    value: string | number
}

const DashCard:React.FC<DashCardProps> = ({title, icon, subtitle, label, value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon}>
          {icon}
        </span>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
      <div className={styles.details}>
        <p>{label}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};
