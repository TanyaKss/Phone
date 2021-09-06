import React from 'react';
import Dots from './Dots';
import styles from './DotsList.module.css'



const DotsList = ({active}) => {
  return (
  <div className={styles.wrapperList}>
    <Dots/>
  </div>
  )
};

export default DotsList;