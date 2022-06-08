import React from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import Button from '../../SharedComponents/Button/Button';
import styles from './taskForm.module.css';
import { useState, useEffect } from 'react';

const TaskFormEdit = (props) => {
  const [description, setDescription] = useState('');
  const [workedHours, setWorkedHours] = useState('');
  const params = window.location.search;
  let id = params.substring(2);
  console.log(id);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setDescription(response.data.description);
        setWorkedHours(response.data.workedHours);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        workedHours: workedHours
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          alert(`${data.msg}`);
          props.history.push('/tasks');
        } else {
          alert(`${data.msg}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Edit Task</h2>
      <div className={styles.formContainer}>
        <Button type={styles.buttonAdd} handleClick={() => props.history.push('/tasks')}>
          BACK
        </Button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <div className={styles.inputDescription}>
              <label>Task description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.inputWorkedHours}>
              <label>Worked Hours</label>
              <input
                type="number"
                name="workedHours"
                value={workedHours}
                onChange={(e) => {
                  setWorkedHours(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <Button type={('submit', styles.buttonAdd)}>Edit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TaskFormEdit;
