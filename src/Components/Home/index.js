import styles from './home.module.css';
import Logo from '../Shared/Logo';

function Home() {
  return (
    <section className={styles.container}>
      <h2>Home</h2>
      <Logo />
    </section>
  );
}

export default Home;
