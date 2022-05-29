import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List/List';

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

  const deleteItem = (id) => {
    setList([...list.filter((list) => list._id !== id)]);
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <section className={styles.container}>
      <List key={list.id} list={list} deleteItem={deleteItem} setList={setList} />
    </section>
  );
};

export default Tasks;
