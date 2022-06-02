import React from 'react';
import ListItem from './ListItem';

const TableList = ({ list, deleteItem }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          <ListItem listItem={list} deleteItem={deleteItem} />
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
