import styles from './time-sheets.module.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../SharedComponents/Table';
import Modal from '../SharedComponents/Modal/Modal';
import Button from '../SharedComponents/Button/Button';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getTimesheet, deleteTimesheet } from '../redux/modules/timeSheets/thunks';

const Timesheets = (props) => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.timesheet.list);
  const [isOpen, setIsOpen] = useState(false);

  const isLoadingTimesheet = useSelector((state) => state.timesheet.isLoading);

  useEffect(async () => {
    if (!isOpen) {
      dispatch(getTimesheet());
    }
  }, [isOpen]);

  const deleteItem = (_id) => {
    dispatch(deleteTimesheet(_id));
    setIsOpen(true);
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/time-sheets/edit?=${item}`);
  };

  if (isLoadingTimesheet) {
    return <Loading></Loading>;
  }

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Timesheets</h2>
      <Button
        type={styles.timesheetButton}
        handleClick={() => props.history.push('/time-sheets/add')}
      >
        Add timesheet
      </Button>
      <Table
        data={responseData}
        headers={['employeeId', 'projectId', 'startDate', 'endDate', 'tasks']}
        handleEdit={handleEdit}
        deleteItem={deleteItem}
      ></Table>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Success!</h2>
        <div>
          <p>Timesheet deleted Succesfully</p>
        </div>
        <div>
          <Button type={styles.modalTimesheetBtn} handleClick={() => setIsOpen(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Timesheets;
