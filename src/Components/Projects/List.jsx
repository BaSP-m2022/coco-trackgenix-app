import React from 'react';
import styles from './list.module.css';
import ListItem from './ListItem';

const List = ({ list, deleteItem }) => {
  return (
    <div>
      <table className={styles.list}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Client</th>
            <th>Admin</th>
            <th>Created At</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Updated At</th>
            <th>Employees</th>
            <th>Active</th>
          </tr>
        </thead>
        <ListItem listItem={list} deleteItem={deleteItem} />
      </table>
    </div>
  );
};

export default List;
