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
  // const [showE, setShowE] = useState(false);
  // const showEdit = () => {
  //   setShowE(() => !showE);
  // };

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

  let output;
  if (show == false) {
    output = (
      <List
        key={list.id}
        list={list}
        deleteItem={deleteItem}
        setList={setList}
        showList={showList}
      />
    );
  } else if (show == true) {
    output = <NewItem desciption={''} workedHours={''} />;
  }
  return (
    <section className={styles.container}>
      {output}
      <div>
        <button onClick={showList}>{show == false ? 'NewTask' : 'Cancel'}</button>
      </div>
    </section>
  );
};

export default Tasks;
