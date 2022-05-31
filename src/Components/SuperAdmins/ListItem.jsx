import React from 'react';

const ListItem = ({ listItem, deleteItem, setId }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };
  //   let url = 'http://localhost:4000/super-admins/Form/';
  const test = listItem.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
        <td>
          {/* <a href={url + item._id}> */}
          <button onClick={() => setId(item._id)}>Edit</button>
          {/* </a> */}
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
