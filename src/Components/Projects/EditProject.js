import React, { useState, useEffect } from 'react';
import styles from './editProject.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import { useHistory } from 'react-router-dom';
import Modal from '../SharedComponents/Modal/Modal';

const EditProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkEmployees = (employees) => {
    let response;
    if (employees.length === 0) {
      response = 'No employees defined yet';
    } else if (employees.length === 1) {
      response = employees[0].name;
    } else {
      response = 'Various employees';
    }

    return response;
  };

  let history = useHistory();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [active, setActive] = useState('');
  const [employees, setEmployees] = useState(checkEmployees([]));
  const [admins, setAdmins] = useState('');

  const params = window.location.search;
  let id = params.substring(2);
  const changeDate = (date) => {
    let changedDate;
    if (!date) {
      changedDate = null;
    } else {
      let substrained = date.substring(0, 10);
      let year = Number(substrained.split('-')[0]);
      let month = Number(substrained.split('-')[1]);
      let day = Number(substrained.split('-')[2]);

      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }

      changedDate = `${year}-${month}-${day}`;
    }

    return changedDate;
  };

  const addMembers = (employees) => {
    let allIds = employees[0]._id + ',';
    for (let i = 1; i < employees.length; i++) {
      allIds += employees[i]._id + ',';
    }
    return allIds;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        startDate: changeDate(startDate),
        endDate: changeDate(endDate),
        clientName: clientName,
        active: Boolean.valueOf(active),
        employees: addMembers(employees),
        admins: admins
      })
    })
      .then((response) => response.json())
      .then(() => {
        alert('Project updated succesfully!');
        window.location = '/projects';
      })
      .catch(() => {
        console.error;
        alert('There was a problem!');
      });
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setStartDate(changeDate(response.data.startDate));
        setEndDate(changeDate(response.data.endDate));
        setClientName(response.data.clientName);
        setActive(response.data.active);
        setEmployees(response.data.employees);
        setAdmins(response.data.admins);
      });
  }, []);

  const showEmployees = (employees) => {
    let allIds = employees[0]._id + ',';
    for (let i = 1; i < employees.length; i++) {
      allIds += employees[i]._id + ',';
    }
    return allIds;
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Set a description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></input>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            placeholder="DD/MM/YYYY"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            value={startDate}
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="DD/MM/YYYY"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            value={endDate}
          ></input>
        </div>
        <div>
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            name="clientName"
            placeholder="For what client?"
            onChange={(e) => {
              setClientName(e.target.value);
            }}
            value={clientName}
          ></input>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input
            type="text"
            name="active"
            placeholder="Set if is 'true' or 'false'"
            onChange={(e) => {
              setActive(e.target.value);
            }}
            value={active}
          ></input>
        </div>
        <div>
          <label htmlFor="employees">Employees</label>
          <input
            type="text"
            name="employees"
            placeholder="Assign employees with their IDs"
            onChange={(e) => {
              setEmployees(e.target.value);
            }}
            value={showEmployees(employees)}
          ></input>
        </div>
        <div>
          <label htmlFor="admins">Admins</label>
          <input
            type="text"
            name="admins"
            placeholder="Assign the admins"
            onChange={(e) => {
              setAdmins(e.target.value);
            }}
            value={admins}
          ></input>
        </div>
        <div>
          <input type="submit" name="project-submit" value="EDIT PROJECT"></input>
        </div>
      </form>
      <Button type={('button', styles.backBtn)} handleClick={() => history.goBack()}>
        BACK
      </Button>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}></Modal>
    </div>
  );
};
export default EditProject;
