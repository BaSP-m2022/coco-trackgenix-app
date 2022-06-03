import React from 'react';
import styles from '../tasks.module.css';
import EditTask from '../EditTask/EditTask';

const ListItem = ({ listItem, deleteItem, showEdit }) => {
  if (listItem.length === 0 || listItem === 'undefined') {
    return 'There are not tasks';
  }
  const currentBody = listItem.map((props) => {
    const handleDelete = () => {
      deleteItem(props._id);
    };
    return (
      <>
        <tr key={props.id}>
          <td className={styles.description}>{props.description}</td>
          <td>{props.workedHours.toString()}</td>
          <td>{props.date.split('T')[0]}</td>
          <td className={styles.buttonBox}>
            <button onClick={showEdit}>Edit</button>
          </td>
          <td className={styles.buttonBox}>
            <button className={styles.delete} onClick={handleDelete}>
              Delete
            </button>
          </td>
        </tr>
        <EditTask id={props._id} workedHours={props.workedHours} description={props.description} />
      </>
    );
  });
  return <>{currentBody}</>;
};

export default ListItem;
