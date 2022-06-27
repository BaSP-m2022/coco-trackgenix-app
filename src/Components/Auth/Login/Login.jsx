import { useForm } from 'react-hook-form';
import Input from 'Components/SharedComponents/Input/Input';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Button from 'Components/SharedComponents/Button/Button';
import { login } from 'Components/redux/modules/auth/thunks';
import { cleanError } from 'Components/redux/modules/auth/actions';
import { useDispatch } from 'react-redux';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';
import styles from 'Components/Auth/Login/login.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';

const schema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Must contain an email format valid',
      'string.empty': 'Email is not allowed to be empty',
      'string.required': 'Email is required!'
    }),
  password: joi
    .string()
    .min(8)
    .required()
    .regex(/^(?=.*?[a-zA-Z])(?=.*?[0-9])/)
    .message('Invalid password, it must contain letters and numbers')
});

const Login = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(false);
  const [resStatus, setResStatus] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    setIsOpen(true);
    return dispatch(login(formValues, setResStatus)).then((response) => {
      if (response) {
        setRole(response.payload?.role);
      }
    });
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(schema) });

  const handleOkBtn = () => {
    setIsOpen(false);
    dispatch(cleanError());
    switch (role) {
      case 'EMPLOYEE':
        return props.history.push('/employee/projects');
      case 'ADMIN':
        return props.history.push('/admins');
      case 'SUPERADMIN':
        return props.history.push('/super-admins');
      case 'PM':
        return props.history.push('/employee');
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.formContainer}>
        <div className={styles.title}>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputColumns}>
            <Input
              name="email"
              labelText="Email"
              placeholder="Insert Email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              name="password"
              labelText="Password"
              placeholder="Insert Password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
          </div>
          <div className={styles.loginBtn}>
            <Button label="Login" type={('submit', styles.loginButton)}>
              Login
            </Button>
          </div>
        </form>
        <Modal showModal={isOpen} closeModal={handleOkBtn}>
          <h2>{resStatus ? 'Success!' : 'Warning!'}</h2>
          <h3 className={styles.modalMsg}>
            {resStatus ? 'Login successfully' : 'Wrong credentials, check the fields'}
          </h3>
          <Button type={styles.loginButton} handleClick={handleOkBtn}>
            Ok
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
