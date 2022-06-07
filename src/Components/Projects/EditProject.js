import React, { useState, useEffect } from 'react';
import styles from './editProject.module.css';

const EditProject = () => {
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

      changedDate = `${month}-${day}-${year}`;
    }

    return changedDate;
  };

  const addMembers = (item) => {
    let splitted = item.split(',');
    let membersData = [];
    if (splitted.length === 0) {
      membersData = '';
    } else if (splitted.length === 1) {
      membersData.push({ name: `${splitted}` });
    } else {
      for (let i = 0; i < splitted.length; i++) {
        membersData.push({ name: `${splitted[i]}` });
      }
    }
    return membersData;
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
        setStartDate(response.data.startDate);
        setEndDate(response.data.endDate);
        setClientName(response.data.clientName);
        setActive(response.data.active);
        setEmployees(response.data.employees);
        setAdmins(response.data.admins);
      });
  }, []);

  return (
    <div className={styles.container}>
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
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
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
          <span>Must have less than 130 characters.</span>
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
          <span>Must have DD/MM/YYYYY format. And be a valid Date.</span>
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
          <span>Must have DD/MM/YYYYY format. And be a valid Date.</span>
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
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
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
          <span>Set if the project is active or not.</span>
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
            value={employees}
          ></input>
          <span>Must be the ID of an existing employee. Separate IDs with a comma.</span>
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
          <span>Must have less than 50 characters. Only admin names.</span>
        </div>
        <div>
          <input type="submit" name="project-submit" value="EDIT PROJECT"></input>
        </div>
        <button onClick={() => (window.location = '/projects')}>BACK</button>
      </form>
    </div>
  );
};
export default EditProject;
