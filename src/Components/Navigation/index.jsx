import styles from './navigation.module.css';

function Navigation() {
  return (
    <section className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/example.png`} />
      <div className={styles.rowConteiner}>
        <div className={styles.buttonRow}>
          <button className={styles.navButton}>Employee</button>
          <button className={styles.navButton}>Super Admin</button>
          <button className={styles.navButton}>Timesheet</button>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.navButton}>Proyect</button>
          <button className={styles.navButton}>Admin</button>
          <button className={styles.navButton}>Task</button>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
