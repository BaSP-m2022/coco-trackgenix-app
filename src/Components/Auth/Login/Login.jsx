import { useForm } from 'react-hook-form';
import Input from 'Components/SharedComponents/Input/Input';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Button from 'Components/SharedComponents/Button/Button';
import { login } from 'Components/redux/modules/auth/thunks';
// import { cleanError } from 'redux//modules/auth/actions';
import { useDispatch } from 'react-redux';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';

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

  // const error = useSelector((store) => store.auth.error);

  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    setIsOpen(true);
    return dispatch(login(formValues)).then((response) => {
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

  // const required = (value) => (value ? undefined : 'Required');

  const handleOkBtn = () => {
    switch (role) {
      case 'EMPLOYEE':
        return props.history.push('/employee/projects');
      case 'ADMIN':
        return props.history.push('/admins');
      case 'SUPERADMIN':
        return props.history.push('/super-admins');
      default:
        break;
    }
    // callback: () => dispatch(cleanError());
  };

  return (
    <div>
      <Modal showModal={isOpen} closeModal={handleOkBtn}>
        <h2>Success!</h2>
        <h3>User created</h3>
        <Button handleClick={handleOkBtn}>Ok</Button>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
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
        <div>
          <Button label="Login" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
