import {
  addTasksError,
  addTasksPending,
  addTasksSuccess,
  deleteTasksError,
  deleteTasksPending,
  deleteTasksSuccess,
  getTasksError,
  getTasksPending,
  getTasksSuccess
} from './actions';

export const getTasks = () => {
  const dateFormatter = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (dispatch) => {
    dispatch(getTasksPending());
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks`)
      .then((response) => response.json())
      .then((response) => {
        response.data.forEach((task) => {
          task.date = dateFormatter(task.date).substring(0, 10);
        });
        dispatch(getTasksSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(getTasksError(error.toString()));
      });
  };
};

export const deleteTasks = (id) => {
  return (dispatch) => {
    dispatch(deleteTasksPending());
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        dispatch(deleteTasksSuccess(id));
      })
      .then(() => {
        dispatch(getTasks());
      })
      .catch((error) => {
        dispatch(deleteTasksError(error.toString()));
      });
  };
};

export const addTasks = (values, setResStatus, setResponseMsg) => {
  return (dispatch) => {
    dispatch(addTasksPending());
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          setResStatus(true);
          setResponseMsg(data.msg.substring(9));
        } else {
          setResStatus(false);
          if (data.msg.includes('fails to match the required pattern')) {
            setResponseMsg('the data entered is not correct');
          } else {
            setResponseMsg('all fields should be completed.');
          }
        }
        dispatch(addTasksSuccess(data));
      })
      .catch((error) => {
        dispatch(addTasksError(error));
      });
  };
};
