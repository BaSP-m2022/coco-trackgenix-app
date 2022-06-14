import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({ data, name, labelText, path, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{labelText}</label>
      <select onChange={onChange} className={styles.select} name={name}>
        {data.map((item) => (
          <option key={item.id} value={item._id}>
            {`${item[path]} ID: ${item._id}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
