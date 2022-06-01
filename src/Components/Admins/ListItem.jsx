import React, { useState } from 'react';
import EditAdmin from './AddItem/Edit';

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
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{JSON.stringify(item.active)}</td>
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
      {openModal && <EditAdmin item={selectedItem} />}
    </>
  );
};
export default ListItem;
