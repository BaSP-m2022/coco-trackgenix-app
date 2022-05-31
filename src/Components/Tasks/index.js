import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List/List';
import NewItem from './FormList/FormList';

const Tasks = () => {
  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);
  const showList = () => {
    setShow(() => !show);
  };

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/tasks`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, [show]);

  const deleteItem = (id) => {
    setList([...list.filter((list) => list._id !== id)]);
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'DELETE'
    });
  };

  // const [upd]
  // const updItem = (id) => {
  //   setList([...list.filter((list) => list._id === id)]);

  return (
    <section className={styles.container}>
      <div>
        <button onClick={showList}>{show === false ? 'Add' : 'Back'}</button>
      </div>
      {show === false ? (
        <List key={list.id} list={list} deleteItem={deleteItem} setList={setList} />
      ) : (
        <NewItem desciption={''} workedHours={''} metodo={'POST'} />
      )}
    </section>
  );
};

export default Tasks;
