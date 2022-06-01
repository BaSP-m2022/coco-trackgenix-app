import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import List from './List';

const Admins = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteItem = (_id) => {
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/admins/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      alert('Admin deleted.');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Admins</h2>
      <div>
        <a href="/admins/add" className={styles.addBtn}>
          + Add an admin
        </a>
        <List list={list} setList={setList} deleteItem={deleteItem} />
      </div>
    </section>
  );
};

export default Admins;
