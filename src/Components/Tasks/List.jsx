import React from 'react';
import ListItem from './ListItem';
import './list.css';

const List = ({ list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Worked Hours</th>
            <th>Date</th>
          </tr>
        </thead>
        <ListItem listItem={list} />
      </table>
    </div>
  );
};

export default List;
