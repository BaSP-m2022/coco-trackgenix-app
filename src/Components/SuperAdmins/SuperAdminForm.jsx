import React, { useState } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';

const AddSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    const addSuperAdmin = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        active: active
      })
    };
    const url = `https://coco-trackgenix-server.vercel.app/Superadmins`;

    fetch(url, addSuperAdmin)
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((data) => console.log('data:', data));
  };
  return (
    <div className={styles.container}>
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
