import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table';
import Button from '../SharedComponents/Button/Button';

const Admins = (props) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
      data.data.map((admin) => {
        admin.active = admin.active ? 'true' : 'false';
      });
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteItem = async (_id) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/admins/${_id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };
  let history = useHistory();
  const handleEdit = (_id) => {
    history.push(`/admins/edit?=${_id}`);
  };
  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Admins</h2>
      <div>
        <Button type={styles.buttonAdd} handleClick={() => props.history.push('tasks/add')}>
          + Add Task
        </Button>
        <Table
          data={list}
          headers={['name', 'lastName', 'email', 'password', 'active']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
          setList={setList}
        />
      </div>
    </section>
  );
};

export default Admins;
