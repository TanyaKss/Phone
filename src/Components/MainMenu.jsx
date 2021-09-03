import React, {useRef} from 'react';
import styles from './MainMenu.module.css'
import TodoGrid from './TodoGrid';

const MainMenu = ({todos}) => {

  const ref = useRef()


  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoGrid todos={todos} rootElement={ref} />
      </div>
  );
};

export default MainMenu;