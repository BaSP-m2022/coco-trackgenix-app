import React from 'react';
import styles from './GenBtn.module.css';

const GenericButton = ({ buttonName }) => {
  return (
    <button href="" className={styles.buttonStyle}>
      {buttonName}
    </button>
  );
};

export default GenericButton;
