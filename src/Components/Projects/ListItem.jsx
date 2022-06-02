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

  const changeDate = (date) => {
    let changedDate;
    if (!date) {
      changedDate = null;
    } else {
      let substrained = date.substring(0, 10);
      let year = Number(substrained.split('-')[0]);
      let month = Number(substrained.split('-')[1]);
      let day = Number(substrained.split('-')[2]);

      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }

      changedDate = `${month}-${day}-${year}`;
    }

    return changedDate;
  };

  const items = listItem.map((item) => {
    return (
      <tbody key={item.id}>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.clientName}</td>
          <td>{item.admins}</td>
          <td>{changeDate(item.createdAt)}</td>
          <td>{item.description}</td>
          <td>{changeDate(item.startDate)}</td>
          <td>{changeDate(item.endDate)}</td>
          <td>{changeDate(item.updatedAt)}</td>
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
