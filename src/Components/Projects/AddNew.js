import React, { useState, useEffect } from 'react';
import styles from './addNew.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Input from '../SharedComponents/Input/Input';
import Modal from '../SharedComponents/Modal/Modal';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Loading from '../SharedComponents/Loading/Loading';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../redux/modules/employees/thunks';
import { postProject } from '../redux/modules/projects/thunks';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const AddNew = () => {
  const [modalText, setModalText] = useState('');
  const [Success, setSuccess] = useState('');
  const isLoading = useSelector((state) => state.project.isLoading);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employee.list);
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

  const projectSchema = Joi.object({});

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

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(projectSchema) });

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
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            labelText="Name"
            name="name"
            placeholder="Name"
            type="text"
            error={errors.name?.message}
            register={register}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Description"
            name="description"
            placeholder="write a description here"
            type="text"
            error={errors.description?.message}
            register={register}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Start Date"
            type="date"
            name="startDate"
            placeholder="DD/MM/YYYY"
            register={register}
            error={errors.startDate?.message}
          ></Input>
        </div>
        <div>
          <Input
            labelText="End Date"
            type="date"
            name="endDate"
            placeholder="DD/MM/YYYY"
            error={errors.endDate?.message}
            register={register}
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
        </div>
        <Dropdown
          name="active"
          type="boolean"
          labelText="Set if is active"
          register={register}
          error={errors.active?.message}
          onChange={handleChange}
        ></Dropdown>
        <Dropdown
          data={employeeData}
          name="employees"
          type="text"
          labelText="Select an employee"
          path="firstName"
          onChange={handleChange}
        ></Dropdown>
        <div>
          <Input
            labelText="Administrator"
            name="admins"
            type="text"
            register={register}
            error={errors.admins?.message}
            placeholder="enter an admin here"
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
