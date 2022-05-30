import React from 'react';
import './super-admins.module.css';
import ListItem from './ListItem';
// import Modal from './Modal/Modal';

const List = ({ list, deleteItem }) => {
  // const closeModal = () => {
  //     setShowModal(false);
  // }
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
        <ListItem listItem={list} deleteItem={deleteItem} />
      </table>
    </div>
  );
};

export default List;
