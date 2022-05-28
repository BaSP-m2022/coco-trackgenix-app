import React from 'react';
import ListItem from './ListItem';
import styles from './tasks.module.css';

const List = ({ list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className={styles.descriptions}>Task Description</th>
            <th>Worked Hours</th>
            <th>Date</th>
            <th className={styles.buttonBox}></th>
            <th className={styles.buttonBox}></th>
          </tr>
        </thead>
        <ListItem listItem={list} />
      </table>
    </div>
  );
};

export default List;
