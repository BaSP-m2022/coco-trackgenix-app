import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };

  const test = listItem.map((item) => {
    // console.log('item', item);

    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{JSON.stringify(item.active)}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button onClick={() => handleDelete(item._id)}> X </button>
        </td>
      </tr>
    );
  });

  return <>{test}</>;
};

export default ListItem;
