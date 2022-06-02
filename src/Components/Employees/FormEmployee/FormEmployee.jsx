import React, { useState } from 'react';
import styles from '../employees.module.css';

const FormEmployee = () => {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    active: ''
  });

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const formEmployee = async (e) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/employees`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      alert('Employee created');
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formEmployee(userInput);
    setUserInput({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      active: ''
    });
  };

  return (
    <div className={styles.formAdd}>
      <div>
        <h2>Add New Employee</h2>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="firstName" value={userInput.firstName} onChange={onChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={userInput.lastName} onChange={onChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="number" name="phone" value={userInput.phone} onChange={onChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={userInput.email} onChange={onChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="password" value={userInput.password} onChange={onChange} />
          </div>
          <div>
            <label>Active</label>
            <input type="text" name="active" value={userInput.active} onChange={onChange} />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
      <button onClick={() => (window.location = '/employees')}>Return</button>
    </div>
  );
};

export default FormEmployee;
