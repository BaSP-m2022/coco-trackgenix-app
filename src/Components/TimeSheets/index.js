import styles from './time-sheets.module.css';
import List from './TableList';
import React, { useState, useEffect } from 'react';
import Form from './Form';

function TimeSheets() {
  let [change, setSwitch] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/timesheets`)
      .then((res) => res.json())
      .then((json) => {
        console.log('data', json.data);
        setList(json.data);
      });
  }, []);

  const deleteItem = (id) => {
    console.log(id);
    setList([...list.filter((listItem) => listItem._id !== id)]);
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

  const switcher = () => {
    setSwitch(change ? (change = false) : (change = true));
  };

  // const addItem = ({ tasks, employeeId, projectId, startDate, endDate }) => {
  //   const newItem = {
  //     id: Math.floor(Math.random() * 1000),
  //     tasks,
  //     employeeId,
  //     projectId,
  //     startDate,
  //     endDate
  //   };
  //   setList([...list, newItem]);
  // };
  if (change) {
    return (
      <section className={styles.container}>
        <h2>TimeSheets</h2>
        <button onClick={switcher}>back</button>
        <Form switcher={switcher} />
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        <h2>TimeSheets</h2>
        <button onClick={switcher}>Add new</button>
        <List list={list} setList={setList} deleteItem={deleteItem} />
      </section>
    );
  }
}

export default TimeSheets;
