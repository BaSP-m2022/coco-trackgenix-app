import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table/index';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTasks, getTasks } from '../redux/modules/tasks/thunks';

const Tasks = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks.list);
  const isFetching = useSelector((state) => state.tasks.isFetching);
  const error = useSelector((state) => state.tasks.error);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const deleteItem = (id) => {
    dispatch(deleteTasks(id)).then(setIsOpen(true));
  };

  const handleEdit = (_id) => {
    window.location = `/tasks/edit?=${_id}`;
  };

  if (isFetching) {
    return <Loading className={styles.loadText}></Loading>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Tasks</h2>
      <div className={styles.tableContainer}>
        <Button type={styles.buttonAdd} handleClick={() => props.history.push('tasks/add')}>
          + Add Task
        </Button>
        <Table
          data={list}
          headers={['description', 'workedHours', 'date']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        />
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Tasks has been deleted successfully!</h2>
        <Button type={styles.buttonAdd} handleClick={() => setIsOpen(false)}>
          Ok
        </Button>
      </Modal>
    </section>
  );
};

export default Tasks;
