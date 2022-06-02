import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import List from './List.jsx';

const Projects = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`);
      const data = await response.json();
      console.log(data.data);
      setList(data.data);
      console.log(setList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteItem = (_id) => {
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      alert(`Project with ID: ${_id} deleted.`);
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div>
        <List list={list} deleteItem={deleteItem} setList={setList} />
        <a href="/projects/add">Add New Project</a>
      </div>
    </section>
  );
};

export default Projects;
