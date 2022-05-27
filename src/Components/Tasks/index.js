import React, { useEffect } from 'react';
import styles from './tasks.module.css';

const Tasks = () => {
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/tasks`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section className={styles.container}>
      <h2 className>Tasks</h2>
    </section>
  );
};

export default Tasks;
