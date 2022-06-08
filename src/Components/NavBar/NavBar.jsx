import React from 'react';
import { withRouter } from 'react-router-dom';
import userIcon from '../../Assets/user.svg';
import styles from './navBar.module.css';

const NavBar = (props) => {
  if (window.location.pathname == '/home' || window.location.pathname == '/nav') {
    return null;
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.userInfo}>
          <img src={userIcon} className={styles.userImg} />
          <div className={styles.userName}>User Name</div>
          <div className={styles.userRole}>User Role</div>
        </div>
        <div className={styles.menu}>Menu</div>
        <ul className={styles.rutes}>
          <li>
            <button onClick={() => props.history.push('/projects/')}>projects</button>
          </li>
          <li>
            <button onClick={() => props.history.push('/employees/')}>employees</button>
          </li>
          <li>
            <button onClick={() => props.history.push('/time-sheets/')}>timesheets</button>
          </li>
          <li>
            <button onClick={() => props.history.push('/tasks/')}>tasks</button>
          </li>
          <li>
            <button onClick={() => props.history.push('/admins/')}>admins</button>
          </li>
          <li>
            <button onClick={() => props.history.push('/super-admins/')}>super admin</button>
          </li>
        </ul>
      </nav>
    );
  }
};

export default withRouter(NavBar);
