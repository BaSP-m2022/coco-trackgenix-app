import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({ data, children, path, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Select a {children}</label>
      <select onChange={onChange} name={children} className={styles.select}>
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
