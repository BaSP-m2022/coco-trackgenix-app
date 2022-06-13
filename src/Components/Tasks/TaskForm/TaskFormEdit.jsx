import React from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import Button from '../../SharedComponents/Button/Button';
import styles from './taskForm.module.css';
import { useState, useEffect } from 'react';
import Modal from '../../SharedComponents/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { editTasks, getTaskById } from '../../redux/modules/tasks/thunks';

const TaskFormEdit = (props) => {
  const [description, setDescription] = useState('');
  const [workedHours, setWorkedHours] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
  const params = window.location.search;
  const id = params.substring(2);

  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.tasks.selectedItem);
  const isFetching = useSelector((state) => state.tasks.isFetching);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(getTaskById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      setDescription(selectedItem.description);
      setWorkedHours(selectedItem.workedHours);
    }
  }, [selectedItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = params.substring(2);
    dispatch(
      editTasks(
        id,
        {
          description: description,
          workedHours: workedHours
        },
        setResStatus,
        setResponseMsg
      )
    );
  };

  const handleOkBtn = () => {
    if (resStatus) {
      props.history.push('/tasks');
    } else {
      setIsOpen(false);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

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
        <h3 className={styles.modalMsg}>
          {resStatus ? responseMsg : `The task could not be updated because ${responseMsg}`}
        </h3>
        <Button type={styles.buttonForm} handleClick={handleOkBtn}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};
export default TaskFormEdit;
