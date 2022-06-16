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
  const [showButton, setShowButton] = useState(true);
  const [successEmployee, setSuccessEmployee] = useState(false);

  const dispatch = useDispatch();

  const formEmployee = (e) => {
    dispatch(addEmployee(e, setModalText, setShowButton, setSuccessEmployee));
    setIsOpen(true);
    setEmployeeInput({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      active: ''
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setModalText('Are you sure you want to create an new employee ?');
    setIsOpen(true);
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setEmployeeInput({
          ...employeeInput,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning1(true);
        } else {
          setShowWarning1(false);
        }
        break;
      case 'lastName':
        setEmployeeInput({
          ...employeeInput,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning2(true);
        } else {
          setShowWarning2(false);
        }
        break;
      case 'phone':
        setEmployeeInput({
          ...employeeInput,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning3(true);
        } else {
          setShowWarning3(false);
        }
        break;
      case 'email':
        setEmployeeInput({
          ...employeeInput,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning4(true);
        } else {
          setShowWarning4(false);
        }
        break;
      case 'password':
        setEmployeeInput({
          ...employeeInput,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning5(true);
        } else {
          setShowWarning5(false);
        }
        break;
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
                warningMsg="This field must be completed!"
                handleInput={handleInput}
                handleClick={() => {
                  setShowWarning1(false);
                }}
                handleBlur={(e) => {
                  if (e.target.value === '') setShowWarning1(true);
                }}
                showWarning={showWarning1}
              />
            </div>
            <div>
              <Input
                labelText="Last Name"
                name="lastName"
                inputValue={employeeInput.lastName}
                placeholder="Last Name"
                warningMsg="This field must be completed!"
                handleInput={handleInput}
                handleClick={() => {
                  setShowWarning2(false);
                }}
                handleBlur={(e) => {
                  if (e.target.value === '') setShowWarning2(true);
                }}
                showWarning={showWarning2}
              />
            </div>
            <div>
              <Input
                labelText="Phone"
                name="phone"
                inputValue={employeeInput.phone}
                placeholder="Phone"
                warningMsg="This field must be completed!"
                handleInput={handleInput}
                handleClick={() => {
                  setShowWarning3(false);
                }}
                handleBlur={(e) => {
                  if (e.target.value === '') setShowWarning3(true);
                }}
                showWarning={showWarning3}
              />
            </div>
            <div>
              <Input
                labelText="Email"
                name="email"
                inputValue={employeeInput.email}
                placeholder="Email"
                warningMsg="This field must be completed!"
                handleInput={handleInput}
                handleClick={() => {
                  setShowWarning4(false);
                }}
                handleBlur={(e) => {
                  if (e.target.value === '') setShowWarning4(true);
                }}
                showWarning={showWarning4}
              />
            </div>
            <div>
              <Input
                labelText="Password"
                name="password"
                inputValue={employeeInput.password}
                placeholder="Password"
                warningMsg="This field must be completed!"
                handleInput={handleInput}
                handleClick={() => {
                  setShowWarning5(false);
                }}
                handleBlur={(e) => {
                  if (e.target.value === '') setShowWarning5(true);
                }}
                showWarning={showWarning5}
              />
            </div>
            <div>
              <Dropdown
                name={'active'}
                labelText={'Active'}
                onChange={(e) => {
                  setEmployeeInput({
                    ...employeeInput,
                    [e.target.name]: e.target.value
                  });
                }}
              />
            </div>
            <div className={styles.containerBtn}>
              <Button type={('submit', styles.employeeBtnEdit)}>Create</Button>
              <Button
                type={styles.employeeBtnEdit}
                handleClick={() => props.history.push('/employees')}
              >
                Return
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={styles.modalEmployeeBtn}
            handleClick={() => {
              if (!showButton && successEmployee) {
                setShowButton(true);
                setSuccessEmployee(false);
                props.history.push('/employees');
              } else {
                setShowButton(true);
                setSuccessEmployee(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !successEmployee ? 'Cancel' : 'Ok'}
          </Button>
          <Button
            type={
              showButton && !successEmployee ? styles.modalEmployeeBtn : styles.modalEmployeeBtnNone
            }
            handleClick={() => formEmployee(employeeInput)}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployee;
