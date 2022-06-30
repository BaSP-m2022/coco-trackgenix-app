import {
  addTasksError,
  addTasksPending,
  addTasksSuccess,
  deleteTasksError,
  deleteTasksPending,
  deleteTasksSuccess,
  editTasksError,
  editTasksPending,
  editTasksSuccess,
  getTasksByIdError,
  getTasksByIdPending,
  getTasksByIdSuccess,
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
    const token = sessionStorage.getItem('token');
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        token
      })
    })
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

export const getTaskById = (id) => {
  return (dispatch) => {
    dispatch(getTasksByIdPending());
    const token = sessionStorage.getItem('token');
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      headers: { token }
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(getTasksByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getTasksByIdError(error.toString()));
      });
  };
};

export const deleteTasks = (id) => {
  return (dispatch) => {
    dispatch(deleteTasksPending());
    const token = sessionStorage.getItem('token');
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'DELETE',
      token
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
    const token = sessionStorage.getItem('token');
    fetch(`https://coco-trackgenix-server.vercel.app/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          setResStatus(true);
          setResponseMsg(data.msg.substring(9));
          dispatch(addTasksSuccess(data));
        } else {
          setResStatus(false);
          if (data.msg.includes('fails to match the required pattern')) {
            setResponseMsg('the data entered is not correct');
          } else {
            setResponseMsg('all fields should be completed.');
          }
          dispatch(addTasksError(data.error.toString()));
        }
      })
      .catch((error) => {
        dispatch(addTasksError(error.toString()));
      });
  };
};

export const editTasks = (id, values, setResStatus, setResponseMsg) => {
  return (dispatch) => {
    dispatch(editTasksPending());
    const token = sessionStorage.getItem('token');
    fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: JSON.stringify(values)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          setResStatus(true);
          setResponseMsg(data.msg.substring(9));
          dispatch(editTasksSuccess(data));
        } else {
          setResStatus(false);
          if (data.msg.includes('fails to match the required pattern')) {
            setResponseMsg('the data entered is not correct');
          } else {
            setResponseMsg('all fields should be completed.');
          }
          dispatch(editTasksError(data.error.toString()));
        }
      })
      .catch((error) => dispatch(editTasksError(error.toString())));
  };
};
