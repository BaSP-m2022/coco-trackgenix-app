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
import { getProject } from 'Components/redux/modules/projects/thunks';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const timesheetSchema = Joi.object({
  member: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid employee'
    }),
  project: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid project'
    }),
  task: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+(\s)*$/)
    .messages({
      'string.pattern.base': 'A task is required, only text.'
    }),
  startDate: Joi.date().required().min('now').messages({
    'date.base': 'Date is not valid',
    'date.min': 'Date must be greater than now',
    'date.empty': 'This field is required'
  }),
  endDate: Joi.date().required().min(Joi.ref('startDate')).messages({
    'date.base': 'Date is not valid',
    'date.min': 'End date must be after the start date',
    'date.empty': 'This field is required'
  }),
  workedHours: Joi.array().required().min(7).max(7),
  approved: Joi.boolean().required()
});

const TimeSheetsFormAdd = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [timesheetInput, setTimesheetInput] = useState({
    member: props.member,
    project: props.projectId,
    task: props.task,
    startDate: props.startDate,
    endDate: props.endDate,
    workedHours: [props.workedHours],
    approved: props.approved
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(timesheetSchema) });

  // const memberData = useSelector((state) => state.member.list);
  const projectData = useSelector((state) => state.project.list);
  const [showButton, setShowButton] = useState(true);
  const [successTimesheet, setSuccessTimesheet] = useState(false);

  const dispatch = useDispatch();

  const isLoadingTimesheet = useSelector((state) => state.timesheet.isLoading);

  useEffect(() => {
    // dispatch(getMember());
    dispatch(getProject());
  }, []);

  const formTimesheet = (e) => {
    setIsOpen(true);
    dispatch(addTimesheet(e, setModalText, setSuccessTimesheet, setShowButton));
  };

  const onSubmit = (data) => {
    setTimesheetInput({
      ...timesheetInput,
      member: data.member,
      project: data.project,
      task: data.task,
      startDate: data.startDate.toString(),
      endDate: data.endDate.toString(),
      workedHours: [
        Number(data.dayOne),
        Number(data.dayTwo),
        Number(data.dayThree),
        Number(data.dayFour),
        Number(data.dayFive),
        Number(data.daySix),
        Number(data.daySeven)
      ],
      approved: false
    });
    setModalText('Are you sure you want to create an new timesheet ?');
    setIsOpen(true);
  };

  if (isLoadingTimesheet) {
    return <Loading></Loading>;
  }

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
              data={projectData}
              name="member"
              labelText="Select a member"
              path="employee.firstName"
              register={register}
              error={errors.member?.message}
            ></Dropdown>
            <Dropdown
              data={projectData}
              name="project"
              labelText="Select a project"
              path="name"
              register={register}
              error={errors.project?.message}
            ></Dropdown>
            <Input
              labelText="Task"
              name="task"
              type="string"
              placeholder="Write a task here"
              register={register}
              error={errors.task?.message}
            ></Input>
          </div>
          <div className={styles.col}>
            <div>
              <Input
                labelText="Start Date"
                type="date"
                name="startDate"
                register={register}
                error={errors.startDate?.message}
              />
            </div>
            <div>
              <Input
                labelText="End Date"
                type="date"
                name="endDate"
                register={register}
                error={errors.endDate?.message}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.days}>
              <Input type="string" name="dayOne" register={register} />
              <Input type="string" name="dayTwo" register={register} />
              <Input type="string" name="dayThree" register={register} />
              <Input type="string" name="dayFour" register={register} />
              <Input type="string" name="dayFive" register={register} />
              <Input type="string" name="daySix" register={register} />
              <Input type="string" name="daySeven" register={register} />
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
