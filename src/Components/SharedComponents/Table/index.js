import React, { useState } from 'react';
import styles from './table.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Table = ({ data, headers, children, handleEdit, deleteItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowMember, setRow] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.buttonAdd}>{children}</div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index} className={styles.tableCell}>
                  {header}
                </th>
              );
            })}
            <th className={styles.tableCell}>Edit</th>
            <th className={styles.tableCell}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row._id} className={styles.tableNames}>
                {headers.map((header, index) => {
                  return <td key={index}>{row[header]}</td>;
                })}
                <td>
                  <Button class={styles.stylesBtn} handleClick={() => handleEdit(row._id)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    class={styles.stylesBtn}
                    handleClick={() => {
                      setIsOpen(true);
                      setRow(row._id);
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>Warning</h2>
        <div>
          <p>Are you sure you want to delete this item?</p>
          <p>You will not be able to recover it</p>
        </div>
        <div>
          <Button class={styles.stylesModalBtn} handleClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            class={styles.stylesModalBtn}
            handleClick={() => {
              deleteItem(rowMember);
              setIsOpen(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
