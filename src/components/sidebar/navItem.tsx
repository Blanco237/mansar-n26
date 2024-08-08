"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

interface NavItemProps {
  link: string;
  icon: any;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, icon, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`${styles.link} ${
        pathname.startsWith(link) ? styles.active : ""
      }`}
    >
      <span className={styles.icon}>{icon}</span>
      <p className={styles.text}>{title}</p>
    </Link>
  );
};

export default NavItem;
