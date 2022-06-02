import React, { useState } from 'react';
import styles from '../admins.module.css';

const EditAdmin = ({ item }) => {
  const [adminInput, setAdminInput] = useState({
    name: item.name,
    lastName: item.lastName,
    email: item.email,
    password: item.password,
    active: item.active
  });

  const onChange = (e) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/admins/${item._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminInput)
      });
      alert('Admin updated succesfully');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Edit Admin</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={adminInput.name} onChange={onChange}></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={adminInput.lastName}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={adminInput.email} onChange={onChange}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={adminInput.password}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div>
          <div className={styles.active}>
            <label htmlFor="active">Active</label>
            <input type="text" name="active" value={adminInput.active} onChange={onChange}></input>
          </div>
          <div>
            <button type="submit" className={styles.confirmBtn}>
              Confirm
            </button>
          </div>
        </div>
      </form>
      <a href="/admins" className={styles.addBtn}>
        Cancel
      </a>
    </div>
  );
};
export default EditAdmin;
