import React from 'react';
import Button from '../Shared/Modal/Button';

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
          <Button buttonFunction={() => handleEdit(item)}></Button>
        </td>
        <td>
          <Button
            buttonFunction={() => {
              const result = confirm('are you sure you want to delete?');
              if (result) {
                deleteItem(item._id);
              }
            }}
          ></Button>
        </td>
      </tr>
    );
  });
  return <>{employeeRows}</>;
};
export default ListItem;
