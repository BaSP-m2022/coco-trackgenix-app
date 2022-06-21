import React, { useState } from 'react';
import styles from './super-admins.module.css';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Input from 'Components/SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addSuperAdmin } from '../redux/modules/superAdmins/thunks';
import joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = joi.object({
  name: joi
    .string()
    .min(3)
    .max(30)
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Must contain only letters',
      'string.min': 'Invalid name, it must not contain less than 3 letters',
      'string.max': 'Invalid name, it must not contain more than 30 letters',
      'string.required': 'This field is required'
    }),
  lastName: joi
    .string()
    .min(3)
    .max(20)
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Must contain only letters',
      'string.min': 'Invalid name, it must not contain less than 3 letters',
      'string.max': 'Invalid name, it must not contain more than 20 letters',
      'string.required': 'This field is required'
    }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required()
    .messages({
      'string.email': 'Invalid email format',
      'string.required': 'This field is required'
    }),
  password: joi
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
    .min(8)
    .max(30)
    .required()
    .messages({
      'string.min': 'Must contain at least 8 characters',
      'string.max': 'Must contain a maximum of 30 characters',
      'string.pattern.base':
        'Password must be more than 6 characters, at least 1 letter and number. Wihout any symbols',
      'string.required': 'This field is required'
    }),
  active: joi.boolean().messages({
    'boolean.base': 'You must select an option'
  })
});

const AddSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const [modalText, setModalText] = useState();
  const [showButton, setShowButton] = useState(true);
  const [superAdminCreated, setSuperAdminCreated] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(schema) });

  const [newItem, setNewItem] = useState({
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    password: props.password,
    active: props.active
  });
  const dispatch = useDispatch();
  const formSuperAdmin = (e) => {
    dispatch(addSuperAdmin(e, setModalText, setShowButton, setSuperAdminCreated));
    setIsOpen(true);
    setNewItem({
      name: '',
      lastName: '',
      email: '',
      password: '',
      active: ''
    });
  };

  const onSubmit = (superadmin) => {
    setNewItem({
      ...newItem,
      name: superadmin.name,
      lastName: superadmin.lastName,
      phone: superadmin.phone,
      email: superadmin.email,
      password: superadmin.password
    });
    setModalText('Are you sure you want to create an new superadmin ?');
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleButton = () => {
    if (!showButton && superAdminCreated) {
      setShowButton(true);
      setSuperAdminCreated(false);
      props.history.push('/super-admins');
    } else {
      setShowButton(true);
      setSuperAdminCreated(false);
      setIsOpen(false);
    }
  };

  if (isLoading) {
    return <Loading className={styles.loadText}></Loading>;
  }
  return (
    <div className={styles.container}>
      <Logo />
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            labelText="Name"
            name="name"
            type="text"
            inputValue={newItem.name}
            placeholder="Name"
            register={register}
            error={errors.name?.message}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Last Name"
            name="lastName"
            inputValue={newItem.lastName}
            placeholder="Last Name"
            type="text"
            register={register}
            error={errors.lastName?.message}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Email"
            name="email"
            inputValue={newItem.email}
            placeholder="Email"
            type="text"
            register={register}
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            labelText="Password"
            name="password"
            inputValue={newItem.password}
            placeholder="Password"
            type="text"
            register={register}
            error={errors.password?.message}
          />
        </div>
        <div>
          <Dropdown name="active" labelText="Active" onChange={handleChange}></Dropdown>
        </div>
        <div className={styles.formButtonsContainer}>
          <Button type={styles.stylesBtn} handleClick={() => props.history.push('/super-admins')}>
            Back
          </Button>
          <Button type={('submit', styles.stylesBtn)}>Create</Button>
        </div>
      </form>
      <Modal
        showModal={isOpen}
        closeModal={() =>
          superAdminCreated ? props.history.push('/super-admins') : setIsOpen(false)
        }
      >
        <h2>{superAdminCreated ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>{modalText}</h3>
        <div>
          <Button type={styles.stylesModalBtn} handleClick={handleButton}>
            {showButton && !superAdminCreated ? 'Cancel' : 'Ok'}
          </Button>
          <Button
            type={
              showButton && !superAdminCreated ? styles.stylesModalBtn : styles.stylesModalBtnNone
            }
            handleClick={() => {
              formSuperAdmin({
                name: newItem.name,
                lastName: newItem.lastName,
                email: newItem.email,
                password: newItem.password,
                active: newItem.active
              });
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default AddSuperAdmin;
