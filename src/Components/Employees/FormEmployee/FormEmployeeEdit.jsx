import React, { useState } from 'react';
import styles from '../employees.module.css';

const FormEmployeeEdit = ({ item }) => {
  const [employeeInput, setEmployeeInput] = useState({
    firstName: item.firstName,
    lastName: item.lastName,
    phone: item.phone,
    email: item.email,
    password: item.password,
    active: item.active
  });

  const onChange = (e) => {
    setEmployeeInput({ ...employeeInput, [e.target.name]: e.target.value });
  };

  const formEmployee = async (employeeInput) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/employees/${item._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeInput)
      });
      alert('Employee modified');
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formEmployee(employeeInput);
    setEmployeeInput({
      firstName: employeeInput.firstName,
      lastName: employeeInput.lastName,
      phone: employeeInput.phone,
      email: employeeInput.email,
      password: employeeInput.password,
      active: employeeInput.active
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
              required
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
            <input type="text" name="password" value={employeeInput.password} onChange={onChange} />
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
      <button onClick={() => (window.location = '/employees')}>Return</button>
    </div>
  );
};

export default FormEmployeeEdit;
