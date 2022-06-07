import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List/List';
import NewFormItem from './FormList/FormList';
import Logo from '../SharedComponents/Logo/Logo';

const Tasks = () => {
  const [show, setShow] = useState(false);

  const showList = () => {
    setShow(() => !show);
  };

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
      <div>
        <Logo />
      </div>
      <div>
        <button onClick={showList}>{show === false ? 'Add' : 'Back'}</button>
      </div>
      {show === false ? (
        <List key={list.id} list={list} setList={setList} deleteItem={deleteItem} />
      ) : (
        <NewFormItem />
      )}
    </section>
  );
};

export default Tasks;
