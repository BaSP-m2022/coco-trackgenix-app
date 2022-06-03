import React, { useState, useEffect } from 'react';

const Form = ({
  edit,
  itemToUpdate,
  editStartDate,
  handleEditStartDate,
  editEndDate,
  handleEditEndDate,
  switcher
}) => {
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
  const [timeSheetToEdit, setTimeSheetToEdit] = useState({});
  const emptyList = [];
  const [taskList, setTaskList] = useState(emptyList);

  useEffect(() => {
    if (edit) {
      setTimeSheetToEdit({
        tasks: itemToUpdate[0].tasks.filter((task) => task.length > 0),
        employeeId: itemToUpdate[0].employeeId._id,
        projectId: itemToUpdate[0].projectId._id,
        startDate: itemToUpdate[0].startDate.substring(0, 10),
        endDate: itemToUpdate[0].endDate.substring(0, 10)
      });
      setItem({
        ...addItem,
        tasks: itemToUpdate[0].tasks.filter((task) => task.length > 0),
        employeeId: itemToUpdate[0].employeeId._id,
        projectId: itemToUpdate[0].projectId._id,
        startDate: itemToUpdate[0].startDate.substring(0, 10),
        endDate: itemToUpdate[0].endDate.substring(0, 10)
      });
    }
  }, []);
  //   const checkEmptyFields = (e) => {
  //     if (addItem.employeeId === '') {
  //       console.log('employee entro');
  //       console.log(e.target[0].name);
  //       console.log(e.target);
  //       const name = e.target[0].name;
  //       setItem({
  //         ...addItem,
  //         [name]: e.target[0].value
  //       });
  //     }
  //     if (addItem.projectId === '') setItem({ ...addItem, ['projectId']: e.target[1].value });
  //     if (addItem.tasks === []) setItem({ ...addItem, ['tasks']: [e.target[2].value] });
  //     if (addItem.startDate === '') setItem({ ...addItem, ['startDate']: e.target[3].value });
  //     if (addItem.endDate === '') setItem({ ...addItem, ['endDate']: e.target[4].value });
  //   };
  const handleDeleteTask = (id) => {
    setTaskList([...taskList.filter((task) => task._id !== id)]);
  };

  const onChange = (e) => {
    console.log('additem', addItem);
    if (edit) {
      if (e.target.name === 'startDate') {
        handleEditStartDate(false);
      }
      if (e.target.name === 'endDate') {
        handleEditEndDate(false);
      }
    }
    setItem({
      ...addItem,
      [e.target.name]: e.target.value
    });
    console.log(addItem);
  };
  useEffect(() => {
    setItem({
      ...addItem,
      tasks: taskList.map((task) => {
        return task._id;
      })
    });
  }, [taskList]);
  const onChangeTasks = (e) => {
    setTaskList([...taskList, tasksItem.find((task) => task._id === e.target.value)]);
  };
  const create = (e) => {
    e.preventDefault();
    if (edit) {
      if (JSON.stringify(addItem) === JSON.stringify(timeSheetToEdit)) {
        alert('The data for this time sheet has not been modified');
      } else {
        try {
          fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${itemToUpdate[0]._id}`, {
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
            .then((res) => {
              alert(res.msg);
              console.log(res);
              if (!res.error) {
                switcher();
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
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
              switcher();
            }
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
        setProjectsItem(json.data);
      });
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`)
      .then((res) => res.json())
      .then((json) => {
        setTasksItem(json.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>{edit ? 'Edit Time-sheet' : 'Add New Time-sheet'}</h2>
      </div>
      <form onSubmit={create}>
        <div>
          <label>Employee</label>
          <select onChange={onChange} name="employeeId">
            {
              <option disabled selected>
                Select a employee
              </option>
            }
            {employeesItem.map((item) => (
              <option
                key={item.id}
                value={item._id}
                selected={
                  edit && item.firstName === itemToUpdate[0].employeeId.firstName ? true : false
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
            {
              <option disabled selected>
                Select a project
              </option>
            }
            {projectsItem.map((item) => (
              <option
                key={item.id}
                value={item._id}
                selected={edit && item.name === itemToUpdate[0].projectId.name ? true : false}
              >
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
              <option
                key={item.id}
                value={item._id}
                selected={
                  edit &&
                  itemToUpdate[0].tasks.length &&
                  item.description === itemToUpdate[0].tasks[0].description
                    ? true
                    : false
                }
              >
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
          <input
            type="date"
            name="startDate"
            value={
              edit && editStartDate
                ? `${itemToUpdate[0].startDate.substring(0, 10)}`
                : addItem.startDate
            }
            onChange={onChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={
              edit && editEndDate ? `${itemToUpdate[0].endDate.substring(0, 10)}` : addItem.endDate
            }
            onChange={onChange}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
