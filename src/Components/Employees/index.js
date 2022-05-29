import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';

const Employees = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <List list={list} setList={setList} />
      </div>
    </section>
  );
};

export default Employees;
