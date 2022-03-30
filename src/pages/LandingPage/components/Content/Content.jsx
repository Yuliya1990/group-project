import React from 'react';
import styles from './Content.module.css';
import LeftContent from './LeftContent/LeftContent.jsx';
import RightContent from './RightContent/RightContent';
import starsIMG from '../../../assets/img/Stars.svg';
import plainIMG from '../../../assets/img/Plain.svg';

const Content = () => {
  return (
    <div className={styles.Content}>
      <LeftContent />
      <img className={styles.plain} src={plainIMG} alt="" />
      <img className={styles.stars} src={starsIMG} alt="" />
      <RightContent />
    </div>
  );
};

export default Content;
