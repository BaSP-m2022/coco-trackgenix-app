import React from 'react';
import styles from './admins.module.css';

const ListItem = ({ listItem, deleteItem }) => {
  const adminListRows = listItem.map((item) => {
    return (
      <tr key={item._id} className={styles.tableRow}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{JSON.stringify(item.active)}</td>
        <td>
          <button className={styles.editBtn}>Edit</button>
        </td>
        <td>
          <button onClick={() => deleteItem(item._id)} className={styles.deleteBtn}>
            X
          </button>
        </td>
      </tr>
    );
  });

  return <>{adminListRows}</>;
};

export default ListItem;