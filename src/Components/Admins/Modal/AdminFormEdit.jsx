import React, { useState } from 'react';
import styles from './admin.form.edit.module.css';

const EditAdmin = ({ item, showModal, closeModal }) => {
  const [nameInput, setNameInput] = useState([item.name]);
  const [lastNameInput, setLastNameInput] = useState([item.lastName]);
  const [emailInput, setEmailInput] = useState([item.email]);
  const [passwordInput, setPasswordInput] = useState([item.password]);
  const [activeInput, setActiveInput] = useState([item.active]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://coco-trackgenix-server.vercel.app/admins/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput,
        lastName: lastNameInput,
        email: emailInput,
        password: passwordInput,
        active: activeInput
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          alert(`${data.msg}`);
          window.location = '/admins';
        } else {
          alert(`${data.msg}`);
        }
      })
      .catch((error) => console.error(error));
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.editModal}>
        <h2 className={styles.title}>Edit Admin</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.active}>
              <label htmlFor="active">Active</label>
              <input
                type="text"
                name="active"
                value={activeInput}
                onChange={(e) => setActiveInput(e.target.value)}
              ></input>
            </div>
            <div>
              <button type="submit" className={styles.confirmBtn}>
                Confirm
              </button>
            </div>
          </div>
        </form>
        <button onClick={closeModal} className={styles.backBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default EditAdmin;
