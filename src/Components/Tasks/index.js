import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table/index';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';

const Tasks = (props) => {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dateFormatter = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/tasks`);
      const data = await response.json();
      data.data.forEach((task) => {
        task.date = dateFormatter(task.date).substring(0, 10);
      });
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
      setIsOpen(true);
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
      <div className={styles.tableContainer}>
        <Table
          data={list}
          headers={['description', 'workedHours', 'date']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        >
          <Button type={styles.buttonAdd} handleClick={() => props.history.push('tasks/add')}>
            + Add Task
          </Button>
        </Table>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Tasks has been deleted successfully!</h2>
        <Button type={styles.buttonAdd} handleClick={() => setIsOpen(false)}>
          Ok
        </Button>
      </Modal>
    </section>
  );
};

export default Tasks;
