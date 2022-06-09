import React from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import Button from '../../SharedComponents/Button/Button';
import styles from './taskForm.module.css';
import { useState, useEffect } from 'react';
import Modal from '../../SharedComponents/Modal/Modal';

const TaskFormEdit = (props) => {
  const [description, setDescription] = useState('');
  const [workedHours, setWorkedHours] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
  const params = window.location.search;
  let id = params.substring(2);

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
          setResStatus(true);
          setResponseMsg(data.msg.substring(9));
        } else {
          setResStatus(false);
          setResponseMsg(data.msg.substring(9));
        }
      })
      .catch((error) => console.error(error));
  };
  const handleOkBtn = () => {
    if (resStatus) {
      props.history.push('/tasks');
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Edit Task</h2>
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
          <Button type={('submit', styles.buttonForm)} handleClick={() => setIsOpen(true)}>
            Edit
          </Button>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={handleOkBtn}>
        <h2>{resStatus ? 'Success!' : 'Warning!'}</h2>
        <h3>{resStatus ? responseMsg : `The task could not be updated because ${responseMsg}`}</h3>
        <Button type={styles.buttonForm} handleClick={handleOkBtn}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};
export default TaskFormEdit;