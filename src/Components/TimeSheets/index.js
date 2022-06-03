import styles from './time-sheets.module.css';
import TableList from './TableList';
import React, { useState, useEffect } from 'react';
import Form from './Form';

function TimeSheets() {
  let [change, setSwitch] = useState(false);
  let [edit, setEdit] = useState(false);
  const [list, setList] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState();
  const [editStartDate, setEditStartDate] = useState(true);
  const [editEndDate, setEditEndDate] = useState(true);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/timesheets`)
      .then((res) => res.json())
      .then((json) => {
        console.log('data', json.data);
        setList(json.data);
      });
  }, [change]);

  useEffect(() => {
    setEditStartDate(true);
    setEditEndDate(true);
  }, [change]);

  const deleteItem = (id) => {
    setList([...list.filter((listItem) => listItem._id !== id)]);
    console.log(id);
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
        method: 'DELETE'
      });
      console.log(response);
      alert('The time-sheet has been deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = (id) => {
    setItemToUpdate(list.filter((timeSheet) => timeSheet._id === id));
  };

  const switcher = () => {
    setSwitch(change ? (change = false) : (change = true));
    if (edit) {
      setEdit(edit ? (edit = false) : (edit = true));
      handleEditStartDate;
    }
  };

  const handleEditStartDate = (state) => {
    setEditStartDate(state);
  };

  const handleEditEndDate = (state) => {
    setEditEndDate(state);
  };

  const editMode = () => {
    setEdit(edit ? (edit = false) : (edit = true));
    setSwitch(change ? (change = false) : (change = true));
  };

  if (change) {
    return (
      <section className={styles.container}>
        <h2>TimeSheets</h2>
        <button onClick={switcher}>back</button>
        <Form
          edit={edit}
          itemToUpdate={itemToUpdate}
          editStartDate={editStartDate}
          editEndDate={editEndDate}
          handleEditStartDate={handleEditStartDate}
          handleEditEndDate={handleEditEndDate}
          switcher={switcher}
        />
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        <h2>TimeSheets</h2>
        <button className={styles.addButton} onClick={switcher}>
          Add new
        </button>
        <TableList
          list={list}
          setList={setList}
          deleteItem={deleteItem}
          editMode={editMode}
          updateItem={updateItem}
        />
      </section>
    );
  }
}

export default TimeSheets;
