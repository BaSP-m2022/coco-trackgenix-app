import styles from './employees.module.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../SharedComponents/Table';
import Modal from '../SharedComponents/Modal/Modal';
import Button from '../SharedComponents/Button/Button';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee, deleteEmployee } from '../redux/modules/employees/thunks';

const Employees = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.employee.list);
  const [isOpen, setIsOpen] = useState(false);

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);

  useEffect(() => {
    if (!isOpen) {
      dispatch(getEmployee());
    }
  }, [isOpen]);

  const deleteItem = (_id) => {
    dispatch(deleteEmployee(_id));
    setIsOpen(true);
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/employee/profile/edit?=${item}`);
  };

  if (isLoadingEmployee) {
    return <Loading></Loading>;
  }

  if (window.location.pathname === '/employee/profile') {
    return (
      <section className={styles.container}>
        <Logo />
        <h2 className={styles.title}>Employees</h2>
        <h2 className={styles.title}>Personal Information</h2>
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
  } else {
    return (
      <section className={styles.container}>
        <Logo />
        <h2 className={styles.title}>Employees</h2>
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
  }
};

export default Employees;
