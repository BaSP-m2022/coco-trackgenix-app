import React, { useState } from 'react';
import styles from '../admins.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';

const AdminForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminInput, setAdminInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    active: ''
  });
  const backAdmin = () => {
    props.history.push('/admins');
  };
  const onChange = (e) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const addItem = async (e) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      props.history.push('/admins');
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      adminInput.name === '' ||
      adminInput.lastName === '' ||
      adminInput.email === '' ||
      adminInput.password === '' ||
      adminInput.active === ''
    ) {
      alert('Please fill all the fields');
    } else {
      console.log(adminInput);
      addItem(adminInput);
      setAdminInput({
        name: '',
        lastName: '',
        email: '',
        password: '',
        active: ''
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Admin</h2>
      <form onSubmit={onSubmit} className={styles.formContainer}>
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
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            type={styles.editANDdeleteBtn}
            handleClick={(e) => {
              setIsOpen(true);
              e.stopPropagation();
            }}
          >
            Accept
          </Button>
          <Button type={styles.editANDdeleteBtn} handleClick={() => backAdmin()}>
            Back
          </Button>
        </div>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Warning</h2>
        <div>
          <p>Are you sure to create a new admin?</p>
        </div>
        <div>
          <Button type={styles.confirmANDdeleteBtn} handleClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            type={('submit', styles.confirmANDdeleteBtn)}
            handleClick={() => {
              setIsOpen(false);
              props.history.push('/admins');
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminForm;
