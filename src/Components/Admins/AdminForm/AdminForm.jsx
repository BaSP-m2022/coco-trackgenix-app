import React, { useState } from 'react';
import styles from '../admins.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';
import Logo from '../../SharedComponents/Logo/Logo';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { postAdmin } from '../../redux/modules/admins/thunks';

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
  const dispatch = useDispatch();
  const formAdmin = (e) => {
    dispatch(postAdmin(e, setIsOpen, backAdmin));
    console.log('ACA ESTTOY', e);
  };
  function onSubmit(e) {
    e.preventDefault();
    setAdminInput({
      name: adminInput.name,
      lastName: adminInput.lastName,
      email: adminInput.email,
      password: adminInput.password,
      active: adminInput.active
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h2 className={styles.titleTwo}>Add New Admin</h2>
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
            <input type="text" name="email" value={adminInput.email} onChange={onChange} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={adminInput.password}
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <Dropdown
            value={adminInput.active}
            onChange={onChange}
            name={'active'}
            labelText={'Active'}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            type={styles.editAndDeleteBtn}
            handleClick={(e) => {
              e.stopPropagation();
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
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Warning</h2>
        <div>
          <p>Are you sure to create a new admin?</p>
        </div>
        <div>
          <Button type={styles.confirmAndDeleteBtn} handleClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            type={('submit', styles.confirmAndDeleteBtn)}
            handleClick={() => {
              formAdmin(adminInput);
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
