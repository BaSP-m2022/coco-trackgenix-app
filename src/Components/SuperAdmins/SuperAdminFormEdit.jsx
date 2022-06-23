import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Input from 'Components/SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { editSuperAdmin, getSuperAdminById } from 'Components/redux/modules/superAdmins/thunks';
import joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = joi.object({
  name: joi
    .string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.empty': 'First name is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single space',
      'string.min': 'Invalid name, it must not contain less than 3 letters',
      'string.max': 'Invalid name, it must not contain more than 30 letters'
    }),
  lastName: joi
    .string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.empty': 'Last name is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single space',
      'string.min': 'Invalid name, it must not contain less than 3 letters',
      'string.max': 'Invalid name, it must not contain more than 30 letters'
    }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .messages({
      'string.empty': 'Email is not allowed to be empty',
      'string.email': 'Invalid email format',
      'string.required': 'This field is required'
    }),
  password: joi
    .string()
    .pattern(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/)
    .min(8)
    .max(30)
    .messages({
      'string.empty': 'Password is not allowed to be empty',
      'string.pattern.base':
        'Password must contain at least 1 letter or number. Wihout any symbols',
      'string.required': 'This field is required'
    }),
  active: joi.boolean().messages({
    'boolean.base': 'You must select an option'
  })
});

const EditSuperAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const [modalText, setModalText] = useState();
  const [showButton, setShowButton] = useState(true);
  const [superAdminEdited, setSuperAdminEdited] = useState(false);
  const dispatch = useDispatch();

  const [previousSuperAdmin, setPreviousSuperAdmin] = useState({});
  const selectedItem = useSelector((state) => state.superadmins.selectedItem);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    resolver: joiResolver(schema)
  });

  const params = window.location.search;
  let id = params.substring(2);

  const formSuperAdmin = (e) => {
    dispatch(editSuperAdmin(e, id, setModalText, setShowButton, setSuperAdminEdited));
  };

  const onSubmit = (superadmin) => {
    setPreviousSuperAdmin({
      name: superadmin.name,
      lastName: superadmin.lastName,
      email: superadmin.email,
      password: superadmin.password,
      active: superadmin.active
    });
    setModalText('Are you sure you want to edit this SuperAdmin?');
    setIsOpen(true);
  };

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
    setPreviousSuperAdmin();
  }, [selectedItem]);

  useEffect(() => {
    dispatch(getSuperAdminById(id));
  }, []);

  if (isLoading) {
    return <Loading className={styles.loadText}></Loading>;
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            labelText="Name"
            name="name"
            placeholder="Name"
            type="text"
            register={register}
            error={errors.name?.message}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Last Name"
            name="lastName"
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
            placeholder="Password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
        </div>
        <div>
          <Dropdown
            name="active"
            labelText="Active"
            register={register}
            error={errors.active?.message}
          ></Dropdown>
        </div>
        <div className={styles.formButtonsContainer}>
          <Button type={('submit', styles.stylesBtn)}>Edit</Button>
          <Button type={styles.stylesBtn} handleClick={() => props.history.push('/super-admins')}>
            Back
          </Button>
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
          <Button type={styles.stylesModalBtn} handleClick={handleButton}>
            {showButton && !superAdminEdited ? 'Cancel' : 'Ok'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default EditSuperAdmin;
