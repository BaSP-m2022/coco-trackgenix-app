import React from 'react';

const ListItem = ({ listItem }) => {
  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td>{item.description}</td>
        <td>{item.workedHours.toString()}</td>
        <td>{item.date}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
