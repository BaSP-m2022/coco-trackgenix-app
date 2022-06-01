import React, { useState, useEffect } from 'react';

const Form = ({ edit, itemToUpdate, editDate, handleEditDate }) => {
  const [addItem, setItem] = useState({
    tasks: [],
    employeeId: '',
    projectId: '',
    startDate: '',
    endDate: ''
  });
  const [employeesItem, setEmployeesItem] = useState([]);
  const [projectsItem, setProjectsItem] = useState([]);
  const [tasksItem, setTasksItem] = useState([]);

  const onChange = (e) => {
    if (edit) {
      handleEditDate(false);
    }
    setItem({
      ...addItem,
      [e.target.name]: e.target.value
    });
    console.log(addItem);
  };
  console.log(addItem);
  const onChangeTasks = (e) => {
    setItem({
      ...addItem,
      [e.target.name]: [e.target.value]
    });
  };
  const create = (e) => {
    e.preventDefault();
    if (edit) {
      try {
        fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${itemToUpdate[0]._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(addItem)
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        fetch(`https://coco-trackgenix-server.vercel.app/timesheets`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(addItem)
        });
      } catch (error) {
        console.log(error);
      }
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
        console.log('projects', json.data);
        setProjectsItem(json.data);
      });
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`)
      .then((res) => res.json())
      .then((json) => {
        console.log('tasks', json.data);
        setTasksItem(json.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Add New Timesheet</h2>
      </div>
      <form onSubmit={create}>
        <div>
          <label>Employee</label>
          <select onChange={onChange} name="employeeId">
            {employeesItem.map((item) => (
              <option
                key={item.id}
                value={item._id}
                selected={
                  item.firstName === itemToUpdate[0].employeeId.firstName && edit ? true : false
                }
              >
                {item.firstName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Project</label>
          <select onChange={onChange} name="projectId">
            {projectsItem.map((item) => (
              <option
                key={item.id}
                value={item._id}
                selected={item.name === itemToUpdate[0].projectId.name && edit ? true : false}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tasks</label>
          <select onChange={onChangeTasks} name="tasks">
            {tasksItem.map((item) => (
              <option
                key={item.id}
                value={item._id}
                selected={
                  item.description === itemToUpdate[0].tasks[0].description && edit ? true : false
                }
              >
                {item.description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={
              edit && editDate ? `${itemToUpdate[0].startDate.substring(0, 10)}` : addItem.startDate
            }
            onChange={onChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={edit ? `${itemToUpdate[0].endDate.substring(0, 10)}` : addItem.endDate}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
