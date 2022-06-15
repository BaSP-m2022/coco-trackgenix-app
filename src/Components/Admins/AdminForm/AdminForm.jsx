import React, { useState } from 'react';
import styles from '../admins.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';
import Logo from '../../SharedComponents/Logo/Logo';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import Input from '../../SharedComponents/Input/Input';
import { useDispatch } from 'react-redux';
import { postAdmin } from '../../redux/modules/admins/thunks';

const AdminForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminInput, setAdminInput] = useState({
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    password: props.password,
    active: ''
  });

  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);

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

  const handleInput1 = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };

  const handleInput3 = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning3(true);
    } else {
      setShowWarning3(false);
    }
  };

  const handleInput4 = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarning4(true);
    } else {
      setShowWarning4(false);
    }
  };

  const handleClick1 = () => {
    setShowWarning1(false);
  };

  const handleClick2 = () => {
    setShowWarning2(false);
  };

  const handleClick3 = () => {
    setShowWarning3(false);
  };

  const handleClick4 = () => {
    setShowWarning4(false);
  };

  const handleBlurInput1 = (e) => {
    if (e.target.value === '') {
      setShowWarning1(true);
    }
  };

  const handleBlurInput2 = (e) => {
    if (e.target.value === '') {
      setShowWarning2(true);
    }
  };

  const handleBlurInput3 = (e) => {
    if (e.target.value === '') {
      setShowWarning3(true);
    }
  };

  const handleBlurInput4 = (e) => {
    if (e.target.value === '') {
      setShowWarning4(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h2 className={styles.titleTwo}>Add New Admin</h2>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <div>
          <div>
            <Input
              labelText="Name"
              name="name"
              inputValue={adminInput.name}
              placeholder="Name"
              warningMsg="Please check the information"
              handleInput={handleInput1}
              handleClick={handleClick1}
              handleBlur={handleBlurInput1}
              showWarning={showWarning1}
            />
          </div>
          <div>
            <Input
              labelText="Last Name"
              name="lastName"
              inputValue={adminInput.lastName}
              placeholder="Last Name"
              warningMsg="Please check the information"
              handleInput={handleInput2}
              handleClick={handleClick2}
              handleBlur={handleBlurInput2}
              showWarning={showWarning2}
            />
          </div>
        </div>
        <div>
          <div>
            <Input
              labelText="Email"
              name="email"
              inputValue={adminInput.email}
              placeholder="Email"
              warningMsg="Please check the information"
              handleInput={handleInput3}
              handleClick={handleClick3}
              handleBlur={handleBlurInput3}
              showWarning={showWarning3}
            />
          </div>
          <div>
            <Input
              labelText="Password"
              name="password"
              inputValue={adminInput.password}
              placeholder="Password"
              warningMsg="Please check the information"
              handleInput={handleInput4}
              handleClick={handleClick4}
              handleBlur={handleBlurInput4}
              showWarning={showWarning4}
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
