import React from 'react';
import styles from './Folders.module.css'

const Folders = ({title}) => {
  return (
    <div>
      <div className={styles.item}>
      {title.map(item=> (
        <div className={styles.child}>
          <div>
            <span className={styles.title__child}>{item.title}</span>
          </div>
        </div>

      ))
      }
      </div>
    </div>
    // <div className={styles.item}>
    //   <div className={styles.child}>
    //     <div>
    //     <span className={styles.title__child}>{title[0].title}</span>
    //     </div>
    //   </div>
    // </div>
  )
};

export default Folders;