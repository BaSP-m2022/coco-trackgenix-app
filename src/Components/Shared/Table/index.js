import React from 'react';
import styles from './table.styles.css';

const Table = ({ data, headers, deleteItem }) => {
  const editSuperAdmin = (_id) => {
    window.location = `/super-admins/Form?=${_id}`;
  };
  return (
    <div className={styles.container}>
      <button>Add new Super Admin</button>
      <table className={styles.container}>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index} className={styles.tableCell}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row._id} className={styles.tableCell}>
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
