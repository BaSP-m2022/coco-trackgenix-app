import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import List from './List.jsx';

const Projects = () => {
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
      alert('Project deleted.');
    } catch (error) {
      console.error;
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <div>
        <h2>Projects</h2>
        <List list={list} deleteItem={deleteItem} setList={setList} />
        <button onClick={() => (window.location = '/projects/add')}>ADD NEW</button>
      </div>
    </section>
  );
};

export default Projects;
