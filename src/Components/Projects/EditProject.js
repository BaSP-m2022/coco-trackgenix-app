import React, { useState } from 'react';
import styles from './editProject.module.css';

const EditProject = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);
  const [clientName, setClientName] = useState(item.clientName);
  // const [active, setActive] = useState(item.active);
  const [employees, setEmployees] = useState(item.employees);
  const [admins, setAdmins] = useState(item.admins);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://coco-trackgenix-server.vercel.app/projects/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // mode: 'no-cors',
      body: JSON.stringify({
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        clientName: clientName,
        active: false,
        employees: employees,
        admins: admins
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Project updated succesfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('There was a problem!');
      });
  };
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
            placeholder="MM/DD/YYYY"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            value={startDate}
          ></input>
          <span>Must have MM/DD/YYYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="MM/DD/YYYY"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            value={endDate}
          ></input>
          <span>Must have MM/DD/YYYY format. And be a valid Date.</span>
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
          <select name="active">
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
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
        <a href="/projects">Cancel</a>
      </form>
    </div>
  );
};
export default EditProject;
