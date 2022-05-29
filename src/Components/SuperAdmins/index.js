import styles from './super-admins.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';

const SuperAdmin = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`);
      const data = await response.json();
      // save(data);
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className={styles.container}>
      <h2>Super Admin</h2>
      <div>
        <List list={list} setList={setList} />
      </div>
    </section>
  );
};

export default SuperAdmin;
