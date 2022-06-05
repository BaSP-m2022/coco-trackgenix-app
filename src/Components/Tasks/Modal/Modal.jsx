import React, { useState } from 'react';
import styles from './modal.module.css';

const Modal = ({ updItem, openModal, closeModal }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://coco-trackgenix-server.vercel.app/tasks/${updItem[0]._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        workedHours: workedHours
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          alert(`${data.msg}`);
          window.location = '/tasks';
        } else {
          alert(`${data.msg}`);
        }
      })
      .catch((error) => console.error(error));
  };

  const [description, setDescription] = useState(updItem[0].description);
  const [workedHours, setWorkedHours] = useState(updItem[0].workedHours);

  return (
    <div>
      {openModal === false ? (
        ''
      ) : (
        <div className={styles.flexConteiner}>
          <div className={styles.myModal}>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Task description</label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <label>Worked Hours</label>
                <input
                  type="number"
                  name="workedHours"
                  value={workedHours}
                  onChange={(e) => {
                    setWorkedHours(e.target.value);
                  }}
                />
              </div>
              <div>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">Edit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;