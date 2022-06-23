import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Input from '../SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { editSuperAdmin, getSuperAdminById } from '../redux/modules/superAdmins/thunks';

const EditSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const [modalText, setModalText] = useState();
  const [showButton, setShowButton] = useState(true);
  const [superAdminEdited, setSuperAdminEdited] = useState(false);
  const dispatch = useDispatch();

  const [previousSuperAdmin, setPreviousSuperAdmin] = useState({});

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState();
  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
  const selectedItem = useSelector((state) => state.superadmins.selectedItem);

  const params = window.location.search;
  let id = params.substring(2);

  const formSuperAdmin = (e) => {
    dispatch(editSuperAdmin(e, id, setModalText, setShowButton, setSuperAdminEdited));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setPreviousSuperAdmin({
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      active: active
    });
    setModalText('Are you sure you want to edit this SuperAdmin?');
    setIsOpen(true);
  };

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      setName(selectedItem.name);
      setLastName(selectedItem.lastName);
      setEmail(selectedItem.email);
      setPassword(selectedItem.password);
      setActive(selectedItem.active);
    }
  }, [selectedItem]);

  useEffect(() => {
    dispatch(getSuperAdminById(id));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        if (e.target.value === '') {
          setShowWarning1(true);
        } else {
          setShowWarning1(false);
        }
        break;
      case 'lastName':
        setLastName(e.target.value);
        if (e.target.value === '') {
          setShowWarning2(true);
        } else {
          setShowWarning2(false);
        }
        break;
      case 'email':
        setEmail(e.target.value);
        if (e.target.value === '') {
          setShowWarning3(true);
        } else {
          setShowWarning3(false);
        }
        break;
      case 'password':
        setPassword(e.target.value);
        if (e.target.value === '') {
          setShowWarning4(true);
        } else {
          setShowWarning4(false);
        }
        break;
    }
  };

  const handleButton = () => {
    if (!showButton && superAdminEdited) {
      setShowButton(true);
      setSuperAdminEdited(false);
      props.history.push('/super-admins');
    } else {
      setShowButton(true);
      setSuperAdminEdited(false);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h2>Form Edit</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            labelText="Name"
            name="name"
            inputValue={name}
            placeholder="Name"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => {
              setShowWarning1(false);
            }}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning1(true);
              }
            }}
            showWarning={showWarning1}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Last Name"
            name="lastName"
            inputValue={lastName}
            placeholder="Last Name"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => {
              setShowWarning2(false);
            }}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning2(true);
              }
            }}
            showWarning={showWarning2}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Email"
            name="email"
            inputValue={email}
            placeholder="Email"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => {
              setShowWarning3(false);
            }}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning3(true);
              }
            }}
            showWarning={showWarning3}
          />
        </div>
        <div>
          <Input
            labelText="Password"
            name="password"
            inputValue={password}
            placeholder="Password"
            warningMsg="Please check the information"
            handleInput={handleInput}
            handleClick={() => {
              setShowWarning4(false);
            }}
            handleBlur={(e) => {
              if (e.target.value === '') {
                setShowWarning4(true);
              }
            }}
            showWarning={showWarning4}
          />
        </div>
        <div>
          <Dropdown
            name="active"
            labelText="Active"
            onChange={(e) => {
              setActive(e.target.value);
            }}
          ></Dropdown>
        </div>
        <div className={styles.formButtonsContainer}>
          <Button type={styles.stylesBtn} handleClick={() => props.history.push('/super-admins')}>
            Back
          </Button>
          <Button type={('submit', styles.stylesBtn)}>Edit</Button>
        </div>
      </form>
      <Modal
        showModal={isOpen}
        closeModal={() =>
          superAdminEdited ? props.history.push('/super-admins') : setIsOpen(false)
        }
      >
        <h2>{superAdminEdited ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>{modalText}</h3>
        <div>
          <Button type={styles.stylesModalBtn} handleClick={handleButton}>
            {showButton && !superAdminEdited ? 'Cancel' : 'Ok'}
          </Button>
          <Button
            type={
              showButton && !superAdminEdited ? styles.stylesModalBtn : styles.stylesModalBtnNone
            }
            handleClick={() => {
              formSuperAdmin(previousSuperAdmin);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default EditSuperAdmin;
