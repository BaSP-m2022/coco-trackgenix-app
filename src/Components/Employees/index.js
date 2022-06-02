import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';
//* import FormEmployee from './FormEmployee/FormEmployee';

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

  /*const addItem = ({ firstName, lastName, phone, email, active }) => {
    const newItem = {
      firstName,
      lastName,
      phone,
      email,
      active
    };
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/Employees/`, {
        method: 'POST'
      });
      console.log(response);
      alert('Employee created');
    } catch (error) {
      console.error(error);
    }
    setList([list, newItem]);
  };
*/

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <List list={list} deleteItem={deleteItem} setList={setList} />
      </div>
      <div>
        <button onClick={() => (window.location = '/employees/Form')}>Add Employee</button>
      </div>
    </section>
  );
};

export default Employees;
