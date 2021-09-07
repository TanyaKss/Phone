import React, {useRef, useState, useEffect} from 'react';
import styles from './MainMenu.module.css'
import TodoGrid from './TodoGrid';
import DotsList from './DotsList';

const MainMenu = ({todos}) => {

  const ref = useRef()

  const pageCount = Array.from(todos.reduce ((acc, curr)=>{
    acc.add(curr.page)
    return acc;
  },new Set()))

  const [pageIndex] = useState(1);

  //формирование страницы относительно page
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {

    setCurrentList(todos.filter((e)=>e.page===pageIndex))
    
  }, [pageIndex, todos]);
 
  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoGrid rootElement={ref} currentList={currentList}/>
        <div className = {styles.dotsList}>
          <DotsList pageCount={pageCount} pageIndex={pageIndex} />
        </div>
      </div>
  );
};

export default MainMenu;