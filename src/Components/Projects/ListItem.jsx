import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };

  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.clientName}</td>
        <td>{item.admins}</td>
        <td>{item.createdAt}</td>
        <td>{item.description}</td>
        <td>{item.startDate}</td>
        <td>{item.updatedAt}</td>
        <td>{item.employees.length}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button onClick={() => handleDelete(item._id)}>X</button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
