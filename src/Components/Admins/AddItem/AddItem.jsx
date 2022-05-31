import React, { useState } from 'react';
import styles from '../admins.module.css';

const AddItem = ({ addItem }) => {
  const [adminInput, setAdminInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    active: ''
  });

  const onChange = (e) => {
    console.log('evento', e);
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log('hola');
    e.preventDefault();
    addItem(adminInput);
    setAdminInput({
      name: '',
      lastName: '',
      email: '',
      password: '',
      active: ''
    });
  };

  return (
    <div className={styles.form}>
      <div>Add New Admin</div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={adminInput.name} onChange={onChange} />
        </div>
        <div>
          <label>lastName</label>
          <input type="text" name="lastName" value={adminInput.lastName} onChange={onChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={adminInput.email} onChange={onChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" value={adminInput.password} onChange={onChange} />
        </div>
        <div>
          <label>Active</label>
          <input type="text" name="active" value={adminInput.active} onChange={onChange} />
        </div>
        <button onClick={() => onSubmit()}> Add </button>
      </form>
    </div>
  );
};

export default AddItem;
