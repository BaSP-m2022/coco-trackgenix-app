import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../SharedComponents/Table';
import Modal from '../SharedComponents/Modal/Modal';
import Button from '../SharedComponents/Button/Button';
import Logo from '../SharedComponents/Logo/Logo';

const Employees = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`);
      const data = await response.json();
      data.data.map((item) => {
        item.active = item.active ? 'true' : 'false';
      });
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
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/employees/formEdit?=${item}`);
  };

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Employees</h2>
      <Button
        type={styles.addEmployeeBtn}
        handleClick={() => props.history.push('/employees/form')}
      >
        Add Employee
      </Button>
      <Table
        data={list}
        headers={['firstName', 'lastName', 'phone', 'email', 'password', 'active']}
        handleEdit={handleEdit}
        deleteItem={deleteItem}
      ></Table>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Success!</h2>
        <div>
          <p>Employee deleted Succesffully</p>
        </div>
        <div>
          <Button type={styles.addEmployeeBtn} handleClick={() => setIsOpen(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Employees;
