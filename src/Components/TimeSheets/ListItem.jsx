import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(listItem._id);
  };

  const tasks = listItem.tasks;
  const stDate = new Date(listItem.startDate).toLocaleDateString();
  const enDate = new Date(listItem.endDate).toLocaleDateString();

  return (
    <tr>
      <td>
        <ul>
          {tasks.map((element) => {
            return <li key={element.id}>{element.description.toUpperCase()}</li>;
          })}
        </ul>
      </td>
      <td>{listItem.employeeId.firstName}</td>
      <td>{listItem.projectId != null ? listItem.projectId.name : 'not assigned!'}</td>
      <td>{`${stDate}`}</td>
      <td>{`${enDate}`}</td>
      <td>
        <button onClick={() => handleDelete(listItem._id)}>X</button>
      </td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
};
export default ListItem;
