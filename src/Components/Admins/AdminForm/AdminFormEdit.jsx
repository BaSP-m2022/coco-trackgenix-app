import React, { useState, useEffect } from 'react';
import styles from './admin.form.edit.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';
import Logo from '../../SharedComponents/Logo/Logo';
import { useDispatch } from 'react-redux';
import { putAdmin } from '../../redux/modules/admins/thunks';
const AdminFormEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const dispatch = useDispatch();
  const [passwordInput, setPasswordInput] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [adminEdit, setAdminEdit] = useState({});
  const params = window.location.search;
  let id = params.substring(2);
  const backAdmin = () => {
    props.history.push('/admins');
  };

  const formPut = (e) => {
    dispatch(putAdmin(e, id, setIsOpen, backAdmin));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAdminEdit({
      name: nameInput,
      lastName: lastNameInput,
      email: emailInput,
      password: passwordInput,
      active: activeInput
    });
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setNameInput(response.data.name);
        setLastNameInput(response.data.lastName);
        setEmailInput(response.data.email);
        setPasswordInput(response.data.password);
        setActiveInput(response.data.active);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.editModal}>
        <h2 className={styles.title}>Edit Admin</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
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
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              type={styles.editAndDeleteBtn}
              handleClick={() => {
                setIsOpen(true);
              }}
            >
              Accept
            </Button>
            <Button type={styles.editAndDeleteBtn} handleClick={() => backAdmin()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Warning</h2>
        <div>
          <p></p>
          <p>Are you sure to confirm this edit?</p>
        </div>
        <div>
          <Button type={styles.confirmAndDeleteBtn} handleClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            type={('submit', styles.confirmAndDeleteBtn)}
            handleClick={() => {
              formPut(adminEdit);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default AdminFormEdit;
