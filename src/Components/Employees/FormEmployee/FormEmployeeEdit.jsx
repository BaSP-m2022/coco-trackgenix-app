import React, { useState, useEffect } from 'react';
import styles from '../employees.module.css';
import Logo from '../../SharedComponents/Logo/Logo';
import Modal from '../../SharedComponents/Modal/Modal';
import Button from '../../SharedComponents/Button/Button';
import Input from '../../SharedComponents/Input/Input';
import Loading from '../../SharedComponents/Loading/Loading';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee, getEmployeeById } from '../../redux/modules/employees/thunks';

const FormEmployeeEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState();

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState('');

  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
  const [showWarning5, setShowWarning5] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [successEmployee, setSuccessEmployee] = useState(false);

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);
  const selectedItem = useSelector((state) => state.employee.selectedItem);

  const params = window.location.search;
  let id = params.substring(2);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      setFirstName(selectedItem.firstName);
      setLastName(selectedItem.lastName);
      setEmail(selectedItem.email);
      setPhone(selectedItem.phone);
      setPassword(selectedItem.password);
      setActive(selectedItem.active);
    }
  }, [selectedItem]);

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, []);

  const formEmployee = (e) => {
    dispatch(editEmployee(e, id, setModalText, setShowButton, setSuccessEmployee));
    setIsOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setModalText('Are you sure you want to edit the employee ?');
    setIsOpen(true);
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        if (e.target.value === '') {
          setShowWarning1(true);
        } else {
          setShowWarning1(false);
        }
        break;
      case 'lastName':
        setLastName(e.target.value);
        if (e.target.value === '') {
          setShowWarning2(true);
        } else {
          setShowWarning2(false);
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        if (e.target.value === '') {
          setShowWarning3(true);
        } else {
          setShowWarning3(false);
        }
        break;
      case 'email':
        setEmail(e.target.value);
        if (e.target.value === '') {
          setShowWarning4(true);
        } else {
          setShowWarning4(false);
        }
        break;
      case 'password':
        setPassword(e.target.value);
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
        <h2>Edit Employee</h2>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <Input
              labelText="Name"
              name="firstName"
              inputValue={firstName}
              placeholder="First Name"
              warningMsg="Please check the information"
              handleInput={handleInput}
              handleClick={() => {
                setShowWarning1(false);
              }}
              handleBlur={(e) => {
                if (e.target.value === '') {
                  setShowWarning1(true);
                }
              }}
              showWarning={showWarning1}
            />
          </div>
          <div>
            <Input
              labelText="Last Name"
              name="lastName"
              inputValue={lastName}
              placeholder="Last Name"
              warningMsg="Please check the information"
              handleInput={handleInput}
              handleClick={() => {
                setShowWarning2(false);
              }}
              handleBlur={(e) => {
                if (e.target.value === '') {
                  setShowWarning2(true);
                }
              }}
              showWarning={showWarning2}
            />
          </div>
          <div>
            <Input
              labelText="Phone"
              name="phone"
              inputValue={phone}
              placeholder="Phone"
              warningMsg="Please check the information"
              handleInput={handleInput}
              handleClick={() => {
                setShowWarning3(false);
              }}
              handleBlur={(e) => {
                if (e.target.value === '') {
                  setShowWarning3(true);
                }
              }}
              showWarning={showWarning3}
            />
          </div>
          <div>
            <Input
              labelText="Email"
              name="email"
              inputValue={email}
              placeholder="Email"
              warningMsg="Please check the information"
              handleInput={handleInput}
              handleClick={() => {
                setShowWarning4(false);
              }}
              handleBlur={(e) => {
                if (e.target.value === '') {
                  setShowWarning4(true);
                }
              }}
              showWarning={showWarning4}
            />
          </div>
          <div>
            <Input
              labelText="Password"
              name="password"
              inputValue={password}
              placeholder="Password"
              warningMsg="Please check the information"
              handleInput={handleInput}
              handleClick={() => {
                setShowWarning5(false);
              }}
              handleBlur={(e) => {
                if (e.target.value === '') {
                  setShowWarning5(true);
                }
              }}
              showWarning={showWarning5}
            />
          </div>
          <div>
            <Dropdown
              name={'active'}
              labelText={'Active'}
              onChange={(e) => {
                setActive(e.target.value);
              }}
            />
          </div>
          <div className={styles.containerBtn}>
            <Button type={('submit', styles.employeeBtnEdit)}>Edit</Button>
            <Button
              type={styles.employeeBtnEdit}
              handleClick={() => props.history.push('/employee/profile')}
            >
              Return
            </Button>
          </div>
        </form>
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
                props.history.push('/employee/profile');
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
            handleClick={() => {
              const employeeToEdit = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password,
                active: active
              };
              formEmployee(employeeToEdit);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployeeEdit;
