import React, { useState } from 'react';
import styles from './employees.module.css';

const EmployeeForm = ({ employeeForm }) => {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    active: ''
  });

  const onChange = (e) => {
    setUserInput({ userInput, [e.target.firstName]: e.targe.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    employeeForm(userInput);
    setUserInput({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
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

export default EmployeeForm;
