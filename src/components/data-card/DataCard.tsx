import React from 'react'
import styles from './data.module.css'

interface DataCardProps {
    title: string;
    amount: string;
    change: number;
    state: 'positive' | 'negative'
}

const DataCard:React.FC<DataCardProps> = ({title, amount, change, state }) => {
  return (
    <div className={styles.body}>
        <h6>{title}</h6>
        <div className={styles.details}>
            <h4>{amount}</h4>
            <span className={`${styles.change} ${state === 'positive' ? styles.positive : styles.negative}`}>{`${state === 'positive'? '+' : '-'}${change}%`}</span>
        </div>
    </div>
  )
}

export default DataCard