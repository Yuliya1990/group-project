import React from 'react';
import styles from './shadow.module.css';

const Shadow = () => {
  return (
    <>
      <div className={styles.shadowVert}></div>
      <div className={styles.shadowHoriz}></div>
    </>
  );
};

export default Shadow;
