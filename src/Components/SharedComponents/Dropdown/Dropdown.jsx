import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({ data, name, labelText, path, onChange }) => {
  return (
    <div className={styles.container}>
      <label>{labelText}</label>
      <select onChange={onChange} name={name}>
        {data.map((item) => (
          <option key={item.id} value={item._id}>
            {item[path]} ID: {item._id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
