import React, { useState, useEffect } from 'react';
import styles from './admins.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table';

const Admins = (props) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
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
      alert('Admin deleted');
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
        <button onClick={() => props.history.push('admins/add')} className={styles.addBtn}>
          + Add an admin
        </button>
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
