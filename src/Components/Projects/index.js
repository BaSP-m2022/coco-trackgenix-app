import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import { useHistory } from 'react-router-dom';
import List from './List.jsx';
import Logo from '../SharedComponents/Logo/Logo';

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

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/projects/edit?=${item}`);
  };

  return (
    <section className={styles.container}>
      <Logo />
      <div>
        <h2>Projects</h2>
        <List list={list} deleteItem={deleteItem} handleEdit={handleEdit} />
        <button onClick={() => props.history.push('/projects/add')}>ADD NEW</button>
      </div>
    </section>
  );
};

export default Projects;
