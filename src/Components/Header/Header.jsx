import React, { useState } from 'react';
import style from './header.module.css';
import burguerMenu from '../../Assets/burguer-menu.png';
import closeBtn from '../../Assets/closeBtn.png';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={style.container}>
      {sidebarOpen ? (
        <div className={style.background}>
          <nav className={style.navbar}>
            <button className={style.closeBtn} onClick={toggleSidebar}>
              <img src={closeBtn} alt="cross-img" />
            </button>
            <h2>Menu</h2>
            <ul className={style.rutes}>
              <li className={style.links}>Reports</li>
              <li className={style.links}>Trackgenix</li>
              <li className={style.links}>Resources</li>
            </ul>
            <div className={style.contact}>
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis laborum blanditiis
                eaque veniam dolore quisquam tenetur aspernatur perspiciatis fuga excepturi ipsam,
                alias quia! Ut perspiciatis quis dolore deserunt aliquam libero.
              </p>
            </div>
            <div className={style.location}>
              <p>trackgenix@info.com</p>
              <p>Rosario, Argentina. S2000</p>
            </div>
          </nav>
        </div>
      ) : null}
      <div className={style.headerContainer}>
        {location.pathname === '/home' ? (
          <button className={style.burguerButton} onClick={toggleSidebar}>
            <img className={style.styleIcon} src={burguerMenu} alt="burguer-menu" />
          </button>
        ) : (
          <span className={style.flexItem}> </span>
        )}
        <input type="text" placeholder="Search" />
        {location.pathname === '/home' ? (
          <Link to="/nav" className={style.navigation} disable={!sidebarOpen}>
            Navigation
          </Link>
        ) : (
          <Link to="/home" className={style.navigation}>
            Home
          </Link>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
