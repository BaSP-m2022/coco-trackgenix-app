import React from 'react';
import styles from './editProject.module.css';

const EditProject = () => {
  return (
    <section className={styles.container}>
      <h2>Add New Project</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Give it a name"></input>
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" placeholder="Set a description"></input>
          <span>Must have less than 130 characters.</span>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" placeholder="MM/DD/YYYY"></input>
          <span>Must have MM/DD/YYYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" placeholder="MM/DD/YYYY"></input>
          <span>Must have MM/DD/YYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="clientName">Client Name</label>
          <input type="text" name="clientName" placeholder="For what client?"></input>
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
          <input type="text" name="employees" placeholder="Assign employees with their IDs"></input>
          <span>Must be the ID of an existing employee. Separate IDs with a comma.</span>
        </div>
        <div>
          <label htmlFor="admins">Admins</label>
          <input type="text" name="admins" placeholder="Assign the admins"></input>
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

export default EditProject;
