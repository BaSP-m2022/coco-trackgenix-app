import React from 'react';
import styles from './home.module.css';
import simplicity from '../../Assets/simplicity.png';
import efficiency from '../../Assets/efficiency-img.png';
import confidence from '../../Assets/confidence-img.png';
import main from '../../Assets/main.png';
import about from '../../Assets/about.png';
import management from '../../Assets/management-img.png';
import aboutTwo from '../../Assets/about-two.png';
import tracking from '../../Assets/tracking-img.png';
import Logo from '../SharedComponents/Logo/Logo';

function Home() {
  return (
    <div className={styles.whiteBackground}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <main className={styles.container}>
        <section className={styles.trackgenix}>
          <img src={main} alt="main-img" />
          <p>
            Presentation of the company : A nice message about us that you find very attractive,
            friendly, that gives you confidence to stay on the site.Presentation of the company : A
            nice message about us that you find very attractive, friendly, that gives you confidence
            to stay on the site.
          </p>
        </section>
        <section className={styles.assets}>
          <div className={styles.assetsCard}>
            <img src={simplicity} alt="simplicity-img" />
            <p>Simplicity</p>
          </div>
          <div className={styles.assetsCard}>
            <img src={efficiency} alt="efficiency-img" />
            <p>Efficiency</p>
          </div>
          <div className={styles.assetsCard}>
            <img src={tracking} alt="tracking-img" />
            <p>Tracking</p>
          </div>
          <div className={styles.assetsCard}>
            <img src={confidence} alt="confidence-img" />
            <p>Confidence</p>
          </div>
          <div className={styles.assetsCard}>
            <img src={management} alt="management-img" />
            <p>Management</p>
          </div>
        </section>
        <section className={styles.cards}>
          <div>
            <h2>What can Trackgenix do for you?</h2>
            <ul>
              <li>Time Registration</li>
              <li>Reports</li>
              <li>Resource Management</li>
              <li>Assign Multiple Roles</li>
            </ul>
          </div>
          <div>
            <h2>Why choose Trackgenix?</h2>
            <ul>
              <li>Increase Productivity</li>
              <li>Optimize Leadership and Team Management</li>
              <li>Facilitate work traceability</li>
              <li>Improve decision making</li>
            </ul>
          </div>
        </section>
        <section className={styles.about}>
          <div>
            <h2>About Us</h2>
            <h4>Confidenciality agreements</h4>
            <div className={styles.aboutContainer}>
              <img src={about} alt="about-img" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className={styles.aboutContainer}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <img src={aboutTwo} alt="about-two" />
            </div>
          </div>
        </section>
      </main>
      <section className={styles.extra}>
        <div>
          <h3>Products</h3>
          <ul>
            <li>Functionalities</li>
            <li>Download</li>
            <li>Integration</li>
            <li>Extras</li>
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Information</li>
            <li>Clients</li>
            <li>Resource</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Help</li>
            <li>Tutorials</li>
            <li>API</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
