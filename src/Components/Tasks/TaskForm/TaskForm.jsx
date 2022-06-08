import React, { useState } from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import styles from './taskForm.module.css';
import Button from '../../SharedComponents/Button/Button';

const TaskForm = (props) => {
  const [newItem, setNewItem] = useState({
    description: props.description,
    workedHours: props.workedHours
  });

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: newItem.description,
        workedHours: newItem.workedHours
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
      <h2 className={styles.title}>New Task</h2>
      <div className={styles.formContainer}>
        <Button type={styles.buttonForm} handleClick={() => props.history.push('/tasks')}>
          BACK
        </Button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <div className={styles.inputDescription}>
              <label>Task description</label>
              <input
                type="text"
                name="description"
                value={newItem.description}
                onChange={handleChange}
              ></input>
            </div>
            <div className={styles.inputWorkedHours}>
              <label>Worked Hours</label>
              <input
                type="number"
                name="workedHours"
                value={newItem.workedHours}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button type={('submit', styles.buttonForm)}>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
