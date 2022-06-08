import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import Table from '../SharedComponents/Table';
import Button from '../SharedComponents/Button/Button';

const Employees = (props) => {
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

  const handleEdit = (item) => {
    window.location = `/employees/formEdit?=${item._id}`;
  };

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <Table
        data={list}
        headers={['name', 'lastname', 'phone', 'email', 'password', 'active']}
        handleEdit={handleEdit}
        deleteItem={deleteItem}
      ></Table>
      <Button
        type={styles.addSuperAdminBtn}
        handleClick={() => props.history.push('/employees/form')}
      >
        Add Employee
      </Button>
    </section>
  );
};

export default Employees;
