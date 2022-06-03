import React from 'react';
//* import FormEmployeeEdit from './FormEmployee/FormEmployeeEdit';

const ListItem = ({ listItem, deleteItem }) => {
  const handleEdit = (_id) => {
    window.location = `/employees/form?=${_id}`;
  };

  const test = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button onClick={() => handleEdit(item._id)}>Edit</button>
        </td>
        <td>
          <button
            onClick={() => {
              const result = confirm('are you sure you want to delete?');
              if (result) {
                deleteItem(item._id);
              }
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};
export default ListItem;
