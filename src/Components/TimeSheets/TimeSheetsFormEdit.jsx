import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../redux/modules/employees/thunks';
import { getProject } from '../redux/modules/projects/thunks';
import { getTasks } from '../redux/modules/tasks/thunks';
import { editTimesheet, getTimesheetById } from '../redux/modules/timeSheets/thunks';

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
        <div className={styles.buttonsContainer}>
          <Button
            type={('button', styles.returnTimesheetBtn)}
            handleClick={() => props.history.goBack()}
          >
            Return
          </Button>
          <Button type={('submit', styles.timesheetButton)}>Edit</Button>
        </div>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
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
        </div>
      </Modal>
    </div>
  );
};

export default EditFormTimesheet;
