import { GET_TASKS_FULFILLED } from './constants';

export const getTasksFullfilled = (tasks) => ({
  type: GET_TASKS_FULFILLED,
  payload: tasks
});
