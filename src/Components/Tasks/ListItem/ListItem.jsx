import React from 'react';
import styles from '../tasks.module.css';

const ListItem = ({ listItem, deleteItem, /*updateItem*/ showList }) => {
  if (listItem.length === 0 || listItem === 'undefined') {
    return 'There are not tasks';
  }
  const currentBody = listItem.map((props) => {
    const handleDelete = () => {
      deleteItem(props._id);
    };

    // const handleUpdate = () => {
    //   updateItem(props._id);
    //   return (props.description = 'Juanito');
    // };

    return (
      <tr key={props.id}>
        <td className={styles.description}>{props.description}</td>
        <td>{props.workedHours.toString()}</td>
        <td>{props.date.split('T')[0]}</td>
        <td className={styles.buttonBox}>
          <button onClick={/*handleUpdate, */ showList}>Edit</button>
        </td>
        <td className={styles.buttonBox}>
          <button className={styles.delete} onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <>{currentBody}</>;
};

export default ListItem;
