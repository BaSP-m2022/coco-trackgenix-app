import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import userIcon from '../../Assets/user.svg';
import styles from './navBar.module.css';

const NavBar = (props) => {
  const role = sessionStorage.getItem('role');
  if (!role) {
    return null;
  }
  // const { routes } = props;
  switch (role) {
    case 'EMPLOYEE':
      return (
        <nav className={styles.navbar}>
          <div className={styles.userInfo}>
            <img src={userIcon} className={styles.userImg} />
            <div className={styles.userName}>user name</div>
            <div className={styles.userRole}>user role</div>
          </div>
          <div className={styles.menu}>menu</div>
          <ul className={styles.routes}>
            <li>
              <Link className={styles.links} to="/employee/projects">
                projects
              </Link>
            </li>
            <li>
              <Link className={styles.links} to="/employee/timesheet">
                timesheet
              </Link>
            </li>
            <li>
              <Link className={styles.links} to="/employee/profile">
                personal Information
              </Link>
            </li>
          </ul>
        </nav>
      );

    case 'ADMIN':
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
              <Link className={styles.links} to="/admins/projects">
                projects
              </Link>
            </li>
            <li>
              <Link className={styles.links} to="/admins/employees">
                employees
              </Link>
            </li>
            <li>
              <Link className={styles.links} to="/admins/time-sheets">
                timesheets
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

    case 'SUPERADMIN':
      return (
        <nav className={styles.navbar}>
          <div className={styles.userInfo}>
            <img src={userIcon} className={styles.userImg} />
            <div className={styles.userName}>user name</div>
            <div className={styles.userRole}>user role</div>
          </div>
          <div className={styles.menu}>menu</div>
          <ul className={styles.routes}>
            <li>
              <Link className={styles.links} to="/super-admins">
                admins
              </Link>
            </li>
          </ul>
        </nav>
      );

    case 'PM':
      return props.history.push('/employee');
    default:
      break;
  }
};

export default withRouter(NavBar);
