import React, { useState } from 'react';
import styles from '../employees.module.css';
import Logo from '../../SharedComponents/Logo/Logo';
import Modal from '../../SharedComponents/Modal/Modal';
import Button from '../../SharedComponents/Button/Button';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/modules/employees/thunks';

const FormEmployee = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState();
  const [modalText, setModalText] = useState();
  const [employeeInput, setEmployeeInput] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    active: ''
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setEmployeeInput({ ...employeeInput, [e.target.name]: e.target.value });
  };

  const formEmployee = (e) => {
    dispatch(addEmployee(e, setStatus, createMsg, setModalText));
    setIsOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formEmployee(employeeInput);
    setEmployeeInput({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      active: ''
    });
  };

  const detour = (s) => {
    if (s == 'Status 201') {
      props.history.push('/employees');
    } else {
      setIsOpen(false);
    }
  };

  const createMsg = (s) => {
    let result;
    if (s == 'Status 201') {
      result = 'Employee created succesfully';
    } else {
      result = 'Fields filled incorrectly, please check the data';
    }
    return result;
  };

  return (
    <div className={styles.formAdd}>
      <Logo />
      <div>
        <h2>Add New Employee</h2>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="firstName"
                value={employeeInput.firstName}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={employeeInput.lastName}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Phone</label>
              <input type="number" name="phone" value={employeeInput.phone} onChange={onChange} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={employeeInput.email} onChange={onChange} />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={employeeInput.password}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Active</label>
              <input type="text" name="active" value={employeeInput.active} onChange={onChange} />
            </div>
            <div>
              <input className={styles.addEmployeeBtn} type="submit" value="submit" />
            </div>
          </form>
        </div>
        <Button type={styles.addEmployeeBtn} handleClick={() => props.history.push('/employees')}>
          return
        </Button>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button type={styles.modalEmployeeBtn} handleClick={() => detour(status)}>
            ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployee;
