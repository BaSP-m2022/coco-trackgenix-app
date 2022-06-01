import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import List from './List';

const Admins = () => {
  let [showAddAdmin, setShowAddAdmin] = useState(false);
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

  const switcher = () => {
    setShowAddAdmin(showAddAdmin ? (showAddAdmin = false) : (showAddAdmin = true));
  };

  if (showAddAdmin) {
    return (
      <section className={styles.container}>
        <h2>Admins</h2>
        <button onClick={switcher}>Back</button>
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        <h2>Admins</h2>
        <div>
          <button className={styles.addButton} onClick={switcher}>
            Add new
          </button>
          <List list={list} setList={setList} deleteItem={deleteItem} />
        </div>
      </section>
    );
  }
};

export default Admins;
