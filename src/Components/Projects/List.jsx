import React from 'react';
import './list.module.css';
import ListItem from './ListItem';

const List = ({ list, deleteItem }) => {
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
            <th>End Date</th>
            <th>Updated At</th>
            <th>Employees</th>
            <th>Active</th>
            <th>Edit</th>
            <th>X</th>
          </tr>
        </thead>
        <ListItem listItem={list} deleteItem={deleteItem} />
      </table>
    </div>
  );
};

export default List;
