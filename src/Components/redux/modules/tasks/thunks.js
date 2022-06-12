import {
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
