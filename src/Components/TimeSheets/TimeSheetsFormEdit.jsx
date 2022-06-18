import React, { useState, useEffect } from 'react';
import styles from './time-sheets-form.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';

const EditFormTimesheet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addItem, setItem] = useState({});
  const [employeesItem, setEmployeesItem] = useState([]);
  const [projectsItem, setProjectsItem] = useState([]);
  const [tasksItem, setTasksItem] = useState([]);
  const [timeSheetToEdit, setTimeSheetToEdit] = useState({});
  const emptyList = [];
  const [taskList, setTaskList] = useState(emptyList);
  const [itemToUpdate, setItemToUpdate] = useState({});
  const params = window.location.search;
  let idParam = params.substring(2);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    setTimeSheetToEdit({
      tasks: itemToUpdate.tasks,
      employeeId: itemToUpdate.employeeId !== null ? itemToUpdate.employeeId : 'no employee',
      projectId: itemToUpdate.projectId !== null ? itemToUpdate.projectId : 'no project',
      startDate: itemToUpdate.startDate,
      endDate: itemToUpdate.endDate
    });
    setItem({
      ...addItem,
      tasks: itemToUpdate.tasks,
      employeeId: itemToUpdate.employeeId !== null ? itemToUpdate.employeeId : 'no employee',
      projectId: itemToUpdate.projectId !== null ? itemToUpdate.projectId : 'no project',
      startDate: itemToUpdate.startDate,
      endDate: itemToUpdate.endDate
    });
  }, [itemToUpdate]);

  const handleDeleteTask = (id) => {
    setTaskList([...taskList.filter((task) => task._id !== id)]);
  };

  const onChange = (e) => {
    setItem({
      ...addItem,
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

  const onChangeTasks = (e) => {
    if (taskList.find((task) => task._id === e.target.value) === undefined) {
      setTaskList([...taskList, tasksItem.find((task) => task._id === e.target.value)]);
    } else {
      alert('This task has already been selected');
    }
  };

  const create = async (e) => {
    e.preventDefault();
    if (JSON.stringify(addItem) === JSON.stringify(timeSheetToEdit)) {
      setModalText('Please change at least 1 field');
    } else {
      try {
        await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${idParam}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tasks: taskList.map((task) => {
              return task._id;
            }),
            employeeId: addItem.employeeId,
            projectId: addItem.projectId,
            startDate: addItem.startDate,
            endDate: addItem.endDate
          })
        })
          .then((res) => res.json())
          .then((response) => {
            setModalText(() => {
              if (!response.error) {
                return 'Time sheet updated successfully!';
              } else {
                return response.msg;
              }
            });
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(async () => {
    await fetch(`https://coco-trackgenix-server.vercel.app/employees`)
      .then((res) => res.json())
      .then((json) => {
        setEmployeesItem(json.data);
      });
    await fetch(`https://coco-trackgenix-server.vercel.app/projects`)
      .then((res) => res.json())
      .then((json) => {
        setProjectsItem(json.data);
      });
    await fetch(`https://coco-trackgenix-server.vercel.app/tasks`)
      .then((res) => res.json())
      .then((json) => {
        setTasksItem(json.data);
      });
  }, []);

  useEffect(async () => {
    await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${idParam}`)
      .then((response) => response.json())
      .then((response) => {
        setItemToUpdate(response.data);
      });
  }, []);

  const employeeList = employeesItem.map((item) => {
    return (
      <option key={item.id} value={item._id}>
        {item.firstName}
      </option>
    );
  });

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <h2 className={styles.title}>Edit TimeSheet</h2>
      </div>
      <form onSubmit={create} className={styles.formContainer}>
        <div>
          <label>Employee</label>
          <select onChange={onChange} name="employeeId">
            {
              <option disabled selected>
                Select an employe
              </option>
            }
            {employeeList}
          </select>
        </div>
        <div>
          <label>Project</label>
          <select onChange={onChange} name="projectId">
            {
              <option disabled selected>
                Select a project
              </option>
            }
            {projectsItem.map((item) => (
              <option key={item.id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tasks</label>
          <select onChange={onChangeTasks} name="tasks">
            {
              <option disabled selected>
                Select a task
              </option>
            }
            {tasksItem.map((item) => (
              <option key={item.id} value={item._id}>
                {item.description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <table>
            <tbody>
              {taskList.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.description}</td>
                    <td>
                      <button onClick={() => handleDeleteTask(task._id)}>X</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <label>Start Date</label>
          <input type="date" name="startDate" onChange={onChange} />
        </div>
        <div>
          <label>End Date</label>
          <input type="date" name="endDate" onChange={onChange} />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            type={styles.stylesBtn}
            handleClick={(e) => {
              setIsOpen(true);
              e.stopPropagation();
            }}
          >
            Accept
          </Button>
          <Button type={styles.stylesBtn} handleClick={() => console.log('click')}>
            Cancel
          </Button>
        </div>
      </form>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={('submit', styles.confirmBtn)}
            handleClick={() => {
              setIsOpen(false);
              props.history.push('/time-sheets');
            }}
          >
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditFormTimesheet;
