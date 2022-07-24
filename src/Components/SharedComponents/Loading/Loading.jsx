import React from 'react';
import styles from './loading.module.css';
import LoadingImage from 'Assets/loading.png';

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={LoadingImage} alt="loading..." className={styles.rotate} />
    </div>
  );
};

export default Loading;
