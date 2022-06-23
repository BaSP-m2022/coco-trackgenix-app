import React, { useState, useEffect } from 'react';
import styles from 'Components/Admins/admins.module.css';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Input from 'Components/SharedComponents/Input/Input';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { putAdmin, getAdminById } from 'Components/redux/modules/admins/thunks';
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

const AdminFormEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [successAdmin, setSuccessAdmin] = useState(false);
  const [modalText, setModalText] = useState();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.admin.selectedItem);
  const isLoading = useSelector((state) => state.admin.isLoading);
  const [adminEdit, setAdminEdit] = useState({});

  const params = window.location.search;
  let id = params.substring(2);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange', resolver: joiResolver(adminSchema) });

  useEffect(() => {
    dispatch(getAdminById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      reset({
        name: selectedItem.name,
        lastName: selectedItem.lastName,
        email: selectedItem.email,
        password: selectedItem.password,
        active: selectedItem.active
      });
    }
  }, [selectedItem]);

  const formPut = (e) => {
    dispatch(putAdmin(e, id, setModalText, setShowButton, setSuccessAdmin));
    setIsOpen(true);
  };

  const onSubmit = (admin) => {
    setAdminEdit({
      ...adminEdit,
      name: admin.name,
      lastName: admin.lastName,
      email: admin.email,
      password: admin.password,
      active: admin.active
    });
    setModalText('Are you sure you want to edit the admin ?');
    setIsOpen(true);
  };

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Edit Admin</h2>
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
              handleClick={() => props.history.push('/admins')}
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
                : styles.confirmAndDeleteBtnNone
            }
            handleClick={() => formPut(adminEdit)}
          >
            Confirm
          </Button>
          <Button
            type={styles.confirmAndDeleteBtn}
            handleClick={() => {
              if (!showButton && successAdmin) {
                setShowButton(true);
                setSuccessAdmin(false);
                props.history.push('/admins');
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
export default AdminFormEdit;
