import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import userIcon from '../../Assets/user.svg';
import styles from './navBar.module.css';

const NavBar = () => {
  if (location.pathname == '/home' || location.pathname == '/nav') {
    return null;
  } else if (
    location.pathname === '/employees/' ||
    location.pathname === '/employees/timesheet' ||
    location.pathname === '/employees/timesheetAdd' ||
    location.pathname === '/employees/timesheetEdit' ||
    location.pathname === '/employees/projects' ||
    location.pathname === '/employees/profile'
  ) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.userInfo}>
          <img src={userIcon} className={styles.userImg} />
          <div className={styles.userName}>user name</div>
          <div className={styles.userRole}>user role</div>
        </div>
        <div className={styles.menu}>menu</div>
        <ul className={styles.rutes}>
          <li>
            <Link className={styles.links} to="/employees/timesheet">
              timesheet
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/employees/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/employees/profile">
              personal Information
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.userInfo}>
          <img src={userIcon} className={styles.userImg} />
          <div className={styles.userName}>user name</div>
          <div className={styles.userRole}>user role</div>
        </div>
        <div className={styles.menu}>menu</div>
        <ul className={styles.rutes}>
          <li>
            <Link className={styles.links} to="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/employees/projects">
              employees
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/time-sheets">
              timesheets
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/tasks">
              tasks
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/admins">
              admins
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/super-admins">
              super admins
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default withRouter(NavBar);
