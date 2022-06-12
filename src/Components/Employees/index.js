import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../SharedComponents/Table';
import Modal from '../SharedComponents/Modal/Modal';
import Button from '../SharedComponents/Button/Button';
import Logo from '../SharedComponents/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEMPLOYEESuccess,
  deleteEMPLOYEEPending,
  deleteEMPLOYEEerror,
  getEMPLOYEESuccess,
  getEMPLOYEEPending,
  getEMPLOYEEerror
} from '../redux/modules/employees/actions';

const Employees = (props) => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.employee.list);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(async () => {
    dispatch(getEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`);
      const data = await response.json();
      data.data.map((item) => {
        item.active = item.active ? 'true' : 'false';
      });
      dispatch(getEMPLOYEESuccess(data.data));
    } catch (error) {
      console.error(error);
      dispatch(getEMPLOYEEerror(error));
    }
  }, []);

  const deleteItem = async (_id) => {
    dispatch(deleteEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      setIsOpen(true);
      dispatch(deleteEMPLOYEESuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(deleteEMPLOYEEerror(error));
    }
    // setList(list.filter((listItem) => listItem._id !== _id));
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
        data={responseData}
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
          <Button type={styles.modalEmployeeBtn} handleClick={() => setIsOpen(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Employees;
