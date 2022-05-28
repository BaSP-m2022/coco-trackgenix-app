import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List';

const Tasks = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/tasks`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      <List list={list} setList={setList} />
    </section>
  );
};

export default Tasks;
