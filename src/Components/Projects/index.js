import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Table from '../SharedComponents/Table/index';

const Projects = (props) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`);
      const data = await response.json();
      setList(data.data);
    } catch (error) {
      console.error;
    }
  }, []);

  const deleteItem = (_id) => {
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
        method: 'DELETE'
      });
      alert(`Project with ID: ${_id} deleted.`);
    } catch (error) {
      console.error;
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <Logo />
      <div className="forButton">
        <h2>Projects</h2>
        <Table
          data={list}
          headers={[
            'name',
            'clientName',
            'admins',
            'createdAt',
            'description',
            'startDate',
            'endDate',
            'employees',
            'active'
          ]}
          handleEdit={deleteItem}
          setList={setList}
        ></Table>
        <Button type={styles.addProject} handleClick={() => props.history.push('/projects/add')}>
          + Add new Project
        </Button>
      </div>
    </section>
  );
};

export default Projects;
