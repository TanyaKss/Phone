import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';



const TodoList = ({todos}) => {
  return <div className ={styles.wrapper} >
    {todos.map(e => <TodoItem title={e}/>)}
    </div>;
};

export default TodoList;