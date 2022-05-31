import React, { useState, useEffect } from 'react';

const Form = () => {
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
    try {
      fetch(`https://coco-trackgenix-server.vercel.app/timesheets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addItem)
      });
    } catch (error) {
      console.log(error);
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
              <option key={item.id} value={item._id}>
                {item.firstName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Project</label>
          <select onChange={onChange} name="projectId">
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
            {tasksItem.map((item) => (
              <option key={item.id} value={item._id}>
                {item.description}
              </option>
            ))}
          </select>
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
};
export default Form;
