import React from 'react';

const ListItem = ({ listItem, deleteItem, editItem }) => {
  const handleDelete = () => {
    deleteItem(listItem.id);
  };

  const handleEdit = () => {
    editItem(listItem.id);
  };

  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => handleDelete(item.id)}>X</button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
