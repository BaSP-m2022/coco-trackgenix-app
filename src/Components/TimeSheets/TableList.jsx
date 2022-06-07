import React from 'react';
import ListItem from './ListItem';

const TableList = ({ list, deleteItem, editMode, updateItem }) => {
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
          <ListItem
            listItem={list}
            deleteItem={deleteItem}
            editMode={editMode}
            updateItem={updateItem}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
