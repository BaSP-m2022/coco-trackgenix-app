import React, { useState } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Input from '../SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addSuperAdmin } from '../redux/modules/superAdmins/thunks';

const AddSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const [modalText, setModalText] = useState();
  const [showButton, setShowButton] = useState(true);
  const [superAdminCreated, setSuperAdminCreated] = useState(false);
  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
  const [newItem, setNewItem] = useState({
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    password: props.password,
    active: props.active
  });
  const dispatch = useDispatch();
  const formSuperAdmin = (e) => {
    dispatch(addSuperAdmin(e, setModalText, setShowButton, setSuperAdminCreated));
    setIsOpen(true);
    setNewItem({
      name: '',
      lastName: '',
      email: '',
      password: '',
      active: ''
    });
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning1(true);
        } else {
          setShowWarning1(false);
        }
        break;
      case 'lastName':
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning2(true);
        } else {
          setShowWarning2(false);
        }
        break;
      case 'email':
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning3(true);
        } else {
          setShowWarning3(false);
        }
        break;
      case 'password':
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
        if (e.target.value === '') {
          setShowWarning4(true);
        } else {
          setShowWarning4(false);
        }
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setModalText('Are you sure you want to create a new SuperAdmin?');
    setIsOpen(true);
  };

  if (isLoading) {
    return <Loading className={styles.loadText}></Loading>;
  }
  return (
    <div className={styles.container}>
      <Logo />
      <h2>Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            labelText="Name"
            name="name"
            inputValue={newItem.name}
            placeholder="Name"
            warningMsg="This field must be completed"
            handleInput={handleInput}
            handleClick={() => setShowWarning1(false)}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning1(true);
              }
            }}
            showWarning={showWarning1}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Last Name"
            name="lastName"
            inputValue={newItem.lastName}
            placeholder="Last Name"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => setShowWarning2(false)}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning2(true);
              }
            }}
            showWarning={showWarning2}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Email"
            name="email"
            inputValue={newItem.email}
            placeholder="Email"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => setShowWarning3(false)}
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
            labelText="Password"
            name="password"
            inputValue={newItem.password}
            placeholder="Password"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => setShowWarning4(false)}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning4(true);
              }
            }}
            showWarning={showWarning4}
          />
        </div>
        <div>
          <Dropdown name="active" labelText="Active" onChange={handleChange}></Dropdown>
        </div>
        <div className={styles.formButtonsContainer}>
          <Button type={styles.stylesBtn} handleClick={() => props.history.push('/super-admins')}>
            Back
          </Button>
          <Button type={('submit', styles.stylesBtn)}>Create</Button>
        </div>
      </form>
      <Modal
        showModal={isOpen}
        closeModal={() =>
          superAdminCreated ? props.history.push('/super-admins') : setIsOpen(false)
        }
      >
        <h2>{superAdminCreated ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>{modalText}</h3>
        <div>
          <Button
            type={styles.stylesModalBtn}
            handleClick={() => {
              if (!showButton && superAdminCreated) {
                setShowButton(true);
                setSuperAdminCreated(false);
                props.history.push('/super-admins');
              } else {
                setShowButton(true);
                setSuperAdminCreated(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !superAdminCreated ? 'Cancel' : 'Ok'}
          </Button>
          <Button
            type={
              showButton && !superAdminCreated ? styles.stylesModalBtn : styles.stylesModalBtnNone
            }
            handleClick={() => {
              formSuperAdmin({
                name: newItem.name,
                lastName: newItem.lastName,
                email: newItem.email,
                password: newItem.password,
                active: newItem.active
              });
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default AddSuperAdmin;
