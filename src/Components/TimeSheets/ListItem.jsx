import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const dateFormatter = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  const timeSheetList = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.employeeId.firstName}</td>
        <td>{item.projectId != null ? item.projectId.name : 'No project'}</td>
        <td>{dateFormatter(item.startDate.substring(0, 10))}</td>
        <td>{dateFormatter(item.endDate.substring(0, 10))}</td>
        <td>{item.tasks.length === 1 ? item.tasks[0].description : 'Various Task'}</td>
        <td>
          <button onClick={() => deleteItem(item._id)}>X</button>
        </td>
        <td>
          <button>Edit</button>
        </td>
      </tr>
    );
  });
  return <>{timeSheetList}</>;
};

export default ListItem;
