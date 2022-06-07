import React, { useState, useEffect } from 'react';
import styles from '../employees.module.css';
import EspButton from '../../Shared/Modal/Button';

const FormEmployeeEdit = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState('');

  const params = window.location.search;
  let id = params.substring(2);

  const url = `https://coco-trackgenix-server.vercel.app/employees/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setActive(response.data.active);
      });
  }, []);

  const formEmployee = async () => {
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        active: active
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          alert('Employee modified');
          window.location = '/employees';
        } else {
          alert('There is an empty field or you have not done edits');
        }
      })
      .catch((error) => console.error(error));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formEmployee();
  };

  return (
    <div className={styles.formAdd}>
      <div>
        <h2>Edit Employee</h2>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label>Active</label>
            <input
              type="text"
              name="active"
              value={active}
              onChange={(event) => setActive(event.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
      <EspButton
        buttonName="Add Employee"
        buttonBorderColor="rgb(80, 81, 104)"
        buttonTextColor="rgb(80, 81, 104)"
        buttonColor="rgb(255, 255, 255)"
        buttonFunction={() => (window.location = '/employees/form')}
      ></EspButton>
      <button onClick={() => (window.location = '/employees')}>Return</button>
    </div>
  );
};

export default FormEmployeeEdit;
