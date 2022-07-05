import styles from 'Components/Layout/layout.module.css';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import NavBar from 'Components/NavBar/NavBar';

function Layout(props) {
  const { routes } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <NavBar />
        {props.children}
      </div>
      <Footer routes={routes} />
    </div>
  );
}
export default Layout;
