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
import { postProject } from 'Components/redux/modules/projects/thunks';
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
      'string.required': 'First name is required!',
      'string.empty': 'First name is not allowed to be empty',
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
  employees: Joi.array().required(),
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

const AddNew = () => {
  const [isOpen, setIsOpenConfirm] = useState(false);
  const [isOpenFail, setIsOpenFail] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [modalText, setModalText] = useState('');
  const [Success, setSuccess] = useState('');
  // const [showWarningName, setShowWarningName] = useState(false);
  // const [showWarningDesc, setShowWarningDesc] = useState(false);
  // const [showWarningCName, setShowWarningCName] = useState(false);
  // const [showWarningAdmin, setShowWarningAdmin] = useState(false);
  const isLoading = useSelector((state) => state.project.isLoading);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employee.list);
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
  const [project, setProject] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    clientName: '',
    active: false,
    employees: [],
    admins: ''
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(projectSchema) });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'employees') {
      setProject({
        ...project,
        [name]: [value]
      });
    }
    setProject({
      ...project,
      [name]: value
    });
  };

  const addMembers = (item) => {
    let membersData = [];
    if (typeof item !== 'string' || !item) {
      membersData = null;
    } else {
      const splitted = item.split(',');
      if (splitted.length === 0) {
        membersData = '';
      } else if (splitted.length === 1) {
        membersData.push({ name: `${splitted}` });
      } else {
        for (let i = 0; i < splitted.length; i++) {
          membersData.push({ name: `${splitted[i]}` });
        }
      }
    }
    return membersData;
  };
  function onSubmit(e) {
    e.preventDefault();
    setProjectInput({
      name: project.name,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      clientName: project.clientName,
      active: project.active,
      employees: addMembers(project.employees),
      admins: project.admins
    });
  }

  const confirmModal = (e) => {
    setIsOpenConfirm(true);
    onSubmit(e);
  };

  // /* Input NAME */
  // const handleInputName = (e) => {
  //   setProject({
  //     ...project,
  //     [e.target.name]: e.target.value
  //   });
  //   if (e.target.value === '') {
  //     setShowWarningName(true);
  //   } else {
  //     setShowWarningName(false);
  //   }
  // };
  // const handleClickName = () => {
  //   setShowWarningName(false);
  // };
  // const handleBlurName = (e) => {
  //   if (e.target.value === '') {
  //     setShowWarningName(true);
  //   }
  // };

  // /* Input DESCRIPTION */
  // const handleInputDesc = (e) => {
  //   setProject({
  //     ...project,
  //     [e.target.name]: e.target.value
  //   });
  //   if (e.target.value === '') {
  //     setShowWarningDesc(true);
  //   } else {
  //     setShowWarningDesc(false);
  //   }
  // };
  // const handleClickDesc = () => {
  //   setShowWarningDesc(false);
  // };
  // const handleBlurDesc = (e) => {
  //   if (e.target.value === '') {
  //     setShowWarningDesc(true);
  //   }
  // };

  // /* Input CLIENT NAME */
  // const handleInputCName = (e) => {
  //   setProject({
  //     ...project,
  //     [e.target.name]: e.target.value
  //   });
  //   if (e.target.value === '') {
  //     setShowWarningCName(true);
  //   } else {
  //     setShowWarningCName(false);
  //   }
  // };
  // const handleClickCName = () => {
  //   setShowWarningCName(false);
  // };
  // const handleBlurCName = (e) => {
  //   if (e.target.value === '') {
  //     setShowWarningCName(true);
  //   }
  // };

  // /* Input ADMIN */
  // const handleInputAdmin = (e) => {
  //   setProject({
  //     ...project,
  //     [e.target.name]: e.target.value
  //   });
  //   if (e.target.value === '') {
  //     setShowWarningAdmin(true);
  //   } else {
  //     setShowWarningAdmin(false);
  //   }
  // };
  // const handleClickAdmin = () => {
  //   setShowWarningAdmin(false);
  // };
  // const handleBlurAdmin = (e) => {
  //   if (e.target.value === '') {
  //     setShowWarningAdmin(true);
  //   }
  // };

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }
  return (
    <div className={styles.container}>
      <Logo />
      <h2>New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            labelText="Name"
            name="name"
            // inputValue={project.name}
            placeholder="Name"
            // warningMsg="Please check the information"
            register={register}
            error={errors.name?.messages}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Description"
            name="description"
            // inputValue={project.description}
            placeholder="write a description here"
            // warningMsg="Please check the information"
            register={register}
            error={errors.description?.messages}
          ></Input>
        </div>
        <div>
          {/* <label htmlFor="startDate">Start Date</label> */}
          <Input
            labelText="Start Date"
            type="date"
            name="startDate"
            placeholder="DD/MM/YYYY"
            // value={project.startDate.slice(0, 10)}
            register={register}
            error={errors.startDate?.messages}
            onChange={handleChange}
          ></Input>
        </div>
        <div>
          {/* <label htmlFor="endDate">End Date</label> */}
          <Input
            labelText="End Date"
            type="date"
            name="endDate"
            placeholder="DD/MM/YYYY"
            // value={project.endDate.slice(0, 10)}
            register={register}
            error={errors.endDate?.messages}
            onChange={handleChange}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Client Name"
            name="clientName"
            // inputValue={project.clientName}
            placeholder="enter a client here"
            // warningMsg="Please check the information"
            register={register}
            error={errors.clientName?.messages}
          ></Input>
        </div>
        <Dropdown
          name="active"
          labelText="Set if is active"
          register={register}
          error={errors.active?.messages}
        ></Dropdown>
        <Dropdown
          data={employeeData}
          name="employees"
          labelText="Select an employee"
          path="firstName"
          onChange={handleChange}
        ></Dropdown>
        <div>
          <Input
            labelText="Administrator"
            name="admins"
            // inputValue={project.admins}
            placeholder="enter an admin here"
            // warningMsg="Please check the information"
            register={register}
            error={errors.admins?.messages}
          ></Input>
        </div>
      </form>
      <div>
        <Button
          type={('submit', styles.modalProjectBtn)}
          name="project-submit"
          handleClick={(e) => {
            if (
              project.name === '' ||
              project.description === '' ||
              project.startDate === '' ||
              project.endDate === '' ||
              project.clientName === '' ||
              project.active === '' ||
              project.admins === ''
            ) {
              setIsOpenFail(true);
            } else {
              confirmModal(e);
            }
          }}
        >
          New Project
        </Button>
        <Modal showModal={isOpen} closeModal={() => setIsOpenConfirm(false)}>
          <h2>Project Creation</h2>
          <div>
            <p>Do you really want to create this project?</p>
          </div>
          <div className={styles.buttonsModal}>
            <Button
              type={styles.modalProjectBtn}
              handleClick={() => {
                dispatch(postProject(projectInput, setSuccess, setModalText));
                setIsOpenError(true);
                setIsOpenConfirm(false);
              }}
            >
              Create
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
            type={styles.backBtn}
            handleClick={() => {
              if (Success) {
                setSuccess(false);
                window.location.href = '/projects';
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
          <h2>Fill every field to continue</h2>
          <Button type={styles.modalProjectBtn} handleClick={() => setIsOpenFail(false)}>
            Ok
          </Button>
        </Modal>
        <Button type={styles.backBtn} handleClick={() => (window.location.href = '/projects')}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddNew;
