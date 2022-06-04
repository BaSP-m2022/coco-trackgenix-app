import React, { useState } from 'react';
import EditTaskItem from '../Modal/Modal';

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

    return (
      <tr key={task.id}>
        <td>{task.description}</td>
        <td>{task.workedHours.toString()}</td>
        <td>{task.date}</td>
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
      {openModal && (
        <EditTaskItem updItem={updItem} openModal={openModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default ContentList;
