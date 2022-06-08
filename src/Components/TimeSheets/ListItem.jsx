import React from 'react';
import styles from './time-sheets.module.css';
import Button from '../SharedComponents/Button/Button';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };

  const editTimeSheet = (_id) => {
    window.location = `/time-sheets/edit?=${_id}`;
  };

  // const handleUpdate = (_id) => {
  //   updateItem(_id);
  //   editMode();
  //   props.history.push('/time-sheets/edit');
  // };
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
  const timeSheetList = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.employeeId ? item.employeeId.firstName : 'No Employee'}</td>
        <td>{item.projectId ? item.projectId.name : 'No project'}</td>
        <td>{dateFormatter(item.startDate.substring(0, 10))}</td>
        <td>{dateFormatter(item.endDate.substring(0, 10))}</td>
        <td>{amountOfTasks(item.tasks)}</td>
        <td>
          <Button type={styles.editBtn} handleClick={() => editTimeSheet(item._id)}>
            Edit
          </Button>
        </td>
        <td>
          <Button type={styles.deleteBtn} handleClick={() => handleDelete(item._id)}>
            X
          </Button>
        </td>
      </tr>
    );
  });
  return <>{timeSheetList}</>;
};

export default ListItem;
