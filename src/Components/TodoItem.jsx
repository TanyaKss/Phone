import React from 'react';
import styles from './TodoItem.module.css'
import cn from 'classnames'
import Icons from './Icons';

const TodoItem = ({title, mini, icon}) => {
   
  return (
    <div>
      <div className={cn(styles.item, {[styles.mini]: mini}, {[styles.shake]:!mini})}>
      <Icons className={styles.icon} name= {icon}/>
      </div>
        <div className={cn(styles.title)}>{!mini && title}</div>
    </div>
  
  )
};

export default TodoItem;