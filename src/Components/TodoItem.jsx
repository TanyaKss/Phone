import React from 'react';
import styles from './TodoItem.module.css'
import cn from 'classnames'

const TodoItem = ({title, mini}) => {
   
  return (
    <div  className={cn(styles.title, {[styles.miniTitle]: mini})}>
      <div className={cn(styles.item, {[styles.mini]: mini}, {[styles.shake]:!mini})}>
      </div>
        {title}
    </div>
  
  )
};

export default TodoItem;