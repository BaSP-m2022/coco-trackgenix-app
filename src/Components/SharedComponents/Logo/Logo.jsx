import React from 'react';
import logo from '../../../Assets/logo.png';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.companyName}>
        <h2 className={styles.title}>TRACKGENIX</h2>
        <h3 className={styles.subtitle}>DATA MANAGMENT</h3>
      </div>
    </div>
  );
};
export default Logo;
