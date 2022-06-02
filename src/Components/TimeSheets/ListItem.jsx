import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };
  const timeSheetList = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.employeeId.firstName}</td>
        <td>{item.projectId != null ? item.projectId.name : 'No project'}</td>
        <td>{item.startDate.toString()}</td>
        <td>{item.endDate.toString()}</td>
        <td>{item.tasks.length === 1 ? item.tasks[0].description : 'Various Task'}</td>
        <td>
          <button onClick={() => handleDelete(item._id)}>X</button>
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
