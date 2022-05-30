import React from 'react';

const ListItem = ({ listItem }) => {
  const test = listItem.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.clientName}</td>
        <td>{item.admins}</td>
        <td>{item.createdAt}</td>
        <td>{item.description}</td>
        <td>{item.starDate}</td>
        <td>{item.updatedAt}</td>
        <td>{item.employees.length}</td>
        <td>{item.active.toString()}</td>
      </tr>
    );
  });
  return <>{test}</>;
};
export default ListItem;
