import React, { useState, useEffect } from 'react';
import styles from './addNew.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import { useHistory } from 'react-router-dom';
import Modal from '../SharedComponents/Modal/Modal';

const AddNew = () => {
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

  // const checkEmptyFields = () => {
  // };

  return (
    <div className={styles.container}>
      <Logo />
      <h2>New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="Give it a name"
            value={project.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            required="required"
            placeholder="Set a description"
            value={project.description}
            onChange={handleChange}
          ></input>
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
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            name="clientName"
            required="required"
            placeholder="For what client?"
            value={project.clientName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input type="text" name="active" value={project.active} onChange={handleChange}></input>
        </div>
        <div>
          <label htmlFor="employees">Employees</label>
          <select name="employees" onChange={handleChange}>
            <option disabled selected>
              Pick an employee
            </option>
            {employeesData.map((item) => (
              <option key={item.id} value={item._id}>
                {item.firstName + ' ' + item.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="admins">Admins</label>
          <input
            name="admins"
            required="required"
            placeholder="Assign the admins"
            value={project.admins}
            onChange={handleChange}
          ></input>
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
              setIsOpen2(true);
            } else {
              handleSubmit(e);
              history.push('/projects');
            }
          }}
        >
          New Project
        </Button>
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
