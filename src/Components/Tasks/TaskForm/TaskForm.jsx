import React, { useState } from 'react';
import styles from 'Components/Tasks/TaskForm/taskForm.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Input from 'Components/SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addTasks } from 'Components/redux/modules/tasks/thunks';
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = joi.object({
  description: joi
    .string()
    .min(1)
    .max(90)
    .required()
    .regex(/^[0-:A-Za-z ",-.]{1,90}$/)
    .messages({
      'string.min': '{{#label}} must have at least 1 character',
      'string.max': '{{#label}} must have less than 90 characters',
      'string.empty': '{{#label}} is a required field',
      'string.pattern.base': '{{#label}} must only contain alpha-numeric characters'
    }),
  workedHours: joi.number().integer().positive().required().messages({
    'number.integer': '"worked hours" must be an integer',
    'number.positive': '"worked hours" must be a positive number',
    'number.base': '"worked hours" is a required field and must be a number'
  })
});

const TaskForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);

  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.tasks.isFetching);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(schema) });

  const onSubmit = (data) => {
    dispatch(addTasks(data, setResStatus, setResponseMsg));
  };

  const handleOkBtn = () => {
    if (resStatus) {
      props.history.push('/tasks');
    } else {
      setIsOpen(false);
    }
  };

  if (isFetching) {
    console.error(isOpen);
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>New Task</h2>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsContainer}>
            <div className={styles.inputDescription}>
              <Input
                name="description"
                labelText="Task Description"
                type="text"
                placeholder="Task Description"
                register={register}
                error={errors.description?.message}
              ></Input>
            </div>
            <div className={styles.inputWorkedHours}>
              <Input
                name="workedHours"
                labelText="Worked Hours"
                type="text"
                placeholder="Worked Hours"
                register={register}
                error={errors.workedHours?.message}
              ></Input>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button type={('submit', styles.buttonForm)} handleClick={() => setIsOpen(true)}>
              Create
            </Button>
            <Button type={styles.buttonForm} handleClick={() => props.history.push('/tasks')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={handleOkBtn}>
        <h2>{resStatus ? 'Success!' : 'Warning!'}</h2>
        <h3 className={styles.modalMsg}>
          {resStatus ? responseMsg : `The task could not be created`}
        </h3>
        <Button type={styles.buttonForm} handleClick={handleOkBtn}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};

export default TaskForm;
