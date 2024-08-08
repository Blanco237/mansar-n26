import React from "react";
import styles from "./expenses.module.css";

const expenses = [
  {
    name: "Paula Morenno",
    date: "10/04/2020",
    time: "20:20",
    expense: "-€4,230",
    organization: "Blanco Limited",
    status: "INVOICE NOT ADDED"
  }
]

const LastExpenses = () => {
  return (
    <div className={styles.body}>
      <header>
        <div>
          <h3>Last Expenses</h3>
          <p>10/04/2020</p>
        </div>
        <h3>-€9,230</h3>
      </header>
      <div className={styles.expenses}>
        {
          expenses.map((exp) => (<Expense {...exp} key={exp.name} />))
        }
      </div>
    </div>
  );
};

export default LastExpenses;

interface ExpenseProps {
  name: string;
  date: string;
  time: string;
  expense: string;
  organization: string;
  status: string;
}

const Expense:React.FC<ExpenseProps> = ({name, date, time, expense, organization, status}) => {

  const getInitials = (name: string) => {
    const nameParts = name.split(" ")
    nameParts.length = 2;
    const initials = nameParts.map(part => part[0].toUpperCase()).join("");
    return initials;
}

  return (
    <div className={styles.expense}>
      <div className={styles.employee}>
        <div className={styles.avatar}>{getInitials(name)}</div>
        <div className={styles.details}>
          <h4>{name}</h4>
          <p>
            {date} <span>{time}</span>
          </p>
        </div>
      </div>
      <div className={styles.amount}>
        <h3>{expense}</h3>
        <p>{organization}</p>
      </div>
      <div className={styles.status}>{status}</div>
    </div>
  );
};
