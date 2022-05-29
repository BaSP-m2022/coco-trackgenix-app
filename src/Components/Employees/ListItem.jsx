import React from 'react';

const ListItem = ({ listItem }) => {
  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.active}</td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
