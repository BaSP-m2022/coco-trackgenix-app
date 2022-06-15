import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
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
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder={name}
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Active</label>
          <input
            type="text"
            name="active"
            value={active}
            onChange={(event) => setActive(event.target.value)}
          ></input>
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
