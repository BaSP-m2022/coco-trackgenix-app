import React from 'react';
import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <ListItem listItem={list} />
        </tbody>
      </table>
    </div>
  );
};

export default List;
