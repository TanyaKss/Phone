import React from 'react';
import styles from './Dots.module.css'

const Dots = ({}) => {
  return (
    <div className={styles.wrapper}>
    <div  className={styles.active}/>
    <div  className={styles.noActive}/> 
    </div>
  )
};

export default Dots;