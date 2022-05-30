import React from 'react';
import ListItem from './ListItem';

const List = ({ list, deleteItem }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Employee</th>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <ListItem key={item.id} listItem={item} deleteItem={deleteItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
