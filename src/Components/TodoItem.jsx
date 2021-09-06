import React from 'react';
import styles from './TodoItem.module.css'
import cn from 'classnames'

const TodoItem = ({title, mini, hasClick}) => {
  return (
    <div className={cn(styles.item, {[styles.mini]: mini}, {[styles.shake]:!mini})} >
      <span className={styles.title}>{title}</span>
    </div>
  )
};

export default TodoItem;