import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";

interface NavUserProps {
  image: string;
  name: string;
}

const NavUser: React.FC<NavUserProps> = ({ image, name }) => {
  return (
    <div className={styles.user}>
      <Image
        width={50}
        height={50}
        src={image}
        alt="User"
        className={styles.image}
      />
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default NavUser;
