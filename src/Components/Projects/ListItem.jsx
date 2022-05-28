import React from 'react';

const ListItem = ({ listItem }) => {
  return (
    <tr>
      <td>{listItem.name}</td>
      <td>{listItem.clientName}</td>
      <td>{listItem.startDate}</td>
      <td>{listItem.endDate}</td>
      <td>{listItem.employees.length}</td>
      <td>{listItem.active}</td>
    </tr>
  );
};

export default ListItem;
