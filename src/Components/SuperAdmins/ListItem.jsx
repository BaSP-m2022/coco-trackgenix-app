import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };
  const test = listItem.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
        <td>
          <a href="http://localhost:4000/super-admins/Form">
            <button>Edit</button>
          </a>
        </td>
        <td>
          <button onClick={() => handleDelete(item._id)}>X</button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
