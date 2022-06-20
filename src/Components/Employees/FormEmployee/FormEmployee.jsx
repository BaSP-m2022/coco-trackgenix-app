import React, { useState } from 'react';
import styles from '../employees.module.css';
import Logo from '../../SharedComponents/Logo/Logo';
import Modal from '../../SharedComponents/Modal/Modal';
import Button from '../../SharedComponents/Button/Button';
import Input from '../../SharedComponents/Input/Input';
import Loading from '../../SharedComponents/Loading/Loading';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addEmployee } from '../../redux/modules/employees/thunks';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const employeeSchema = Joi.object({
  firstName: Joi.string()
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
  phone: Joi.string()
    .regex(/^[0-9]+$/)
    .min(10)
    .max(10)
    .messages({
      'string.pattern.base': 'Must contain only numbers',
      'string.min': 'Must contain 10 numbers',
      'string.max': 'Must contain 10 numbers',
      'string.empty': 'Phone is not allowed to be empty',
      'number.required': 'Phone is required!'
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
    })
});

const FormEmployee = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState();
  const [employeeInput, setEmployeeInput] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    email: props.email,
    password: props.password,
    active: props.active
  });

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(employeeSchema) });

  const [showButton, setShowButton] = useState(true);
  const [successEmployee, setSuccessEmployee] = useState(false);

  const dispatch = useDispatch();

  const formEmployee = (e) => {
    dispatch(addEmployee(e, setModalText, setShowButton, setSuccessEmployee));
    setIsOpen(true);
    if (successEmployee) {
      setEmployeeInput({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        active: ''
      });
    }
  };

  const onSubmit = (employee) => {
    setEmployeeInput({
      ...employeeInput,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      email: employee.email,
      password: employee.password
    });
    setModalText('Are you sure you want to create an new employee ?');
    setIsOpen(true);
  };

  if (isLoadingEmployee) {
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.formAdd}>
      <Logo />
      <div>
        <h2>Add New Employee</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                labelText="Name"
                name="firstName"
                type="text"
                placeholder="First Name"
                register={register}
                error={errors.firstName?.message}
              />
            </div>
            <div>
              <Input
                labelText="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                register={register}
                error={errors.lastName?.message}
              />
            </div>
            <div>
              <Input
                labelText="Phone"
                name="phone"
                type="text"
                placeholder="Phone"
                register={register}
                error={errors.phone?.message}
              />
            </div>
            <div>
              <Input
                labelText="Email"
                name="email"
                type="text"
                placeholder="Email"
                register={register}
                error={errors.email?.message}
              />
            </div>
            <div>
              <Input
                labelText="Password"
                name="password"
                type="password"
                placeholder="Password"
                register={register}
                error={errors.password?.message}
              />
            </div>
            <div>
              <Dropdown
                name={'active'}
                labelText={'Active'}
                onChange={(e) => {
                  setEmployeeInput({
                    ...employeeInput,
                    [e.target.name]: e.target.value
                  });
                }}
              />
            </div>
            <div className={styles.containerBtn}>
              <Button type={('submit', styles.employeeBtnEdit)}>Create</Button>
              <Button
                type={styles.employeeBtnEdit}
                handleClick={() => props.history.push('/employee')}
              >
                Return
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={styles.modalEmployeeBtn}
            handleClick={() => {
              if (!showButton && successEmployee) {
                setShowButton(true);
                setSuccessEmployee(false);
                props.history.push('/employee');
              } else {
                setShowButton(true);
                setSuccessEmployee(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !successEmployee ? 'Cancel' : 'Ok'}
          </Button>
          <Button
            type={
              showButton && !successEmployee ? styles.modalEmployeeBtn : styles.modalEmployeeBtnNone
            }
            handleClick={() => formEmployee(employeeInput)}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployee;
