import styles from './input.module.css';

const Input = ({ name, labelText, type, placeholder, register, error, disabled }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <input
        className={error ? styles.emptyInput : styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      ></input>
      {error && <p className={styles.showWarningMsg}>{error}</p>}
    </div>
  );
};

export default Input;
