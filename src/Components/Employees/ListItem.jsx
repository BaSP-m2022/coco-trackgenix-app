import React from 'react';
import EspButton from '../Shared/Modal/GenBtn';

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
          <EspButton
            buttonName="Edit"
            buttonBorderColor="rgb(80, 81, 104)"
            buttonTextColor="rgb(80, 81, 104)"
            buttonColor="rgb(255, 255, 255)"
            buttonFunction={() => handleEdit(item)}
          ></EspButton>
        </td>
        <td>
          <EspButton
            buttonName="Delete"
            buttonBorderColor="rgb(80, 81, 104)"
            buttonTextColor="rgb(80, 81, 104)"
            buttonColor="rgb(255, 255, 255)"
            buttonFunction={() => {
              const result = confirm('are you sure you want to delete?');
              if (result) {
                deleteItem(item._id);
              }
            }}
          ></EspButton>
        </td>
      </tr>
    );
  });
  return <>{employeeRows}</>;
};
export default ListItem;
