import React from 'react';
import styles from './loading.module.css';
import Cocoman from 'Assets/cocoman.png';

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={Cocoman} alt="coco girando" className={styles.rotate} />
    </div>
  );
};

export default Loading;
