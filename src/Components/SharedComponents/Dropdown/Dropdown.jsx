import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({ data, name, labelText, path, onChange, value }) => {
  if (name === 'active') {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{labelText}</label>
        <select onChange={onChange} className={styles.select} name={name}>
          <option disabled selected className={styles.options}>
            {labelText}
          </option>
          <option className={styles.options} value={true}>
            true
          </option>
          <option className={styles.options} value={false}>
            false
          </option>
        </select>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{labelText}</label>
        <select onChange={onChange} className={styles.select} name={name}>
          <option selected className={styles.options}>
            {!value ? labelText : data.find((element) => element._id === value.path)}
          </option>
          {data.map((item) => (
            <option className={styles.options} key={item.id} value={item._id}>
              {item[path]}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default Dropdown;
