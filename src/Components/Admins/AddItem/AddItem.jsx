import React from 'react';
import styles from './addItem.module.css';

const AddItem = () => {
  console.log('Form');
  return (
    <div>
      <div>Form</div>
      <a href="/admins" className={styles.button}>
        Back
      </a>
    </div>
  );
};

export default AddItem;
