import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const handleEdit = (item) => {
    window.location = `/employees/formEdit?=${item._id}`;
  };

  const employeeRows = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button onClick={() => handleEdit(item)}>Edit</button>
        </td>
        <td>
          <button
            onClick={() => {
              const result = confirm('Are you sure you want to delete?');
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
  return <>{employeeRows}</>;
};
export default ListItem;
