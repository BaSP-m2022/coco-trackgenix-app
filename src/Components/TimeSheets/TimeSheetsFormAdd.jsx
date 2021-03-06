import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Button from 'Components/SharedComponents/Button/Button';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Input from 'Components/SharedComponents/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addTimesheet } from 'Components/redux/modules/timeSheets/thunks';
import { getEmployee } from 'Components/redux/modules/employees/thunks';
import { getProject } from 'Components/redux/modules/projects/thunks';
import { getTasks } from 'Components/redux/modules/tasks/thunks';
// import { useRouteMatch } from 'react-router-dom';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const timesheetSchema = Joi.object({
  employeeId: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid employee'
    }),
  projectId: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid project'
    }),
  tasks: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid task'
    }),
  startDate: Joi.date().required().min('now').messages({
    'date.base': 'Date is not valid',
    'date.min': 'Date must be greater than now',
    'date.empty': 'This field is required'
  }),
  endDate: Joi.date().required().greater(Joi.ref('startDate')).messages({
    'date.base': 'Date is not valid',
    'date.greater': 'End date must be after the start date',
    'date.empty': 'This field is required'
  })
});

const TimeSheetsFormAdd = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [timesheetInput, setTimesheetInput] = useState({
    employeeId: props.employeeId,
    projectId: props.projectId,
    tasks: [props.tasks],
    startDate: props.startDate,
    endDate: props.endDate
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(timesheetSchema) });

  const employeeData = useSelector((state) => state.employee.list);
  const tasksData = useSelector((state) => state.tasks.list);
  const projectData = useSelector((state) => state.project.list);
  const [showButton, setShowButton] = useState(true);
  const [successTimesheet, setSuccessTimesheet] = useState(false);

  const dispatch = useDispatch();

  const isLoadingTimesheet = useSelector((state) => state.timesheet.isLoading);

  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getProject());
    dispatch(getTasks());
  }, []);

  const formTimesheet = (e) => {
    setIsOpen(true);
    dispatch(addTimesheet(e, setModalText, setSuccessTimesheet, setShowButton));
  };

  const onSubmit = (data) => {
    setTimesheetInput({
      ...timesheetInput,
      employeeId: data.employeeId,
      projectId: data.projectId,
      tasks: [data.tasks],
      startDate: data.startDate.toString(),
      endDate: data.endDate.toString()
    });
    setModalText('Are you sure you want to create an new timesheet ?');
    setIsOpen(true);
  };

  if (isLoadingTimesheet) {
    return <Loading></Loading>;
  }

  // const { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <h2 className={styles.title}>Add New TimeSheet</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mainContainer}>
          <div className={styles.col}>
            <Dropdown
              data={employeeData}
              name="employeeId"
              labelText="Select an employee"
              path="firstName"
              register={register}
              error={errors.employeeId?.message}
            ></Dropdown>
            <Dropdown
              data={projectData}
              name="projectId"
              labelText="Select a project"
              path="name"
              register={register}
              error={errors.projectId?.message}
            ></Dropdown>
            <Dropdown
              data={tasksData}
              name="tasks"
              labelText="Select a task"
              path="description"
              register={register}
              error={errors.tasks?.message}
            ></Dropdown>
          </div>
          <div className={styles.col}>
            <div>
              <label>Start Date</label>
              <Input
                type="date"
                name="startDate"
                register={register}
                error={errors.startDate?.message}
              />
            </div>
            <div>
              <label>End Date</label>
              <Input
                type="date"
                name="endDate"
                register={register}
                error={errors.endDate?.message}
              />
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button type={('submit', styles.timesheetButton)}>Create</Button>
          <Button
            type={('button', styles.returnTimesheetBtn)}
            handleClick={() => props.history.goBack()}
          >
            Return
          </Button>
        </div>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div className={styles.modalBtnContainer}>
          <Button
            type={
              showButton && !successTimesheet
                ? styles.modalTimesheetBtn
                : styles.modalTimesheetBtnNone
            }
            handleClick={() => {
              formTimesheet(timesheetInput);
            }}
          >
            Confirm
          </Button>
          <Button
            type={styles.modalTimesheetBtn}
            handleClick={() => {
              if (!showButton && successTimesheet) {
                setShowButton(true);
                setSuccessTimesheet(false);
                props.history.goBack();
              } else {
                setShowButton(true);
                setSuccessTimesheet(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !successTimesheet ? 'Cancel' : 'Ok'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default TimeSheetsFormAdd;
