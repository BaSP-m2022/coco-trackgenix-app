import React, { useState } from 'react';
import styles from './dropdown.module.css';
// import Button from '../Button/Button';

const Dropdown = ({ data, children, path }) => {
  const [dropdownItem, setDropdownItem] = useState([]);
  const emptyArray = [];
  const [itemsArray, setItemsArray] = useState([emptyArray]);

  // const handleDelete = (id) => {
  //   setItemsArray([...itemsArray.filter((item) => item._id !== id)]);
  // };

  const handleChange = (e) => {
    if (itemsArray.find((item) => item._id === e.target.value) === undefined) {
      setItemsArray([...itemsArray, dropdownItem.find((item) => item._id === e.target.value)]);
    } else {
      alert('This task has already been selected');
    }
  };

  setDropdownItem(data);

  return (
    <div className={styles.container}>
      <label>{children}</label>
      <select onChange={handleChange} name={children}>
        {data.map((item) => (
          <option key={item.id} value={item._id}>
            {item[path]}
          </option>
        ))}
      </select>
      {/* <div>
        <table>
          <tbody>
            {itemsArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[path]}</td>
                  <td>
                    <Button type={styles.deleteBtn} handleClick={() => handleDelete(item._id)}>
                      X
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dropdown;
