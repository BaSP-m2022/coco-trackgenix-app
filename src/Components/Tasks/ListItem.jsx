import React from 'react';
import styles from './tasks.module.css';

const ListItem = ({ listItem }) => {
  const test = listItem.map((item) => {
    console.log('item', item);
    return (
      <tr key={item.id}>
        <td className={styles.description}>{item.description}</td>
        <td>{item.workedHours.toString()}</td>
        <td>{item.date.split('T')[0]}</td>
        <td className={styles.buttonBox}>
          <button>Edit</button>
        </td>
        <td className={styles.buttonBox}>
          <button className={styles.delete}>Delete</button>
        </td>
      </tr>
    );
  });
  return <>{test}</>;
};

export default ListItem;
