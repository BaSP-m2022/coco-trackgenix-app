import React, { useState, useEffect } from 'react';
import styles from 'Components/Projects/addNew.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Button from 'Components/SharedComponents/Button/Button';
import Input from 'Components/SharedComponents/Input/Input';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Loading from 'Components/SharedComponents/Loading/Loading';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from 'Components/redux/modules/employees/thunks';
import { putProject, getProjectById } from 'Components/redux/modules/projects/thunks';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const projectSchema = Joi.object({
  name: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Must contain at least 3 letters',
      'string.max': 'Must contain a maximum of 50 letters',
      'string.required': 'Name is required!',
      'string.empty': 'Name is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single white space'
    }),
  description: Joi.string().min(10).max(130).required().messages({
    'string.min': 'Must contain at least 10 characters',
    'string.max': 'Must contain a maximum of 130 characters',
    'string.required': 'Description is required!',
    'string.empty': 'Description is not allowed to be empty'
  }),
  startDate: Joi.date().required().messages({
    'date.base': 'Date is not valid',
    'date.empty': 'This field is required'
  }),
  endDate: Joi.date().required().greater(Joi.ref('startDate')).messages({
    'date.base': 'Date is not valid',
    'date.greater': 'End date must be after the start date',
    'date.empty': 'This field is required'
  }),
  clientName: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Must contain at least 3 letters',
      'string.max': 'Must contain a maximum of 50 letters',
      'string.required': 'Client is required!',
      'string.empty': 'Client is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single white space'
    }),
  active: Joi.boolean().required().messages({
    'boolean.base': 'Must indicate if the project is active'
  }),
  employees: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid employee'
    }),
  admins: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Must contain at least 3 letters',
      'string.max': 'Must contain a maximum of 50 letters',
      'string.required': 'Admin is required!',
      'string.empty': 'Admin is not allowed to be empty',
      'string.pattern.base':
        'Must contain only letters and words can only be separated by a single white space'
    })
});

const EditProject = (props) => {
  const [modalText, setModalText] = useState('');
  const [Success, setSuccess] = useState('');
  const isLoading = useSelector((state) => state.project.isLoading);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employee.list);
  const projectData = useSelector((state) => state.project.selectedItem);
  const [isOpen, setIsOpenConfirm] = useState(false);
  const [isOpenFail, setIsOpenFail] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [projectInput, setProjectInput] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    clientName: '',
    active: false,
    employees: [],
    admins: ''
  });

  const role = sessionStorage.getItem('role');

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange', resolver: joiResolver(projectSchema) });

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  const params = window.location.search;
  let id = params.substring(2);

  useEffect(() => {
    dispatch(getProjectById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(projectData).length) {
      reset({
        name: projectData.name,
        description: projectData.description,
        startDate: projectData.startDate.slice(0, 10),
        endDate: projectData.endDate.slice(0, 10),
        clientName: projectData.clientName,
        active: projectData.active,
        employees: projectData.employees.length ? projectData.employees[0]._id : '',
        admins: projectData.admins
      });
    }
  }, [projectData, employeeData]);

  const projectForm = () => {
    dispatch(putProject(projectInput, id, setSuccess, setModalText));
    setIsOpenConfirm(false);
    setIsOpenError(true);
  };

  const onSubmit = (data) => {
    setProjectInput({
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      clientName: data.clientName,
      active: data.active,
      employees: [data.employees],
      admins: data.admins
    });
    setIsOpenConfirm(true);
  };

  const cancelBtnRouterHandler = () => {
    role === 'ADMIN' ? props.history.push('/admin/projects') : props.history.push('/pm/projects');
  };

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }
  return (
    <div className={styles.container}>
      <Logo />
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainers}>
          <div className={styles.columnContainer}>
            <Input
              labelText="Name"
              name="name"
              type="string"
              placeholder="Name"
              register={register}
              error={errors.name?.message}
            ></Input>
            <Input
              labelText="Description"
              name="description"
              type="string"
              placeholder="write a description here"
              register={register}
              error={errors.description?.message}
            ></Input>
            <Input
              labelText="Start Date"
              type="date"
              name="startDate"
              placeholder="DD/MM/YYYY"
              register={register}
              disabled={true}
              error={errors.startDate?.message}
            ></Input>
            <Input
              labelText="End Date"
              type="date"
              name="endDate"
              placeholder="DD/MM/YYYY"
              register={register}
              error={errors.endDate?.message}
            ></Input>
          </div>
          <div>
            <Input
              labelText="Client Name"
              type="text"
              name="clientName"
              placeholder="enter a client here"
              register={register}
              error={errors.clientName?.message}
            ></Input>
            <Dropdown
              name="active"
              labelText="Set if is active"
              register={register}
              error={errors.active?.message}
            ></Dropdown>
            <Dropdown
              data={employeeData}
              name="employees"
              labelText="Select an employee"
              path="firstName"
              register={register}
              error={errors.employees?.message}
            ></Dropdown>
            <Input
              labelText="Administrator"
              name="admins"
              placeholder="enter an admin here"
              register={register}
              error={errors.admins?.message}
            ></Input>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button type={('submit', styles.modalProjectBtn)}>Edit Project</Button>
          <Button type={styles.returnProjectBtn} handleClick={cancelBtnRouterHandler}>
            Cancel
          </Button>
        </div>
      </form>
      <div>
        <Modal showModal={isOpen} closeModal={() => setIsOpenConfirm(false)}>
          <h2>Project Edition</h2>
          <div>
            <p>Do you really want to edit this project?</p>
          </div>
          <div className={styles.buttonsDiv}>
            <Button
              type={styles.modalProjectBtn}
              handleClick={() => {
                projectForm(projectInput);
              }}
            >
              Confirm
            </Button>
            <Button
              type={styles.modalProjectBtn}
              handleClick={() => {
                setIsOpenConfirm(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Modal>
        <Modal showModal={isOpenError} closeModal={() => setIsOpenError(false)}>
          <p>{modalText}</p>
          <Button
            type={styles.modalProjectBtn}
            handleClick={() => {
              if (Success) {
                setSuccess(false);
                if (role === 'ADMIN') {
                  props.history.push('/admin/projects');
                } else {
                  props.history.push('/pm/projects');
                }
              } else {
                setSuccess(false);
                setIsOpenError(false);
              }
            }}
          >
            Ok
          </Button>
        </Modal>
        <Modal showModal={isOpenFail} closeModal={() => setIsOpenFail(false)}>
          <h2>Error</h2>
          <p>Fill every field to continue</p>
          <Button type={styles.modalProjectBtn} handleClick={() => setIsOpenFail(false)}>
            Ok
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default EditProject;
