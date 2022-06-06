import React from 'react';
import styles from './GenBtn.module.css';

const GenericButton = ({
  buttonName,
  buttonColor,
  buttonBorderColor,
  buttonTextColor,
  buttonFunction
}) => {
  return (
    <button
      className={styles.buttonStyle}
      onClick={buttonFunction}
      style={{
        backgroundColor: buttonColor,
        borderColor: buttonBorderColor,
        color: buttonTextColor
      }}
    >
      {buttonName}
    </button>
  );
};

export default GenericButton;
