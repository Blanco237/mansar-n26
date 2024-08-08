"use client";

import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { FaChevronDown, FaLock } from "react-icons/fa";

interface NavDropDownProps {
  title: string;
  icon: any;
  items: Array<{ label: string; value: string }>;
}

const NavDropDown: React.FC<NavDropDownProps> = ({ title, icon, items }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={styles.drop}>
      <div className={styles.top} onClick={() => setCollapse((cl) => !cl)}>
        <span className={styles.icon}>{icon}</span>
        <p className={styles.text}>{title}</p>
        <span className={styles.chevron}>
          <FaChevronDown />
        </span>
      </div>
      <div
        className={`${styles.content} ${
          collapse ? styles.open : styles.closed
        }`}
      >
        {items.map((item) => (
          <div className={styles.account} key={item.label}>
            <p className={styles.label}>{item.label}</p>
            <p className={styles.amount}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDropDown;
