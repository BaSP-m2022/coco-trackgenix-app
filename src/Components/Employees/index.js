import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';
import AddItem from './AddItem';

const Employees = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteItem = (_id) => {
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/Employees/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      alert('Employee deleted');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  const addItem = ({ firstName, lastName, phone, email, active }) => {
    const newItem = {
      firstName,
      lastName,
      phone,
      email,
      active
    };
    setList([list, newItem]);
  };

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <List list={list} deleteItem={deleteItem} setList={setList} />
        <AddItem addItem={addItem} />
      </div>
    </section>
  );
};

export default Employees;
