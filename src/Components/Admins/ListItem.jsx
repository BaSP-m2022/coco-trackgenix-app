import React, { useState } from 'react';
import EditAdmin from './AdminForm/AdminFormEdit';
import styles from './admins.module.css';

const ListItem = ({ listItem, deleteItem }) => {
  const [openModal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModal(true);
  };

  const items = listItem.map((item) => {
    return (
      <tbody key={item._id}>
        <tr key={item._id} className={styles.tableRow}>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{JSON.stringify(item.active)}</td>
          <td>
            <button onClick={() => handleEdit(item)} className={styles.editBtn}>
              Edit
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                const result = confirm('Are you sure you want to delete?');
                if (result) {
                  deleteItem(item._id);
                }
              }}
              className={styles.deleteBtn}
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      {items}
      {openModal && <EditAdmin item={selectedItem} />}
    </>
  );
};
export default ListItem;
