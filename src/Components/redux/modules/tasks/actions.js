import { ADD_TASKS_FULFILLED, DELETE_TASKS_FULFILLED, GET_TASKS_FULFILLED } from './constants';

export const getTasksFulfilled = (tasks) => ({
  type: GET_TASKS_FULFILLED,
  payload: tasks
});

export const addTasksFulfilled = (task) => ({
  type: ADD_TASKS_FULFILLED,
  payload: task
});

export const DeleteTasksFulfilled = (taskId) => ({
  type: DELETE_TASKS_FULFILLED,
  payload: taskId
});
