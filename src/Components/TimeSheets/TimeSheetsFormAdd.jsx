import React, { useState, useEffect } from 'react';
import Dropdown from '../SharedComponents/Dropdown/Dropdown';
import Button from '../SharedComponents/Button/Button';

const TimeSheetsForm = (props) => {
  const [addItem, setItem] = useState({});
  const [employeesItem, setEmployeesItem] = useState([]);
  const [projectsItem, setProjectsItem] = useState([]);
  const [tasksItem, setTasksItem] = useState([]);

  const emptyList = [];
  const [taskList, setTaskList] = useState(emptyList);

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
          alert(response.error ? `Error! ${response.msg}` : `Success! ${response.message}`);
          if (!response.error) {
            props.history.push('/time-sheets');
          }
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

  if (window.location.pathname === '/employees/timesheetAdd') {
    return (
      <div>
        <div>
          <h2>Add New TimeSheet</h2>
        </div>
        <form onSubmit={create}>
          <div>
            <button onClick={() => props.history.push('/employees/timesheet')}>Back</button>
          </div>
          <Dropdown
            data={employeesItem}
            name="employeeId"
            labelText="Select an employee"
            path="firstName"
            onChange={onChange}
          ></Dropdown>
          <Dropdown
            data={projectsItem}
            name="projectId"
            labelText="Select a project"
            path="name"
            onChange={onChange}
          ></Dropdown>
          <Dropdown
            data={tasksItem}
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
            <input type="date" name="startDate" value={addItem.startDate} onChange={onChange} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" name="endDate" value={addItem.endDate} onChange={onChange} />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h2>Add New TimeSheet</h2>
        </div>
        <form onSubmit={create}>
          <div>
            <button onClick={() => props.history.push('/time-sheets')}>Back</button>
          </div>
          <Dropdown
            data={employeesItem}
            name="employeeId"
            labelText="Select an employee"
            path="firstName"
            onChange={onChange}
          ></Dropdown>
          <Dropdown
            data={projectsItem}
            name="projectId"
            labelText="Select a project"
            path="name"
            onChange={onChange}
          ></Dropdown>
          <Dropdown
            data={tasksItem}
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
            <input type="date" name="startDate" value={addItem.startDate} onChange={onChange} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" name="endDate" value={addItem.endDate} onChange={onChange} />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};
export default TimeSheetsForm;
