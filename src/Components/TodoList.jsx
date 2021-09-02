import React, {useState} from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
// import ModalItem from './ModalItem';
import Folders from './Folders';


const TodoList = ({todos}) => {
  // const [modalTitle, setModalTitle]=useState('');

  // function onClick(title) {
  //   setModalTitle(title);
  // }

  // function onModalClick() {
  //   setModalTitle('');
  // }

  // e.children.title

  return <div className ={styles.wrapper} >
    {todos.map((e) => {
      if (e.children) {
        return (
          <Folders title={e.children}/>
        )
    }
      else
        return <TodoItem title={e.title}/>
    })}
    {/* { {modalTitle && <ModalItem title={modalTitle} />} } */}
    </div>;
};

export default TodoList;