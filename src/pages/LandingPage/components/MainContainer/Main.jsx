import React from 'react';
import styles from './Main.module.css';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Shadow from '../Shadow/shadow.jsx';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Shadow />
      <Header />
      <div className={styles.solid}></div>
      <Content />
    </div>
  );
};
export default Main;
