import React from 'react';
import styles from './table.module.css';
import Button from '../Modal/Button';

const Table = ({ data, headers, children, handleEdit }) => {
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
                  <Button handleClick={handleEdit}>Edit</Button>
                </td>
                <td>
                  <Button>X</Button>
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
