import React from 'react';
import styles from './Dots.module.css'
import cn from 'classnames'

// className={cn(styles.noActive, {[styles.active]: openList})}

const Dots = ({active}) => {
  return (
    <div >
      <div className={cn({[styles.active]: active}, {[styles.noActive]:!active})}/> 
    </div>
  )
};

export default Dots;