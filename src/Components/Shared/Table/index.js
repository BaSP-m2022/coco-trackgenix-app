import React from 'react';
import styles from './table.module.css';
import Button from '../Modal/Button';

const Table = ({ data, headers, deleteItem }) => {
  const editSuperAdmin = (_id) => {
    window.location = `/super-admins/Form?=${_id}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonAdd}>
        <Button handleClick={() => (window.location = '/super-admins/formAdd')}>
          Add Super Admin
        </Button>
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
                  <Button handleClick={() => editSuperAdmin(row._id)}>Edit</Button>
                </td>
                <td>
                  <Button handleClick={() => deleteItem(row._id)}>X</Button>
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
