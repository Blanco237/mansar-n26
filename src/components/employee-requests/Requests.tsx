'use client';

import React, { useState } from 'react';
import styles from './request.module.css';
import Image from 'next/image';
import { FaCheck, FaEllipsisV } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

interface RequestProps {
    image: string;
    name: string;
    date: string;
    time: string;
    amount: string;
  }
  
  const Request: React.FC<RequestProps> = ({
    image,
    name,
    date,
    time,
    amount,
  }) => {
    const [actionsOpen, setActionsOpen] = useState(false);

    return (
      <div className={styles.request}>
        <div className={styles.employee}>
          <Image
            width={50}
            height={50}
            className={styles.avatar}
            src={image}
            alt="Some person"
          />
          <div className={styles.details}>
            <h4>{name}</h4>
            <p>
              {date} <span className="font-medium text-black">{time}</span>
            </p>
          </div>
        </div>
        <div className={styles.others}>
          <h3>{amount}</h3>
          <div className={`${styles.actions} ${actionsOpen ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <span className={styles.icon}>
              <FaCheck />
            </span>
            <span className={styles.icon}>
              <FaX />
            </span>
          </div>
          <span className={styles.more} onClick={() => setActionsOpen(a => !a)}>
            <FaEllipsisV />
          </span>
        </div>
      </div>
    );
  };
  

  export default Request