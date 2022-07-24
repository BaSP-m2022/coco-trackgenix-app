import React, { useState } from 'react';
import styles from './table.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Table = ({ data, headers, children, handleEdit, deleteItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowMember, setRow] = useState();

  const role = sessionStorage.getItem('role');

  let history = useHistory();

  const membersBtn = (row, header) => {
    return (
      <>
        <span>{row[header].length}</span>
        <Button
          type={styles.stylesBtn}
          handleClick={() => {
            role == 'ADMIN' && history.push(`/admin/projects/members?=${row._id}`);
            role == 'PM' && history.push(`/employee/PM/projects/members?=${row._id}`);
          }}
        >
          View
        </Button>
      </>
    );
  };

  if (window.location.pathname === '/employee/projects') {
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
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row._id} className={styles.tableNames}>
                  {headers.map((header, index) => {
                    return (
                      <td className={styles.data} key={index}>
                        {header === 'members' ? membersBtn(row, header) : row[header]}
                      </td>
                    );
                  })}
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
            <Button type={styles.deleteModalBtn} handleClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              type={styles.stylesModalBtn}
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
  } else if (window.location.pathname === '/employee/profile') {
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
              <th className={styles.tableCellButtons}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row._id} className={styles.tableNames}>
                  {headers.map((header, index) => {
                    return (
                      <td className={styles.data} key={index}>
                        {row[header]}
                      </td>
                    );
                  })}
                  <td className={styles.buttonTd}>
                    <Button type={styles.stylesBtn} handleClick={() => handleEdit(row._id)}>
                      Edit
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
            <Button type={styles.deleteModalBtn} handleClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              type={styles.stylesModalBtn}
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
  } else if (window.location.pathname === '/employee/timesheet') {
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
              <th className={styles.tableCellButtons}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row._id} className={styles.tableNames}>
                  {headers.map((header, index) => {
                    return (
                      <td className={styles.data} key={index}>
                        {row[header]}
                      </td>
                    );
                  })}
                  <td className={styles.buttonTd}>
                    <Button type={styles.stylesBtn} handleClick={() => handleEdit(row._id)}>
                      Edit
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
            <Button type={styles.deleteModalBtn} handleClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              type={styles.stylesModalBtn}
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
  } else {
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
              <th className={styles.tableCellButtons}>...</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row._id} className={styles.tableNames}>
                  {headers.map((header, index) => {
                    return (
                      <td className={styles.data} key={index}>
                        {header === 'members' ? membersBtn(row, header) : row[header]}
                      </td>
                    );
                  })}
                  <td className={styles.buttonTd}>
                    <Button type={styles.stylesBtn} handleClick={() => handleEdit(row._id)}>
                      Edit
                    </Button>
                    <Button
                      type={styles.stylesBtn}
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
            <Button type={styles.deleteModalBtn} handleClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              type={styles.stylesModalBtn}
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
  }
};

export default Table;
