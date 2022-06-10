import React, { useState, useEffect } from 'react';
import styles from './addNew.module.css';
// import Logo from '../SharedComponents/Logo/Logo';
// import Modal from '../SharedComponents/Modal/Modal';
// import Button from '../SharedComponents/Button/Button';

const AddNew = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [status, setStatus] = useState();
  // const [modalText, setModalText] = useState();
  // const emptyArray = [];
  // const [projectLst, setProjectList] = useState(emptyArray);
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
  const [project, setProject] = useState(initialValues);
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/employees`)
      .then((res) => res.json())
      .then((json) => {
        setEmployeesData(...employeesData, json.data);
      });
  }, []);

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

  const createProject = async (e) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      // setStatus(response.status);
      // setModalText(response.message);
      // setIsOpen(true);
    } catch (error) {
      console.error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(project);
    setProject({
      name: project.name,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      clientName: project.clientName,
      active: project.active,
      employees: addMembers(project.employees),
      admins: project.admins
    });
  };

  // const check = (s) => {
  //   let result;
  //   if (s == '201') {
  //     props.history.push('/projects');
  //   } else {
  //     setIsOpen(false);
  //   }
  //
  //   return result;
  // };

  return (
    <div className={styles.container}>
      <h2>Add New Project</h2>
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
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
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
          <span>Must have less than 130 characters.</span>
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
          <span>Must have DD/MM/YYYYY format. And be a valid Date.</span>
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
          <span>Must have DD/MM/YYYYY format. And be a valid Date.</span>
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
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input type="text" name="active" value={project.active} onChange={handleChange}></input>
          <span>Set if the project is active or not.</span>
        </div>
        <div>
          <label htmlFor="employees">Employees</label>
          <select name="employees" onChange={handleChange}>
            <option disabled selected>
              Select an employee
            </option>
            {employeesData.map((item) => (
              <option key={item.id} value={item._id}>
                {item.firstName + ' ' + item.lastName}
              </option>
            ))}
          </select>
          <span>Must be the ID of an existing employee. Separate IDs with a comma.</span>
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
          <span>Must have less than 50 characters. Only admin names.</span>
        </div>
        <div>
          <input type="submit" name="project-submit" value="ADD NEW PROJECT"></input>
        </div>
        <button onClick={() => (window.location = '/projects')}>BACK</button>
      </form>
    </div>
  );
};

export default AddNew;
