import styles from 'Components/Auth/NotAllowed/NotAllowed.module.css';

const NotAllowed = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User not allowed</h1>
    </div>
  );
};

export default NotAllowed;
