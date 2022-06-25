import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './navigation.module.css';
import Logo from '../SharedComponents/Logo/Logo';

function Navigation() {
  let history = useHistory();
  return (
    <section className={styles.container}>
      <Logo />
      <div className={styles.rowConteiner}>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/employee/projects');
          }}
        >
          Employee
        </button>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/super-admins');
          }}
        >
          Super Admin
        </button>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/time-sheets');
          }}
        >
          Timesheet
        </button>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/projects');
          }}
        >
          Project
        </button>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/admins');
          }}
        >
          Admin
        </button>
        <button
          className={styles.navButton}
          onClick={() => {
            history.push('/tasks');
          }}
        >
          Task
        </button>
      </div>
    </section>
  );
}

export default Navigation;
