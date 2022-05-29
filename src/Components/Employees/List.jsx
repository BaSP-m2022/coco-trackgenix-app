import React from 'react';
import './employees.module.css';
import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Active</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <ListItem listItem={list} />
      </table>
    </div>
  );
};

export default List;
