import React from 'react';
import './list.module.css';
import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <div>
      <table>
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
        <ListItem listItem={list} />
      </table>
    </div>
  );
};

export default List;
