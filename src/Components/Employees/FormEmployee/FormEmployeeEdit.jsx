import React, { useState } from 'react';
import styles from '../employees.module.css';

const FormEmployeeEdit = ({ item }) => {
  const [userInput, setUserInput] = useState({
    firstName: item.firstName,
    lastName: item.lastName,
    phone: item.phone,
    email: item.email,
    password: item.password,
    active: item.active
  });

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const formEmployee = async () => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/employees/${item._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      });
      alert('Employee modified');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formAdd}>
      <div>
        <h2>Add New Employee</h2>
      </div>
      <div>
        <form onSubmit={formEmployee}>
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

export default FormEmployeeEdit;
