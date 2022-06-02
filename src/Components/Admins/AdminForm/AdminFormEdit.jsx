import React, { useState } from 'react';
import styles from '../admins.module.css';

const EditAdmin = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [lastName, setLastName] = useState(item.lastName);
  const [email, setEmail] = useState(item.email);
  const [password, setPassword] = useState(item.password);
  const [active, setActive] = useState(item.active);

  const handleSubmit = () => {
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/admins/${item._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          email: email,
          password: password,
          active: active
        })
      });
      alert('Admin updated succesfully');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Edit Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="description"
            placeholder="Set a description"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></input>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input
            type="text"
            name="active"
            placeholder="State"
            onChange={(e) => {
              setActive(e.target.value);
            }}
            value={active}
          ></input>
        </div>
        <div>
          <input type="submit" name="admin-submit" value="EDIT ADMIN"></input>
        </div>
        <a href="/admins">Cancel</a>
      </form>
    </div>
  );
};
export default EditAdmin;
