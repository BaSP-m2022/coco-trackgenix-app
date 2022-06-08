import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table/index';
import Button from '../SharedComponents/Button/Button';

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
  const handleEdit = (_id) => {
    window.location = `/tasks/edit?=${_id}`;
  };

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Tasks</h2>
      <div>
        <Button type={styles.buttonAdd} handleClick={() => props.history.push('tasks/add')}>
          + Add Task
        </Button>
        <Table
          data={list}
          headers={['description', 'workedHours', 'date']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        />
      </div>
    </section>
  );
};

export default Tasks;
