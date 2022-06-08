import React from 'react';
import style from './header.module.css';
import burguerMenu from '../../Assets/burguer-menu.png';

const Header = () => (
  <header className={style.container}>
    <div className={style.headerContainer}>
      {location.pathname === '/home' ? (
        <button className={style.burguerButton}>
          <img className={style.styleIcon} src={burguerMenu} alt="burguer-menu" />
        </button>
      ) : (
        <span></span>
      )}
      <input type="text" placeholder="Search" />
      <button type="button">Sign Out</button>
    </div>
  </header>
);

export default Header;
