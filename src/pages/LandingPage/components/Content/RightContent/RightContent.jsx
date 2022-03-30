import React from 'react';
import styles from './RightContent.module.css';
import manIMG from '../../../../assets/img/Man.svg';

const RightContent = () => {
  return (
    <div className={styles.RightContent}>
      <img className={styles.man} src={manIMG} />
      <h1 className={styles.titleRight}>Stay organized and connected</h1>
      <p className={styles.textRight}>
        Bring your team’s work together in one shared space.
        <br /> Choose the project view that suits your style, and <br />
        collaborate no matter where you are.
      </p>
    </div>
  );
};
export default RightContent;
