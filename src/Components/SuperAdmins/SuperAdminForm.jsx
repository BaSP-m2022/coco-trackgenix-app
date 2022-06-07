import React, { useState } from 'react';
import styles from './super-admins.module.css';

const AddSuperAdmin = () => {
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
      .then((data) => {
        if (!data.error) {
          alert('The Super Admin have been created successfully');
          window.location = `/super-admins`;
        } else {
          alert(
            'Error something is wrong. Remember the first and last name must be greater than two character, less than fifty and must not contain symbols. The email address cannot be repeated and must to be example@example.com. The password must be longer than four characters. The active must be true or false'
          );
        }
      });
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
        <button type="submit">Accept</button>
      </form>
    </div>
  );
};
export default AddSuperAdmin;
