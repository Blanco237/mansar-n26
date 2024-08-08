import React from "react";
import styles from "./request.module.css";
import { FaBell } from "react-icons/fa";
import Request from "./Requests";

const requests = [
  {
    image:
      "https://images.unsplash.com/photo-1722799037558-69a4dc8e08d1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Meyers",
    date: "02/08/1953",
    time: "19:23",
    amount: "€492",
  },
  {
    image:
      "https://images.unsplash.com/photo-1722385495887-7b2a9b61bc53?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mike Thompson",
    date: "12/02/1974",
    time: "09:57",
    amount: "-",
  },
];

const EmployeeRequests = () => {
  return (
    <div className={styles.body}>
      <header>
        <h3>Employee Requests</h3>
        <span>
          <FaBell />
        </span>
      </header>
      <div className={styles.requests}>
        {requests.map((request) => (
          <Request key={request.name} {...request} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeRequests;
