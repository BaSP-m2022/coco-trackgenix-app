import React, { useState } from 'react';
import EditProject from './EditProject';

const ListItem = ({ listItem, deleteItem }) => {
  const [openModal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleDelete = (_id) => {
    deleteItem(_id);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModal(true);
  };

  const items = listItem.map((item) => {
    return (
      <tbody key={item.id}>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.clientName}</td>
          <td>{item.admins}</td>
          <td>{item.createdAt}</td>
          <td>{item.description}</td>
          <td>{item.startDate}</td>
          <td>{item.updatedAt}</td>
          <td>{item.employees.length}</td>
          <td>{item.active.toString()}</td>
          <td>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </td>
          <td>
            <button onClick={() => handleDelete(item._id)}>X</button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      {items}
      {openModal && <EditProject item={selectedItem} />}
    </>
  );
};
export default ListItem;
