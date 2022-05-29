import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './list.module.css';

const List = ({ list, deleteItem }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Worked Hours</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <ListItem listItem={list} deleteItem={deleteItem} />
        </tbody>
      </table>
    </div>
  );
};

export default List;
