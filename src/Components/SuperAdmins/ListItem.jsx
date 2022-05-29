import React from 'react';

const ListItem = ({ listItem }) => {
  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
