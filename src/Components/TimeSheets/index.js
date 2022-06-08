import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import Button from '../SharedComponents/Button/Button';
import TableList from './TableList';

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
      <h2 className={styles.title}>TimeSheets</h2>
      <Button type={styles.addBtn} handleClick={() => props.history.push('/time-sheets/add')}>
        Add Time Sheet
      </Button>
      <TableList list={list} setList={setList} deleteItem={deleteItem} />
    </section>
  );
}
export default TimeSheets;
