import React from 'react';
import style from './header.module.css';
import burguerMenu from '../../Assets/burguer-menu.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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
      {location.pathname === '/home' ? (
        <button type="button">
          <Link to="/nav">Navigation</Link>
        </button>
      ) : (
        <button type="button">
          <Link to="/home">Home</Link>
        </button>
      )}
    </div>
  </header>
);

export default withRouter(Header);
