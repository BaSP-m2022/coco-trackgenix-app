import React, { useState } from 'react';
import styles from './table.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Table = ({ data, headers, children, handleEdit, deleteItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMembers, setIsOpenMembers] = useState(false);
  const [rowMember, setRow] = useState();

  const membersBtn = (row, header) => {
    // row[header].length;
    // console.log(row.members);
    const member1 = row.members[0].employee.firstName;
    const member2 = row.members[1].employee.firstName;
    const member3 = row.members[2].employee.firstName;
    console.log(member1 + member2 + member3);
    return (
      <Button
        type={styles.stylesBtn}
        handleClick={() => {
          setIsOpenMembers(true);
          setRow(row._id);
        }}
      >
        {row[header].length} Members
      </Button>
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
        <Modal showModal={isOpenMembers} closeModal={() => setIsOpenMembers(false)}>
          <h2>Members</h2>
          <div>
            {/* <p>Are you sure you want to delete this item?</p>
            <p>You will not be able to recover it</p> */}
          </div>
          <div>
            <Button type={styles.deleteModalBtn} handleClick={() => setIsOpenMembers(false)}>
              Cancel
            </Button>
            <Button
              type={styles.stylesModalBtn}
              handleClick={() => {
                // deleteItem(rowMember);
                setIsOpenMembers(false);
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
                        {header === 'members' ? row[header].length : row[header]}
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
