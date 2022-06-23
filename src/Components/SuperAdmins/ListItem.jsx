import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const editSuperAdmin = (_id) => {
    window.location = `/super-admins/Form?=${_id}`;
  };
  const SuperAdminTable = listItem.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button onClick={() => editSuperAdmin(item._id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => deleteItem(item._id)}>X</button>
        </td>
      </tr>
    );
  });
  return <>{SuperAdminTable}</>;
};

export default ListItem;
