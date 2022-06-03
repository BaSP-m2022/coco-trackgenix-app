import React from 'react';

const ListItem = ({ listItem, deleteItem, editMode, updateItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };
  const handleUpdate = (_id) => {
    updateItem(_id);
    editMode();
  };
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
        <td>{item.employeeId.firstName}</td>
        <td>{item.projectId != null ? item.projectId.name : 'No project'}</td>
        <td>{dateFormatter(item.startDate.substring(0, 10))}</td>
        <td>{dateFormatter(item.endDate.substring(0, 10))}</td>
        <td>{amountOfTasks(item.tasks)}</td>
        <td>
          <button onClick={() => handleDelete(item._id)}>X</button>
        </td>
        <td>
          <button onClick={() => handleUpdate(item._id)}>Edit</button>
        </td>
      </tr>
    );
  });
  return <>{timeSheetList}</>;
};

export default ListItem;
