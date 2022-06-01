import React from 'react';
import styles from '../admins.module.css';

const AdminForm = () => {
  console.log('Form');
  return (
    <div>
      <div>Form</div>
      <a href="/admins" className={styles.addBtn}>
        Back
      </a>
    </div>
  );
};

export default AdminForm;
