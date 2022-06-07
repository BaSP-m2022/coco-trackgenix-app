import React, { useState } from 'react';
import styles from '../employees.module.css';

const FormEmployee = (props) => {
  const [employeeInput, setEmployeeInput] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    active: ''
  });

  const onChange = (e) => {
    setEmployeeInput({ ...employeeInput, [e.target.name]: e.target.value });
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
      if (
        employeeInput.firstName !== '' &&
        employeeInput.lastName !== '' &&
        employeeInput.phone !== '' &&
        employeeInput.email !== '' &&
        employeeInput.password !== '' &&
        employeeInput.active !== ''
      ) {
        alert('Employee created');
        props.history.push('/employees');
      } else {
        alert('Please fill every field');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formEmployee(employeeInput);
    setEmployeeInput({
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
            <input
              type="text"
              name="firstName"
              value={employeeInput.firstName}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={employeeInput.lastName} onChange={onChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="number" name="phone" value={employeeInput.phone} onChange={onChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={employeeInput.email} onChange={onChange} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={employeeInput.password}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Active</label>
            <input type="text" name="active" value={employeeInput.active} onChange={onChange} />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
      <button onClick={() => props.history.push('/employees')}>Return</button>
    </div>
  );
};

export default FormEmployee;
