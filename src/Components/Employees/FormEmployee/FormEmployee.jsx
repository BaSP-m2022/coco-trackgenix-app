import React, { useState } from 'react';
import styles from '../employees.module.css';
import Logo from '../../SharedComponents/Logo/Logo';
import Modal from '../../SharedComponents/Modal/Modal';
import Button from '../../SharedComponents/Button/Button';
import Input from '../../SharedComponents/Input/Input';
import Loading from '../../SharedComponents/Loading/Loading';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../redux/modules/employees/thunks';

const FormEmployee = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState();
  const [modalText, setModalText] = useState();
  const [employeeInput, setEmployeeInput] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    email: props.email,
    password: props.password,
    active: props.active
  });

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);

  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
  const [showWarning5, setShowWarning5] = useState(false);

  const dispatch = useDispatch();

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
      result = 'Are you sure you want to create an new employee ?';
    } else {
      result = 'Fields filled incorrectly, please check the data';
    }
    return result;
  };

  const handleInput1 = (e) => {
    setEmployeeInput({
      ...employeeInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setEmployeeInput({
      ...employeeInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };

  const handleInput3 = (e) => {
    setEmployeeInput({
      ...employeeInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning3(true);
    } else {
      setShowWarning3(false);
    }
  };

  const handleInput4 = (e) => {
    setEmployeeInput({
      ...employeeInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning4(true);
    } else {
      setShowWarning4(false);
    }
  };

  const handleInput5 = (e) => {
    setEmployeeInput({
      ...employeeInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning5(true);
    } else {
      setShowWarning5(false);
    }
  };

  const handleClick1 = () => {
    setShowWarning1(false);
  };

  const handleClick2 = () => {
    setShowWarning2(false);
  };

  const handleClick3 = () => {
    setShowWarning3(false);
  };

  const handleClick4 = () => {
    setShowWarning4(false);
  };

  const handleClick5 = () => {
    setShowWarning5(false);
  };

  const handleBlurInput1 = (e) => {
    if (e.target.value === '') {
      setShowWarning1(true);
    }
  };

  const handleBlurInput2 = (e) => {
    if (e.target.value === '') {
      setShowWarning2(true);
    }
  };

  const handleBlurInput3 = (e) => {
    if (e.target.value === '') {
      setShowWarning3(true);
    }
  };

  const handleBlurInput4 = (e) => {
    if (e.target.value === '') {
      setShowWarning4(true);
    }
  };

  const handleBlurInput5 = (e) => {
    if (e.target.value === '') {
      setShowWarning5(true);
    }
  };

  if (isLoadingEmployee) {
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.formAdd}>
      <Logo />
      <div>
        <h2>Add New Employee</h2>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <Input
                labelText="Name"
                name="firstName"
                inputValue={employeeInput.firstName}
                placeholder="First Name"
                warningMsg="Please check the information"
                handleInput={handleInput1}
                handleClick={handleClick1}
                handleBlur={handleBlurInput1}
                showWarning={showWarning1}
              />
            </div>
            <div>
              <Input
                labelText="Last Name"
                name="lastName"
                inputValue={employeeInput.lastName}
                placeholder="Last Name"
                warningMsg="Please check the information"
                handleInput={handleInput2}
                handleClick={handleClick2}
                handleBlur={handleBlurInput2}
                showWarning={showWarning2}
              />
            </div>
            <div>
              <Input
                labelText="Phone"
                name="phone"
                inputValue={employeeInput.phone}
                placeholder="Phone"
                warningMsg="Please check the information"
                handleInput={handleInput3}
                handleClick={handleClick3}
                handleBlur={handleBlurInput3}
                showWarning={showWarning3}
              />
            </div>
            <div>
              <Input
                labelText="Email"
                name="email"
                inputValue={employeeInput.email}
                placeholder="Email"
                warningMsg="Please check the information"
                handleInput={handleInput4}
                handleClick={handleClick4}
                handleBlur={handleBlurInput4}
                showWarning={showWarning4}
              />
            </div>
            <div>
              <Input
                labelText="Password"
                name="password"
                inputValue={employeeInput.password}
                placeholder="Password"
                warningMsg="Please check the information"
                handleInput={handleInput5}
                handleClick={handleClick5}
                handleBlur={handleBlurInput5}
                showWarning={showWarning5}
              />
            </div>
            <div>
              <Dropdown name={'active'} labelText={'Active'} />
            </div>
            <div>
              <input className={styles.addEmployeeBtn} type="submit" value="submit" />
            </div>
          </form>
        </div>
        <Button type={styles.addEmployeeBtn} handleClick={() => props.history.push('/employees')}>
          Return
        </Button>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button type={styles.modalEmployeeBtn} handleClick={() => detour(status)}>
            Confirm
          </Button>
          <Button
            type={styles.modalEmployeeBtn}
            handleClick={() => props.history.push('/employees')}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployee;
