import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ContentList = ({ listItem, deleteItem }) => {
  if (listItem.length === 0 || listItem === 'undefined') {
    return 'There are not tasks';
  }

  const [updItem, setUpdItem] = useState([]);

  const [openModal, setModal] = useState(false);

  const updateItem = (id) => {
    setUpdItem([...listItem.filter((item) => item._id === id)]);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const taskBody = listItem.map((task) => {
    const handleDelete = () => {
      deleteItem(task._id);
    };

    const handleUpdate = (task) => {
      updateItem(task._id);
    };

    const dateFormatter = (inputDate) => {
      const date = new Date(inputDate);
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      return `${month}/${day}/${year} - ${hour}:${minute} hrs`;
    };
    console.log(task.date);

    return (
      <tr key={task.id}>
        <td>{task.description}</td>
        <td>{task.workedHours.toString()}</td>
        <td>{dateFormatter(task.date)}</td>
        <td>
          <button onClick={() => handleUpdate(task)}>Edit</button>
        </td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {taskBody}
      {openModal && <Modal updItem={updItem} openModal={openModal} closeModal={closeModal} />}
    </>
  );
};

export default ContentList;
