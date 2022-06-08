import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';

const EditSuperAdmin = (props) => {
  const backSuperAdmin = () => {
    props.history.push('/super-admins');
  };

  const alertSuccessfully = () => {
    alert('The Super Admin have been edit successfully');
    props.history.push('/super-admins');
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState();

  const params = window.location.search;
  let id = params.substring(2);

  const onSubmit = (event) => {
    event.preventDefault();

    const url = `https://coco-trackgenix-server.vercel.app/superAdmins/${id}`;
    const EditSAdmin = {
      method: 'PUT',
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
    fetch(url, EditSAdmin)
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((data) => console.log('data:', data));
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setName(response.data.name);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setActive(response.data.active);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Form Edit</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder={name}
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
        <button type="submit" onClick={() => alertSuccessfully()}>
          Accept
        </button>
        <button onClick={() => backSuperAdmin()}>Back</button>
      </form>
    </div>
  );
};
export default EditSuperAdmin;
