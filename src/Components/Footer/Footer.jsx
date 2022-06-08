import React from 'react';
import style from './footer.module.css';
import fbIcon from '../../Assets/facebook-icon.png';
import twIcon from '../../Assets/twitter-icon.png';
import linkedInIcon from '../../Assets/linkedin-icon.png';
import instaIcon from '../../Assets/insta-icon.png';
import githubIcon from '../../Assets/github-icon.png';

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footerContainer}>
        <div className={style.img}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img className={style.typeIcons} src={linkedInIcon} alt="linkedin-img" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className={style.typeIcons} src={fbIcon} alt="fb-img" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img className={style.typeIcons} src={twIcon} alt="tw-img" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img className={style.typeIcons} src={githubIcon} alt="github-img" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img className={style.typeIcons} src={instaIcon} alt="ig-img" />
          </a>
        </div>
        <p>Rosario, Argentina.</p>
        <p>Copyright 2022 Radium Rocket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
