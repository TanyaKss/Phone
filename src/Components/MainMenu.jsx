import React, {useRef} from 'react';
import styles from './MainMenu.module.css'
import TodoGrid from './TodoGrid';
import DotsList from './DotsList';

const MainMenu = ({todos}) => {

  const ref = useRef()


  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoGrid todos={todos} rootElement={ref} />
        <DotsList/>
      </div>
  );
};

export default MainMenu;