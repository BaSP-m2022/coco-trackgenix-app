import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import userIcon from '../../Assets/user.svg';
import styles from './navBar.module.css';

const NavBar = () => {
  const routes = useSelector((state) => state.login.routes);
  const role = sessionStorage.getItem('role');
  if (!role) {
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.userInfo}>
        <img src={userIcon} className={styles.userImg} />
        <div className={styles.userName}>user name</div>
        <div className={styles.userRole}>user role</div>
      </div>
      <div className={styles.menu}>menu</div>
      <ul className={styles.routes}>
        {routes.map((element, index) => {
          return (
            <li key={index}>
              <Link className={styles.links} to={element.path}>
                {element.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
