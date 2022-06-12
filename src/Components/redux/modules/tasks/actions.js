import { ADD_TASKS_FULFILLED, GET_TASKS_FULFILLED } from './constants';

export const getTasksFullfilled = (tasks) => ({
  type: GET_TASKS_FULFILLED,
  payload: tasks
});

export const addTasksFullfilled = (task) => ({
  type: ADD_TASKS_FULFILLED,
  payload: task
});
