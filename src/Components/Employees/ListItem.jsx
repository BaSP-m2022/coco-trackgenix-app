import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  const employeeRows = listItem.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.active.toString()}</td>
        <td>
          <button>Edit</button>
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
  return <>{employeeRows}</>;
};

export default ListItem;
