import React, { useState, useEffect } from 'react';
import styles from './addNew.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Input from '../SharedComponents/Input/Input';
import { useHistory } from 'react-router-dom';
import Modal from '../SharedComponents/Modal/Modal';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';

const AddNew = () => {
  const [showWarningName, setShowWarningName] = useState(false);
  const [showWarningDesc, setShowWarningDesc] = useState(false);
  const [showWarningCName, setShowWarningCName] = useState(false);
  const [showWarningAdmin, setShowWarningAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const initialValues = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    clientName: '',
    active: false,
    employees: [],
    admins: ''
  };

  let history = useHistory();

  const [project, setProject] = useState(initialValues);

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
    if (!item) {
      membersData = null;
    } else {
      let splitted = item.split(',');
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

  /* Input NAME */
  const handleInputName = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarningName(true);
    } else {
      setShowWarningName(false);
    }
  };
  const handleClickName = () => {
    setShowWarningName(false);
  };
  const handleBlurName = (e) => {
    if (e.target.value === '') {
      setShowWarningName(true);
    }
  };

  /* Input DESCRIPTION */
  const handleInputDesc = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarningDesc(true);
    } else {
      setShowWarningDesc(false);
    }
  };
  const handleClickDesc = () => {
    setShowWarningDesc(false);
  };
  const handleBlurDesc = (e) => {
    if (e.target.value === '') {
      setShowWarningDesc(true);
    }
  };

  /* Input CLIENT NAME */
  const handleInputCName = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarningCName(true);
    } else {
      setShowWarningCName(false);
    }
  };
  const handleClickCName = () => {
    setShowWarningCName(false);
  };
  const handleBlurCName = (e) => {
    if (e.target.value === '') {
      setShowWarningCName(true);
    }
  };

  /* Input ADMIN */
  const handleInputAdmin = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    if (e.target.value === '') {
      setShowWarningAdmin(true);
    } else {
      setShowWarningAdmin(false);
    }
  };
  const handleClickAdmin = () => {
    setShowWarningAdmin(false);
  };
  const handleBlurAdmin = (e) => {
    if (e.target.value === '') {
      setShowWarningAdmin(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: project.name,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
        clientName: project.clientName,
        active: project.active,
        employees: addMembers(project.employees),
        admins: project.admins
      })
    }).catch(() => console.error);
  };

  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/employees`)
      .then((res) => res.json())
      .then((json) => {
        setEmployeesData(...employeesData, json.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Logo />
      <h2>New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            labelText="Name"
            name="name"
            inputValue={project.name}
            placeholder="Name"
            warningMsg="Please check the information"
            handleInput={handleInputName}
            handleClick={handleClickName}
            handleBlur={handleBlurName}
            showWarning={showWarningName}
          ></Input>
        </div>
        <div>
          <Input
            labelText="Description"
            name="description"
            inputValue={project.description}
            placeholder="write a description here"
            warningMsg="Please check the information"
            handleInput={handleInputDesc}
            handleClick={handleClickDesc}
            handleBlur={handleBlurDesc}
            showWarning={showWarningDesc}
          ></Input>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            required="required"
            placeholder="DD/MM/YYYY"
            value={project.startDate}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            required="required"
            placeholder="DD/MM/YYYY"
            value={project.endDate}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <Input
            labelText="Client Name"
            name="clientName"
            inputValue={project.clientName}
            placeholder="enter a client here"
            warningMsg="Please check the information"
            handleInput={handleInputCName}
            handleClick={handleClickCName}
            handleBlur={handleBlurCName}
            showWarning={showWarningCName}
          ></Input>
        </div>
        <Dropdown name="active" labelText="Set if is active" onChange={handleChange}></Dropdown>
        <Dropdown
          data={employeesData}
          name="employees"
          labelText="Select an employee"
          path="firstName"
          onChange={handleChange}
        ></Dropdown>
        <div>
          <Input
            labelText="Administrator"
            name="admins"
            inputValue={project.admins}
            placeholder="enter an admin here"
            warningMsg="Please check the information"
            handleInput={handleInputAdmin}
            handleClick={handleClickAdmin}
            handleBlur={handleBlurAdmin}
            showWarning={showWarningAdmin}
          ></Input>
        </div>
      </form>
      <div>
        <Button
          type={('submit', styles.modalProjectBtn)}
          name="project-submit"
          handleClick={() => {
            if (
              project.name === '' ||
              project.description === '' ||
              project.startDate === '' ||
              project.endDate === '' ||
              project.clientName === '' ||
              project.active === '' ||
              project.admins === ''
            ) {
              setIsOpen2(true);
            } else {
              setIsOpen(true);
            }
          }}
        >
          New Project
        </Button>
        <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
          <h2>Success!</h2>
          <div>
            <p>Project created successfully</p>
          </div>
          <div>
            <Button
              type={styles.modalProjectBtn}
              handleClick={(e) => {
                handleSubmit(e);
                history.push('/projects');
              }}
            >
              Ok
            </Button>
          </div>
        </Modal>
        <Modal showModal={isOpen2} closeModal={() => setIsOpen2(false)}>
          <h2>Fill every field to continue</h2>
          <Button type={styles.modalProjectBtn} handleClick={() => setIsOpen2(false)}>
            Ok
          </Button>
        </Modal>
        <Button type={styles.backBtn} handleClick={() => history.goBack()}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddNew;
