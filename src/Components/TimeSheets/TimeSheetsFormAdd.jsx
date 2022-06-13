import React, { useState, useEffect } from 'react';
import styles from './time-sheets-form.module.css';
import Button from '../SharedComponents/Button/Button';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';

const TimeSheetsFormAdd = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addItem, setItem] = useState({});
  const [employeesItem, setEmployeesItem] = useState([]);
  const [projectsItem, setProjectsItem] = useState([]);
  const [tasksItem, setTasksItem] = useState([]);
  const emptyList = [];
  const [taskList, setTaskList] = useState(emptyList);
  const [modalText, setModalText] = useState('');

  // const handleDeleteTask = (id) => {
  //   setTaskList([...taskList.filter((task) => task._id !== id)]);
  // };

  const onChange = (e) => {
    setItem({
      ...addItem,
      [e.target.name]: e.target.value
    });
  };

  // useEffect(() => {
  //   if (taskList.length) {
  //     setItem({
  //       ...addItem,
  //       tasks: taskList.map((task) => {
  //         return task._id;
  //       })
  //     });
  //   }
  // }, [taskList]);

  // const onChangeTasks = (e) => {
  //   if (taskList.find((task) => task._id === e.target.value) === undefined) {
  //     setTaskList([...taskList, tasksItem.find((task) => task._id === e.target.value)]);
  //   } else {
  //     alert('This task has already been selected');
  //   }
  // };

  const create = (e) => {
    e.preventDefault();
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/timesheets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addItem)
      })
        .then((response) => response.json())
        .then((response) => {
          setModalText(() => {
            if (!response.error) {
              return 'Time sheet created successfully!';
            } else {
              return response.msg;
            }
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch(`https://coco-trackgenix-server.vercel.app/employees`)
      .then((res) => res.json())
      .then((json) => {
        setEmployeesItem(json.data);
      });
    fetch(`https://coco-trackgenix-server.vercel.app/projects`)
      .then((res) => res.json())
      .then((json) => {
        setProjectsItem(json.data);
      });
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`)
      .then((res) => res.json())
      .then((json) => {
        setTasksItem(json.data);
      });
  }, []);

  const backTimeSheet = () => {
    props.history.push('/time-sheets');
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <h2 className={styles.title}>Add New TimeSheet</h2>
      </div>
      <form onSubmit={create} className={styles.formContainer}>
        <div>
          <label>Employee</label>
          <select onChange={onChange} name="employeeId">
            {
              <option disabled selected>
                Select a employee
              </option>
            }
            {employeesItem.map((item) => (
              <option key={item.id} value={item._id}>
                {item.firstName}
              </option>
            ))}
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
        {/* <div>
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
        </div> */}
        <div>
          <Dropdown data={tasksItem} path="description">
            Task
          </Dropdown>
        </div>
        <div>
          <label>Start Date</label>
          <input type="date" name="startDate" value={addItem.startDate} onChange={onChange} />
        </div>
        <div>
          <label>End Date</label>
          <input type="date" name="endDate" value={addItem.endDate} onChange={onChange} />
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
          <Button type={styles.stylesBtn} handleClick={() => backTimeSheet()}>
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

export default TimeSheetsFormAdd;
