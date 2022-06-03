import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from '../tasks.module.css';

const List = ({ list, deleteItem, showEdit, createItem, showList }) => {
  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.descriptions}>Task Description</th>
            <th>Worked Hours</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <ListItem
            listItem={list}
            deleteItem={deleteItem}
            showEdit={showEdit}
            createItem={createItem}
            showList={showList}
          />
        </tbody>
      </table>
    </div>
  );
};

export default List;
