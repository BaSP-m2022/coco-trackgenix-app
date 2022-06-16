import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Input from '../SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { editSuperAdmin } from '../redux/modules/superAdmins/thunks';

const EditSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const dispatch = useDispatch();
  const backSuperAdmin = () => {
    props.history.push('/super-admins');
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState();
  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);

  const handleInput1 = (e) => {
    setName(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setLastName(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput3 = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput4 = (e) => {
    setPassword(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
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

  const handleChange = (e) => {
    setActive(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };
  const params = window.location.search;
  let id = params.substring(2);

  const formSuperAdmin = (e) => {
    dispatch(editSuperAdmin(e, id));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const previousSuperAdmin = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      active: active
    };
    console.log(previousSuperAdmin);
    formSuperAdmin(previousSuperAdmin);
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setName(response.data.name);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setActive(response.data.active);
      });
  }, []);

  if (isLoading) {
    return <Loading className={styles.loadText}></Loading>;
  }
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
            warningMsg="This field must be completed"
            handleInput={handleInput1}
            handleClick={handleClick1}
            handleBlur={handleBlurInput1}
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
            handleInput={handleInput2}
            handleClick={handleClick2}
            handleBlur={handleBlurInput2}
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
            inputValue={password}
            placeholder="Password"
            warningMsg="Please check the information"
            handleInput={handleInput4}
            handleClick={handleClick4}
            handleBlur={handleBlurInput4}
            showWarning={showWarning4}
          />
        </div>
        <div>
          <Dropdown name="active" labelText="Set if is active" onChange={handleChange}></Dropdown>
        </div>
        <Button
          type={styles.stylesBtn}
          handleClick={() => {
            setIsOpen(true);
          }}
        >
          Accept
        </Button>
        <Button type={styles.stylesBtn} handleClick={() => backSuperAdmin()}>
          Back
        </Button>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Warning</h2>
        <div>
          <p>Success!</p>
          <p>The Super Admin was successfully edited</p>
        </div>
        <div>
          <Button
            type={('submit', styles.stylesModalBtn)}
            handleClick={() => {
              setIsOpen(false);
              props.history.push('/super-admins');
            }}
          >
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default EditSuperAdmin;
