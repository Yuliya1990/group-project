import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../../assets/img/logo.svg';

const Header = () => {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logoImage} alt="" />
      <div className={styles.headerButtons}>
        <a className={styles.signIn} href="/signin">
          Sign In
        </a>
        <a className={styles.signUp} href="/signup">
          Sign up free
        </a>
      </div>
    </div>
  );
};

export default Header;
