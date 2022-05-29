import React from 'react';
// import ListItem from './ListItem.jsx';
import './list.module.css';

const List = ({ list }) => {
  console.log('Probando 2', list);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Client</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Members</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <div>
          {list.map((listItem) => {
            <ListItem key={listItem.name} listItem={item} />
          })}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default List;
