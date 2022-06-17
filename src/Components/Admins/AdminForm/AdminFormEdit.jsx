import React, { useState, useEffect } from 'react';
import styles from './admin.form.edit.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';
import Logo from '../../SharedComponents/Logo/Logo';
import Loading from '../../SharedComponents/Loading/Loading';
import Input from '../../SharedComponents/Input/Input';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { putAdmin, getAdminById } from '../../redux/modules/admins/thunks';
const AdminFormEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.admin.selectedItem);
  const isLoading = useSelector((state) => state.admin.isLoading);
  const [passwordInput, setPasswordInput] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [adminEdit, setAdminEdit] = useState({});
  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
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
    if (Object.keys(selectedItem).length) {
      setNameInput(selectedItem.name);
      setLastNameInput(selectedItem.lastName);
      setEmailInput(selectedItem.email);
      setPasswordInput(selectedItem.password);
      setActiveInput(selectedItem.active);
    }
  }, [selectedItem]);

  useEffect(() => {
    dispatch(getAdminById(id));
  }, []);

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }
  const handleInput1 = (e) => {
    setNameInput(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setLastNameInput(e.target.value);
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };

  const handleInput3 = (e) => {
    setEmailInput(e.target.value);
    if (e.target.value === '') {
      setShowWarning3(true);
    } else {
      setShowWarning3(false);
    }
  };

  const handleInput4 = (e) => {
    setPasswordInput(e.target.value);
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
      <div className={styles.editModal}>
        <h2 className={styles.title}>Edit Admin</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <div>
              <Input
                labelText="Name"
                name="name"
                inputValue={nameInput}
                placeholder="First Name"
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
                inputValue={lastNameInput}
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
            <Input
              labelText="Email"
              name="email"
              inputValue={emailInput}
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
              inputValue={passwordInput}
              placeholder="Password"
              warningMsg="Please check the information"
              handleInput={handleInput4}
              handleClick={handleClick4}
              handleBlur={handleBlurInput4}
              showWarning={showWarning4}
            />
          </div>
          <div>
            <Dropdown
              onChange={(e) => setActiveInput(e.target.value)}
              name={'active'}
              labelText={'Active'}
            />
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
