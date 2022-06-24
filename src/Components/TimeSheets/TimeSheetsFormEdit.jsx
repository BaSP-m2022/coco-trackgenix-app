import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Button from 'Components/SharedComponents/Button/Button';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Modal from 'Components/SharedComponents/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from 'Components/redux/modules/employees/thunks';
import { getProject } from 'Components/redux/modules/projects/thunks';
import { getTasks } from 'Components/redux/modules/tasks/thunks';
import { editTimesheet, getTimesheetById } from '../redux/modules/timeSheets/thunks';
// import joi from 'joi';
// import { useForm } from 'react-hook-form';
// import { joiResolver } from '@hookform/resolvers/joi';

// const Schema = joi.Object({
//   tasks: joi.string().items(joi.string().lowercase()).messages({
//     'string.empty': 'Task cannot be empty'
//   }),
//   employeeId: joi.string().lowercase().messages({
//     'string.empty': 'Employee cannot be empty'
//   }),
//   projectId: joi.string().lowercase().messages({
//     'string.empty': 'Project cannot be empty'
//   }),
//   startDate: joi.date().messages({
//     'date.base': 'Date is not valid',
//     'date.empty': 'This field is required'
//   }),
//   endDate: joi.date().greater(joi.ref('startDate')).messages({
//     'date.base': 'Date is not valid',
//     'date.greater': 'End date must be after the start date',
//     'date.empty': 'This field is required'
//   })
// });
const EditFormTimesheet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [taskValue, setTaskValue] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const params = window.location.search;
  let idParam = params.substring(2);

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  //   reset
  // } = useForm({ mode: 'onChange', resolver: joiResolver(Schema) });

  const [editItem, setItem] = useState({});
  const employeeData = useSelector((state) => state.employee.list);
  const tasksData = useSelector((state) => state.tasks.list);
  const projectData = useSelector((state) => state.project.list);
  const [taskList, setTaskList] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [successTimesheet, setSuccessTimesheet] = useState(false);
  const isLoadingTimesheet = useSelector((state) => state.timesheet.isLoading);
  const selectedItem = useSelector((state) => state.timesheet.selectedItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getProject());
    dispatch(getTasks());
    dispatch(getTimesheetById(idParam));
  }, []);

  useEffect(() => {
    if (Object.keys(selectedItem).length) {
      setEmployeeId(selectedItem.employeeId);
      setProjectId(selectedItem.projectId);
      setTaskValue(selectedItem.tasks);
      setStartDate(selectedItem.startDate);
      setEndDate(selectedItem.endDate);
    }
  }, [selectedItem]);

  const tasks = tasksData.map((task) => task._id);

  useEffect(() => {
    if (taskList.length) {
      setItem({
        ...editItem,
        tasks: taskList.map((task) => {
          return task._id;
        })
      });
    }
  }, [taskList]);

  const formEditTimesheet = async (e) => {
    setIsOpen(true);
    await dispatch(editTimesheet(e, idParam, setModalText, setShowButton, setSuccessTimesheet));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setModalText('Are you sure you want to edit the Timesheet ?');
    setIsOpen(true);
  };

  const onChangeTasks = (e) => {
    if (taskList.find((task) => task._id === e.target.value) === undefined) {
      setTaskList([...taskList, tasksData.find((task) => task._id === e.target.value)]);
    } else {
      alert('This task has already been selected');
    }
  };

  const handleDeleteTask = (id) => {
    setTaskList([...taskList.filter((task) => task._id !== id)]);
  };

  if (isLoadingTimesheet) {
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <h2 className={styles.title}>Edit TimeSheet</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className={styles.mainContainer}>
          <div className={styles.col}>
            <Dropdown
              data={employeeData}
              name="employeeId"
              path="firstName"
              labelText="Employee"
              value={employeeId && employeeId.firstName}
              onChange={(e) => {
                setEmployeeId(e.target.value);
              }}
            ></Dropdown>
            <Dropdown
              data={projectData}
              name="projectId"
              labelText="Project"
              value={projectId && projectId.name}
              path="name"
              onChange={(e) => {
                setProjectId(e.target.value);
              }}
            ></Dropdown>
            <Dropdown
              data={tasksData}
              name="tasks"
              labelText="Tasks"
              value={taskValue.description}
              path="description"
              onChange={(e) => {
                onChangeTasks;
                setTaskValue(e.target.value);
              }}
            ></Dropdown>
          </div>
          <div>
            <table>
              <tbody>
                {taskList.map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.description}</td>
                      <td>
                        <Button handleClick={() => handleDeleteTask(task._id)}>X</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.col}>
            <div>
              <label>Start Date</label>
              <input type="date" name="startDate" value={startDate.slice(0, 10)} disabled />
            </div>
            <div>
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={endDate.slice(0, 10)}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.btnContainer}>
            <Button type={('submit', styles.timesheetButton)}>Edit</Button>
            <Button
              type={('button', styles.returnTimesheetBtn)}
              handleClick={() => props.history.goBack()}
            >
              Return
            </Button>
          </div>
        </div>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={
              showButton && !successTimesheet
                ? styles.modalTimesheetBtn
                : styles.modalTimesheetBtnNone
            }
            handleClick={() => {
              const timesheetToEdit = {
                employeeId,
                projectId,
                tasks,
                startDate,
                endDate
              };
              formEditTimesheet(timesheetToEdit);
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
                props.history.push('/time-sheets');
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

export default EditFormTimesheet;
