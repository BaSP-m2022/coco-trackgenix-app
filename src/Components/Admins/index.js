import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import List from './List';
import AddItem from './AddItem/AddItem';

const Admins = () => {
  let [showAddAdmin, setShowAddAdmin] = useState(false);
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
      setList(data.data);
      // console.log('data inicial:', data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteItem = async (_id) => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${_id}`, {
        method: 'DELETE'
      });
      console.log('delete response:', response);
      alert('Admin deleted');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  const addItem = async (e) => {
    try {
      // e.preventDefault();
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      alert('Admin created');
      const data = await response.json();
      console.log(data);
      setList([...list, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const switcher = () => {
    setShowAddAdmin(showAddAdmin ? (showAddAdmin = false) : (showAddAdmin = true));
  };

  if (showAddAdmin) {
    return (
      <section className={styles.container}>
        <h2>Admins</h2>
        <AddItem addItem={addItem} switcher={switcher} />
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        <h2 className={styles.h2}>Admins</h2>
        <div>
          <a href="/admins/add" className={styles.button}>
            + Add an admin
          </a>
          <List list={list} setList={setList} deleteItem={deleteItem} />
        </div>
      </section>
    );
  }
};

export default Admins;
