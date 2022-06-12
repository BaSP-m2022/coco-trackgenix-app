import React, { useState } from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import styles from './taskForm.module.css';
import Button from '../../SharedComponents/Button/Button';
import Modal from '../../SharedComponents/Modal/Modal';
import Input from '../../SharedComponents/Input/Input';

const TaskForm = (props) => {
  const [newItem, setNewItem] = useState({
    description: props.description,
    workedHours: props.workedHours
  });
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);

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
          setResStatus(true);
          setResponseMsg(data.msg.substring(9));
        } else {
          setResStatus(false);
          if (data.msg.includes('fails to match the required pattern')) {
            setResponseMsg('the data entered is not correct');
          } else {
            setResponseMsg('all fields should be completed.');
          }
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
  const handleInput1 = (e) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };
  const handleInput2 = (e) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
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
              <Input
                name="description"
                labelText="Task Description"
                placeholder="Task Description"
                inputValue={newItem.description}
                warningMsg="*This field must be completed!"
                handleInput={handleInput1}
                showWarning={showWarning1}
              ></Input>
            </div>
            <div className={styles.inputWorkedHours}>
              <Input
                name="workedHours"
                labelText="Worked Hours"
                placeholder="Worked Hours"
                inputValue={newItem.workedHours}
                warningMsg="*This field must be completed!"
                handleInput={handleInput2}
                showWarning={showWarning2}
              ></Input>
            </div>
          </div>
          <Button type={('submit', styles.buttonForm)} handleClick={() => setIsOpen(true)}>
            Create
          </Button>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={handleOkBtn}>
        <h2>{resStatus ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>
          {resStatus ? responseMsg : `The task could not be created because ${responseMsg}`}
        </h3>
        <Button type={styles.buttonForm} handleClick={handleOkBtn}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};

export default TaskForm;
