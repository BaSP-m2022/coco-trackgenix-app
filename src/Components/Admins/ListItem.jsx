import React from 'react';
import styles from './listItem.module.css';

const ListItem = ({ listItem, deleteItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };

  const test = listItem.map((item) => {
    return (
      <tr key={item._id} className={styles.tableRow}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{JSON.stringify(item.active)}</td>
        <td>
          <button className={styles.editButton}>Edit</button>
        </td>
        <td>
          <button onClick={() => handleDelete(item._id)} className={styles.deleteButton}>
            X
          </button>
        </td>
      </tr>
    );
  });

  return <>{test}</>;
};

export default ListItem;
