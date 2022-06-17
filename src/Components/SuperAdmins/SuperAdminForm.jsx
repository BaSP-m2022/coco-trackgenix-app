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
  const dispatch = useDispatch();
  const formSuperAdmin = (e) => {
    dispatch(addSuperAdmin(e));
  };

  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
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
  const handleInput1 = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };
  const handleInput2 = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };
  const handleInput3 = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning3(true);
    } else {
      setShowWarning3(false);
    }
  };
  const handleInput4 = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning4(true);
    } else {
      setShowWarning4(false);
    }
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'superAdmin') {
      setNewItem({
        ...newItem,
        [name]: [value]
      });
    }
    setNewItem({
      ...newItem,
      [name]: value
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    formSuperAdmin({
      name: newItem.name,
      lastName: newItem.lastName,
      email: newItem.email,
      password: newItem.password,
      active: newItem.active
    });
    setResStatus, setResponseMsg;
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
            handleInput={handleInput1}
            handleClick={handleClick1}
            handleBlur={handleBlurInput1}
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
            handleInput={handleInput2}
            handleClick={handleClick2}
            handleBlur={handleBlurInput2}
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
            handleInput={handleInput3}
            handleClick={handleClick3}
            handleBlur={handleBlurInput3}
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
            handleInput={handleInput4}
            handleClick={handleClick4}
            handleBlur={handleBlurInput4}
            showWarning={showWarning4}
          />
        </div>
        <div>
          <Dropdown name="active" labelText="Set if is active" onChange={handleChange}></Dropdown>
        </div>
        <Button
          type={styles.stylesBtn}
          handleClick={() => {
            setIsOpen(true);
          }}
        >
          Accept
        </Button>
        <Button type={styles.stylesBtn} handleClick={() => props.history.push('/super-admins')}>
          Back
        </Button>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>{resStatus ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>
          {resStatus
            ? responseMsg
            : `Are you sure you want to create this SuperAdmin?${responseMsg}`}
        </h3>
        <div>
          <Button type={styles.stylesModalBtn} handleClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            type={('submit', styles.stylesModalBtn)}
            handleClick={() => {
              setIsOpen(false);
              props.history.push('/super-admins');
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
