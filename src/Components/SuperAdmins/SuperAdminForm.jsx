import React, { useState } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import { useDispatch } from 'react-redux/es/exports';
import { addSuperAdmin } from '../redux/modules/superAdmins/thunks';

const AddSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const formSuperAdmin = (e) => {
    dispatch(addSuperAdmin(e));
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const superAdminAdd = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      active: active
    };
    formSuperAdmin(superAdminAdd);
  };
  return (
    <div className={styles.container}>
      <Logo />
      <h2>Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Active</label>
          <input
            type="text"
            name="active"
            value={active}
            onChange={(event) => setActive(event.target.value)}
          ></input>
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
        <h2>Warning</h2>
        <div>
          <p>Success!</p>
          <p>The Super Admin was successfully created</p>
        </div>
        <div>
          <Button
            type={('submit', styles.stylesModalBtn)}
            handleClick={() => {
              setIsOpen(false);
              props.history.push('/super-admins');
            }}
          >
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default AddSuperAdmin;
