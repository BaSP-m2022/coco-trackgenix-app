import styles from './input.module.css';

const Input = ({
  labelText,
  name,
  type,
  inputValue,
  placeholder,
  warningMsg,
  handleInput,
  handleClick,
  handleBlur,
  showWarning
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <input
        className={showWarning ? styles.emptyInput : styles.input}
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onInput={handleInput}
        onClick={handleClick}
        onBlur={handleBlur}
      ></input>
      <p className={showWarning ? styles.showWarningMsg : styles.hideWarningMsg}>{warningMsg}</p>
    </div>
  );
};
export default Input;
