import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';
import Button from '../Shared/Modal/Button';

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

  const deleteItem = async (_id) => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      alert('Employee deleted');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <List list={list} deleteItem={deleteItem} setList={setList} />
      </div>
      <div>
        <Button type={styles.hola} handleClick={() => (window.location = '/employees/form')}>
          Add Employee
        </Button>
      </div>
    </section>
  );
};

export default Employees;
