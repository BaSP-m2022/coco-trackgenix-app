import React, { useState } from 'react';
// import styles from './formList.module.css';

const NewItem = () => {
  const [newItem, setNewItem] = useState({
    description: '',
    workedHours: ''
  });

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
  };

  const createItem = (event) => {
    event.preventDefault();
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
  };

  // const endPoint = () => {
  //   if (props.metodo === 'POST') {
  //     return fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
  //       method: props.metodo,
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(newItem)
  //     });
  //   } else {
  //     (_id = props._id), (description = props.description), (workedHours = props.workedHours);
  //   }
  // };

  return (
    <div>
      <h2>New Task</h2>
      <form onSubmit={createItem}>
        <div>
          <label htmlFor="">Task description</label>
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="">Worked Hours</label>
          <input
            type="number"
            name="workedHours"
            value={newItem.workedHours}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
