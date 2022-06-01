import styles from './time-sheets.module.css';
import TableList from './TableList';
import React, { useState, useEffect } from 'react';
import Form from './Form';

function TimeSheets() {
  let [change, setSwitch] = useState(false);
  let [edit, setEdit] = useState(false);
  const [list, setList] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState();
  const [editDate, setEditDate] = useState(true);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/timesheets`)
      .then((res) => res.json())
      .then((json) => {
        console.log('data', json.data);
        setList(json.data);
      });
  }, []);

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
    console.log('list', list);
    console.log('id', id);
    setItemToUpdate(list.filter((timeSheet) => timeSheet._id === id));
  };

  const switcher = () => {
    setSwitch(change ? (change = false) : (change = true));
    if (edit) {
      setEdit(edit ? (edit = false) : (edit = true));
      handleEditDate;
    }
  };

  const handleEditDate = (state) => {
    setEditDate(state);
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
          editDate={editDate}
          handleEditDate={handleEditDate}
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
