import React, {useRef, useState} from 'react';
import styles from './MainMenu.module.css'
import TodoGrid from './TodoGrid';
import DotsList from './DotsList';

const MainMenu = ({todos}) => {

  const ref = useRef()

  const pageCount = Array.from(todos.reduce ((acc, curr)=>{
    acc.add(curr.page)
    return acc;
  },new Set()))

  const [openList, setOpenList] = useState(0);

  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoGrid todos={todos} rootElement={ref} />
        <div className = {styles.dotsList}>
          <DotsList pageCount={pageCount} openList={openList}/>
        </div>
      </div>
  );
};

export default MainMenu;