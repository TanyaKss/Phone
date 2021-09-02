import React from 'react';
import styles from './TodoItem.module.css'


const TodoItem = ({title}) => {
  return (
    <div className={styles.item}>
      <div>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
};

export default TodoItem;