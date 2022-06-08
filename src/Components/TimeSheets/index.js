import styles from './time-sheets.module.css';
import TableList from './TableList';
import React, { useState, useEffect } from 'react';

function TimeSheets(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/timesheets`)
      .then((res) => res.json())
      .then((json) => {
        setList(json.data);
      });
  }, []);

  const deleteItem = (id) => {
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

  return (
    <section className={styles.container}>
      <h2>TimeSheets</h2>
      <button className={styles.addButton} onClick={() => props.history.push('/time-sheets/add')}>
        Add new
      </button>
      <TableList list={list} setList={setList} deleteItem={deleteItem} />
    </section>
  );
}
export default TimeSheets;
