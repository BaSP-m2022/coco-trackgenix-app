import React, { useState } from 'react';
import FormEmployeeEdit from './FormEmployee/FormEmployeeEdit';

const ListItem = ({ listItem, deleteItem }) => {
  const [openModal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const handleEdit = (item) => {
    setSelectedItem(item);
    setModal(true);
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
          <button onClick={() => handleEdit(item)}>Edit</button>
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
  return (
    <>
      {test}
      {openModal && <FormEmployeeEdit item={selectedItem} />}
    </>
  );
};
export default ListItem;
