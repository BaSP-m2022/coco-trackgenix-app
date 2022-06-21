import styles from './input.module.css';

const Input = ({ labelText, name, type, placeholder, register, error }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <input
        className={error ? styles.emptyInput : styles.input}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      ></input>
      {error && <p className={styles.showWarningMsg}>{error}</p>}
    </div>
  );
};
export default Input;
