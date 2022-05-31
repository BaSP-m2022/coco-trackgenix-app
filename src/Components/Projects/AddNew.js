import React, { useState } from 'react';
import styles from './addNew.module.css';

const AddNew = () => {
  const initialValues = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    clientName: '',
    active: false,
    employees: '',
    admins: ''
  };

  const [project, setProject] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // mode: 'no-cors',
      body: JSON.stringify({
        name: project.name,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
        clientName: project.clientName,
        active: project.active,
        // employees: project.employees,
        admins: project.admins
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then((json) => {
      //   if (!json.error) {
      //     console.log('hello mfs');
      //   }
      // })
      .catch((error) => console.log(error));
  };

  return (
    <section className={styles.container}>
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
            placeholder="MM/DD/YYYY"
            value={project.startDate}
            onChange={handleChange}
          ></input>
          <span>Must have MM/DD/YYYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="MM/DD/YYYY"
            value={project.endDate}
            onChange={handleChange}
          ></input>
          <span>Must have MM/DD/YYYY format. And be a valid Date.</span>
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
          <input
            type="checkbox"
            name="active"
            value={project.active}
            onChange={handleChange}
          ></input>
          <span>Set if the project is active or not.</span>
        </div>
        <div>
          <label htmlFor="employees">Employees</label>
          <input
            type="text"
            name="employees"
            placeholder="Assign employees with their IDs"
            value={project.employees}
            onChange={handleChange}
          ></input>
          <span>Must be the ID of an existing employee. Separate IDs with a comma.</span>
        </div>
        <div>
          <label htmlFor="admins">Admins</label>
          <input
            type="text"
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
        <a href="/projects">Cancel</a>
      </form>
    </section>
  );
};

export default AddNew;
