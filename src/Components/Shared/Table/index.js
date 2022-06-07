import React from 'react';
import styles from './table.module.css';

const Table = ({ data, headers, deleteItem }) => {
  const editSuperAdmin = (_id) => {
    window.location = `/super-admins/Form?=${_id}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonAdd}>
        <button>Add new Super Admin</button>
      </div>
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
                  <button onClick={() => editSuperAdmin(row._id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteItem(row._id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
