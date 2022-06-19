import React, { useState, useEffect } from 'react';
import styles from './time-sheets.module.css';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Loading from '../SharedComponents/Loading/Loading';
import Modal from '../SharedComponents/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addTimesheet } from '../redux/modules/timeSheets/thunks';
import { getEmployee } from '../redux/modules/employees/thunks';
import { getProject } from '../redux/modules/projects/thunks';
import { getTasks } from '../redux/modules/tasks/thunks';

const TimeSheetsForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [timesheetInput, setTimesheetInput] = useState({
    employeeId: props.employeeId,
    projectId: props.projectId,
    tasks: [props.tasks],
    startDate: props.startDate,
    endDate: props.endDate
  });

  const [addItem, setItem] = useState({});
  const employeeData = useSelector((state) => state.employee.list);
  const tasksData = useSelector((state) => state.tasks.list);
  const projectData = useSelector((state) => state.project.list);
  const [taskList, setTaskList] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [successTimesheet, setSuccessTimesheet] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    setTaskList([...taskList.filter((task) => task._id !== id)]);
  };
  const isLoadingTimesheet = useSelector((state) => state.timesheet.isLoading);

  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getProject());
    dispatch(getTasks());
  }, []);

  if (isLoadingTimesheet) {
    return <Loading className={styles.loadText}></Loading>;
  }

  const onChange = (e) => {
    setTimesheetInput({
      ...timesheetInput,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (taskList.length) {
      setItem({
        ...addItem,
        tasks: taskList.map((task) => {
          return task._id;
        })
      });
    }
  }, [taskList]);

  useEffect(() => {
    if (taskList.length) {
      setItem({
        ...addItem,
        tasks: taskList.map((task) => {
          return task._id;
        })
      });
    }
  }, [taskList]);

  const formTimesheet = async (e) => {
    setIsOpen(true);
    setTimesheetInput({
      employeeId: '',
      projectId: '',
      tasks: [],
      startDate: '',
      endDate: ''
    });
    await dispatch(addTimesheet(e, setModalText, setSuccessTimesheet, setShowButton));
  };

  // if (
  //   timesheetInput.employeeId == '' ||
  //   timesheetInput.projectId == '' ||
  //   timesheetInput.tasks == [] ||
  //   timesheetInput.startDate == '' ||
  //   timesheetInput.endDate == ''
  // ) {
  //   setShowButton(false);
  //   setSuccessTimesheet(false);
  //   setModalText('Fields filled incorrectly, please check the data');
  // }

  const onChangeTasks = (e) => {
    if (taskList.find((task) => task._id === e.target.value) === undefined) {
      setTaskList([...taskList, tasksData.find((task) => task._id === e.target.value)]);
    } else {
      alert('This task has already been selected');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTimesheetInput({
      ...timesheetInput,
      tasks: taskList.map((task) => task._id)
    });
    setModalText('Are you sure you want to create an new timesheet ?');
    setIsOpen(true);
  };

  console.log('successTimesheet', successTimesheet);
  console.log('showButton', showButton);

  return (
    <div>
      <Logo />
      <div>
        <h2>Add New TimeSheet</h2>
      </div>
      <form onSubmit={onSubmit}>
        <Dropdown
          data={employeeData}
          name="employeeId"
          labelText="Select an employee"
          path="firstName"
          onChange={onChange}
        ></Dropdown>
        <Dropdown
          data={projectData}
          name="projectId"
          labelText="Select a project"
          path="name"
          onChange={onChange}
        ></Dropdown>
        <Dropdown
          data={tasksData}
          name="tasks"
          labelText="Select a task"
          path="description"
          onChange={onChangeTasks}
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
          <input
            type="date"
            name="startDate"
            value={timesheetInput.startDate}
            onChange={onChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input type="date" name="endDate" value={timesheetInput.endDate} onChange={onChange} />
        </div>
        <Button handleClick={() => props.history.goBack()}>Return</Button>
        <Button type={('submit', styles.timesheetBtn)}>Create</Button>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={styles.modalEmployeeBtn}
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
              formTimesheet(timesheetInput);
              // window.location.href = '/time-sheets';
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default TimeSheetsForm;
