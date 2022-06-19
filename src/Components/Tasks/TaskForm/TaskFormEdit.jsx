import React from 'react';
import styles from 'Components/Tasks/TaskForm/taskForm.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Input from 'Components/SharedComponents/Input/Input';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTasks, getTaskById } from 'Components/redux/modules/tasks/thunks';
import { cleanSelectedItem } from 'Components/redux/modules/tasks/actions';
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = joi.object({
  description: joi
    .string()
    .min(1)
    .max(90)
    .required('Description is a required field')
    .regex(/^[0-:A-Za-z ",-.]{1,90}$/),
  workedHours: joi.number().integer().positive().required('Worked hours is a required field')
});

const TaskFormEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [resStatus, setResStatus] = useState(false);
  const params = window.location.search;
  const id = params.substring(2);

  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.tasks.selectedItem);
  const isFetching = useSelector((state) => state.tasks.isFetching);

  useEffect(() => {
    dispatch(getTaskById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      reset({
        description: selectedItem.description,
        workedHours: selectedItem.workedHours
      });
    }
  }, [selectedItem]);

  useEffect(() => {
    return () => {
      dispatch(cleanSelectedItem());
    };
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange', resolver: joiResolver(schema) });

  const onSubmit = async (data) => {
    const id = params.substring(2);
    if (
      data.description !== selectedItem.description ||
      data.workedHours !== selectedItem.workedHours
    ) {
      dispatch(editTasks(id, data, setResStatus, setResponseMsg));
    }
  };

  const handleOkBtn = () => {
    if (resStatus) {
      props.history.push('/tasks');
    } else {
      setIsOpen(false);
    }
  };

  if (isFetching) {
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Edit Task</h2>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            <Button type={('submit', styles.buttonEdit)} handleClick={() => setIsOpen(true)}>
              Edit
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
          {resStatus ? responseMsg : `The task could not be updated`}
        </h3>
        <Button type={styles.buttonForm} handleClick={handleOkBtn}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};
export default TaskFormEdit;
