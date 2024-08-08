import React from "react";
import styles from "./header.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.body}>
      <nav className={styles.links}>
        <Link href={'/'} className={styles.link}>Company Dashboard</Link>
        <Link href={'/send'} className={`${styles.link} ${styles.disabled}`}>Send Money</Link>
        <Link href={'/exchange'} className={`${styles.link} ${styles.disabled}`}>Exchange Funds</Link>
      </nav>
      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.icon}><FaArrowUp /></span>
          <div className={styles.text}>
            <p>Monthly income</p>
            <h3>€ 49,201</h3>
          </div>
        </div>
        <div className={styles.detail}>
          <span className={styles.icon}><FaArrowDown /></span>
          <div className={styles.text}>
            <p>Monthly expenditure</p>
            <h3>€ 42,743</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
