import React from 'react';
import ListItem from './ListItem';
import styles from './admins.module.css';

const List = ({ list, deleteItem }) => {
  return (
    <div className={styles.listContainer}>
      <table>
        <thead className={styles.tableHead}>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Active</th>
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
