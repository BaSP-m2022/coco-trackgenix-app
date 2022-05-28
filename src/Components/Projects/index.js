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
  console.log('Probando', list);
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div>
        <List list={list} setList={setList} />
      </div>
    </section>
  );
};

export default Projects;
