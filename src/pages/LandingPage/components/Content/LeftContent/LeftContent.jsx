import React from 'react';
import styles from './LeftContent.module.css';
import roundIMG from '../../../../assets/img/round.svg';
import womanIMG from '../../../../assets/img/woman.svg';
import arrowIMG from '../../../../assets/img/arrow.svg';
import dottedLineIMG from '../../../../assets/img/DottedLine.svg';

const LeftContent = () => {
  return (
    <div className={styles.LeftContent}>
      <img className={styles.round} src={roundIMG} alt="" />
      <div className={styles.container}>
        <h1 className={styles.titleLeft}>New Home for Collaboration</h1>
        <p className={styles.textLeft}>
          The online collaborative whiteboard platform to
          <br />
          bring teams together, anytime, anywhere.
        </p>
        <a href="/signup" className={styles.GetStartedButton}>
          Get Started
          <img className={styles.arrow} src={arrowIMG}></img>
        </a>
        <p className={styles.inscription}>Free forever - no credit card required</p>
        <img className={styles.dottedLine} src={dottedLineIMG} alt="" />
        <img className={styles.woman} src={womanIMG} />
      </div>
    </div>
  );
};

export default LeftContent;
