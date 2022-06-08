import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List/List';
import Logo from '../SharedComponents/Logo/Logo';

const Tasks = (props) => {
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

  const deleteItem = (_id) => {
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/tasks/${_id}`, {
        method: 'DELETE'
      });
      alert('Task deleted');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <Logo />
      <div>
        <button onClick={() => props.history.push('tasks/add')}>Add</button>
        <List key={list.id} list={list} setList={setList} deleteItem={deleteItem} />
      </div>
    </section>
  );
};

export default Tasks;
