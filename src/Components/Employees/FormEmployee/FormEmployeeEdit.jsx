import React, { useState, useEffect } from 'react';
import styles from 'Components/Employees/employees.module.css';
import formStyles from 'Components/Employees/FormEmployee/formEmployee.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Button from 'Components/SharedComponents/Button/Button';
import Input from 'Components/SharedComponents/Input/Input';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { editEmployee, getEmployeeById } from 'Components/redux/modules/employees/thunks';
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
    }),
  active: Joi.boolean().required().messages({
    'boolean.required': 'Active is required!'
  })
});

const FormEmployeeEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState();

  const dispatch = useDispatch();

  const [employeeToEdit, setEmployeeToEdit] = useState({});
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange', resolver: joiResolver(employeeSchema) });

  const [showButton, setShowButton] = useState(true);
  const [successEmployee, setSuccessEmployee] = useState(false);

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);
  const selectedItem = useSelector((state) => state.employee.selectedItem);

  const params = window.location.search;
  let id = params.substring(2);

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      reset({
        firstName: selectedItem.firstName,
        lastName: selectedItem.lastName,
        email: selectedItem.email,
        phone: selectedItem.phone,
        password: selectedItem.password,
        active: selectedItem.active
      });
    }
  }, [selectedItem]);

  const formEmployee = (e) => {
    dispatch(editEmployee(e, id, setModalText, setShowButton, setSuccessEmployee));
    setIsOpen(true);
  };

  const onSubmit = (employee) => {
    setEmployeeToEdit({
      ...employeeToEdit,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      email: employee.email,
      password: employee.password,
      active: employee.active
    });
    setModalText('Are you sure you want to edit the employee ?');
    setIsOpen(true);
  };

  if (isLoadingEmployee) {
    return <Loading></Loading>;
  }

  return (
    <div className={styles.formAdd}>
      <Logo />
      <div className={formStyles.formContainer}>
        <h2>Edit Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={formStyles.inputsColumns}>
            <Input
              labelText="Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              register={register}
              error={errors.firstName?.message}
            />
            <Input
              labelText="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              register={register}
              error={errors.lastName?.message}
            />
            <Input
              labelText="Phone"
              name="phone"
              type="text"
              placeholder="Phone"
              register={register}
              error={errors.phone?.message}
            />
            <Input
              labelText="Email"
              name="email"
              type="text"
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
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={
              showButton && !successEmployee ? styles.modalEmployeeBtn : styles.modalEmployeeBtnNone
            }
            handleClick={() => formEmployee(employeeToEdit)}
          >
            Confirm
          </Button>
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
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployeeEdit;
