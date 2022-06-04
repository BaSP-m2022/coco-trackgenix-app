import React, { useState } from 'react';
import styles from '../admins.module.css';

const AdminForm = () => {
  const [adminInput, setAdminInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    active: ''
  });

  const onChange = (e) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const addItem = async (e) => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      const data = await response.json();
      if (data.error === false) {
        alert(`${data.msg}`);
        window.location = '/admins';
      } else {
        alert(`${data.msg}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
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
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Admin</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={adminInput.name} onChange={onChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={adminInput.lastName} onChange={onChange} />
          </div>
        </div>
        <div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={adminInput.email} onChange={onChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="password" value={adminInput.password} onChange={onChange} />
          </div>
        </div>
        <div>
          <div className={styles.active}>
            <label>Active</label>
            <input type="text" name="active" value={adminInput.active} onChange={onChange} />
          </div>
          <button type="submit" className={styles.confirmBtn}>
            Confirm
          </button>
        </div>
      </form>
      <button onClick={() => (window.location = '/admins')} className={styles.backBtn}>
        Back
      </button>
    </div>
  );
};

export default AdminForm;
