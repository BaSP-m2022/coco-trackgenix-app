import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import List from './List';

const Admins = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
      // save(data);
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(`probando`, list);
  return (
    <section className={styles.container}>
      <h2>Admins</h2>
      <div>
        <List list={list} setList={setList} />
      </div>
    </section>
  );
};

export default Admins;
