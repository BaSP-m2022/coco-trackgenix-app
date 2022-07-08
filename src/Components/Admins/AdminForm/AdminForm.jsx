import React, { useState } from 'react';
import styles from 'Components/Admins/admins.module.css';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Input from 'Components/SharedComponents/Input/Input';
import Loading from 'Components/SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { postAdmin } from 'Components/redux/modules/admins/thunks';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const adminSchema = Joi.object({
  name: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.min': 'Must contain at least 3 letters',
      'string.max': 'Must contain a maximum of 30 letters',
      'string.required': 'First name is required!',
      'string.empty': 'First name is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single white space'
    }),
  lastName: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.min': 'Must contain at least 3 letters',
      'string.max': 'Must contain a maximum of 30 letters',
      'string.required': 'Last name is required!',
      'string.empty': 'Last name is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single white space'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Must contain an email format valid',
      'string.empty': 'Email is not allowed to be empty',
      'string.required': 'Email is required!'
    }),
  password: Joi.string()
    .regex(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/)
    .min(8)
    .max(30)
    .required()
    .messages({
      'string.min': 'Must contain at least 8 characters',
      'string.max': 'Must contain a maximum of 30 characters',
      'string.empty': 'Password is not allowed to be empty',
      'string.pattern.base': 'Must contain alphanumeric characters, at least one of each',
      'string.required': 'Password is required!'
    }),
  active: Joi.boolean().required().messages({
    'boolean.base': 'Must indicate if the employee is active'
  })
});

const AdminForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adminInput, setAdminInput] = useState({});
  const [showButton, setShowButton] = useState(true);
  const [successAdmin, setSuccessAdmin] = useState(false);
  const [modalText, setModalText] = useState();

  const isLoading = useSelector((state) => state.admin.isLoading);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(adminSchema) });

  const dispatch = useDispatch();

  const formAdmin = (e) => {
    dispatch(postAdmin(e, setModalText, setShowButton, setSuccessAdmin));
    setIsOpen(true);
    if (successAdmin) {
      setAdminInput({
        name: '',
        lastName: '',
        email: '',
        password: '',
        active: ''
      });
    }
  };
  const onSubmit = (admin) => {
    setAdminInput({
      ...adminInput,
      name: admin.name,
      lastName: admin.lastName,
      email: admin.email,
      password: admin.password,
      active: admin.active
    });
    setModalText('Are you sure you want to create an new admin ?');
    setIsOpen(true);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.formContainer}>
        <h2 className={styles.titleTwo}>Add New Admin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsColumns}>
            <Input
              labelText="Name"
              name="name"
              placeholder="Name"
              register={register}
              error={errors.name?.message}
            />
            <Input
              labelText="Last Name"
              name="lastName"
              placeholder="Last Name"
              register={register}
              error={errors.lastName?.message}
            />
            <Input
              labelText="Email"
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              labelText="Password"
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              error={errors.password?.message}
            />
            <Dropdown
              name={'active'}
              labelText={'Active'}
              register={register}
              error={errors.active?.message}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button type={('submit', styles.confirmAndDeleteBtn)}>Accept</Button>
            <Button
              type={styles.confirmAndDeleteBtn}
              handleClick={() => props.history.push('/super-admins')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={
              showButton && !successAdmin
                ? styles.confirmAndDeleteBtn
                : styles.confirmAndDeleteBtnNone && styles.confirmBtnNone
            }
            handleClick={() => formAdmin(adminInput)}
          >
            Confirm
          </Button>
          <Button
            type={styles.confirmAndDeleteBtn}
            handleClick={() => {
              if (!showButton && successAdmin) {
                setShowButton(true);
                setSuccessAdmin(false);
                props.history.push('/super-admins');
              } else {
                setShowButton(true);
                setSuccessAdmin(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !successAdmin ? 'Cancel' : 'Ok'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminForm;
