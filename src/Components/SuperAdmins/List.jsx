import React from 'react';
import './super-admins.module.css';
import ListItem from './ListItem';

const List = ({ list, deleteItem, setId }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <ListItem listItem={list} deleteItem={deleteItem} setId={setId} />
      </table>
    </div>
  );
};

export default List;
