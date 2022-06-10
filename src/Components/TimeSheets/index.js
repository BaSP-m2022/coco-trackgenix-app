import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import { useHistory } from 'react-router-dom';
import Button from '../SharedComponents/Button/Button';
import Table from '../SharedComponents/Table';
import Logo from '../SharedComponents/Logo/Logo';

function TimeSheets(props) {
  const [list, setList] = useState([]);

  const amountOfTasks = (tasks) => {
    if (tasks.length === 1) {
      return tasks[0].description;
    } else if (tasks.length === 0) {
      return 'Not assigned';
    } else {
      return 'Various Tasks';
    }
  };

  const dateFormatter = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/timesheets`)
      .then((res) => res.json())
      .then((json) => {
        json.data.map((item) => {
          item.employeeId = item.employeeId ? item.employeeId.firstName : 'No Employee';
          item.projectId = item.projectId ? item.projectId.name : 'No project';
          item.startDate = dateFormatter(item.startDate.substring(0, 10));
          item.endDate = dateFormatter(item.endDate.substring(0, 10));
          item.tasks = amountOfTasks(item.tasks);
        });
        setList(json.data);
      });
  }, []);

  const deleteItem = (id) => {
    setList([...list.filter((listItem) => listItem._id !== id)]);
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error(error);
    }
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/time-sheets/edit?=${item}`);
  };

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>TimeSheets</h2>
      <Table
        data={list}
        headers={['employeeId', 'projectId', 'startDate', 'endDate', 'tasks']}
        handleEdit={handleEdit}
        deleteItem={deleteItem}
      >
        <Button type={styles.buttonAdd} handleClick={() => props.history.push('/time-sheets/add')}>
          Add Time Sheet
        </Button>
      </Table>
    </section>
  );
}
export default TimeSheets;
