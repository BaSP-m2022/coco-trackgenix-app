import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import List from './List/List';
import NewItem from './FormList/FormList';

const Tasks = () => {
  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);
  const showList = (showCase) => {
    setShow(() => showCase);
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

  const [updItem, setUpdItem] = useState([]);
  const updateItem = (id) => {
    setUpdItem([...updItem.filter((item) => item._id === id)]);
  };

  return (
    <section className={styles.container}>
      {show === false ? (
        <List
          key={list.id}
          list={list}
          deleteItem={deleteItem}
          setList={setList}
          updateItem={updateItem}
          showList={showList}
        />
      ) : (
        <NewItem desciption={''} workedHours={''} />
      )}
      <div>
        <button onClick={showList}>{show === false ? 'Add' : 'Back'}</button>
      </div>
    </section>
  );
};

export default Tasks;
