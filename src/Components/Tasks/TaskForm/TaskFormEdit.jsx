import React from 'react';
import Logo from '../../SharedComponents/Logo/Logo';
import Button from '../../SharedComponents/Button/Button';
import styles from './taskForm.module.css';
import { useState, useEffect } from 'react';
import Modal from '../../SharedComponents/Modal/Modal';
import Input from '../../SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { editTasks, getTaskById } from '../../redux/modules/tasks/thunks';
import Loading from '../../SharedComponents/Loading/Loading';

const TaskFormEdit = (props) => {
  const [description, setDescription] = useState('');
  const [workedHours, setWorkedHours] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
  const params = window.location.search;
  const id = params.substring(2);

  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);

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

  const handleInput1 = (e) => {
    setDescription(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setWorkedHours(e.target.value);
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };

  const handleBlurInput1 = (e) => {
    if (e.target.value === '') {
      setShowWarning1(true);
    }
  };

  const handleBlurInput2 = (e) => {
    if (e.target.value === '') {
      setShowWarning2(true);
    }
  };

  const handleClick1 = () => {
    setShowWarning1(false);
  };

  const handleClick2 = () => {
    setShowWarning2(false);
  };

  if (isFetching) {
    return <Loading className={styles.loadText}></Loading>;
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
              <Input
                name="description"
                labelText="Task Description"
                placeholder="Task Description"
                inputValue={description}
                warningMsg="*This field must be completed!"
                handleInput={handleInput1}
                handleClick={handleClick1}
                handleBlur={handleBlurInput1}
                showWarning={showWarning1}
              ></Input>
            </div>
            <div className={styles.inputWorkedHours}>
              <Input
                name="workedHours"
                labelText="Worked Hours"
                placeholder="Worked Hours"
                inputValue={workedHours}
                warningMsg="*This field must be completed!"
                handleInput={handleInput2}
                handleBlur={handleBlurInput2}
                handleClick={handleClick2}
                showWarning={showWarning2}
              ></Input>
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
