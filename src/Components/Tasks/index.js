import React, { useEffect, useState } from 'react';
import styles from 'Components/Tasks/tasks.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Table from 'Components/SharedComponents/Table/index';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Loading from 'Components/SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTasks, getTasks } from 'Components/redux/modules/tasks/thunks';

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
    window.location = `/admins/tasks/edit?=${_id}`;
  };

  if (isFetching) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Tasks</h2>
      <div className={styles.tableContainer}>
        <Table
          data={list}
          headers={['description', 'workedHours', 'date']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        >
          <Button
            type={styles.buttonAdd}
            handleClick={() => props.history.push('admins/tasks/add')}
          >
            + Add Task
          </Button>
        </Table>
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
