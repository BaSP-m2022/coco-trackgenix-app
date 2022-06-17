import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_BY_ID_PENDING,
  GET_TASKS_BY_ID_SUCCESS,
  GET_TASKS_BY_ID_ERROR,
  ADD_TASKS_PENDING,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR,
  DELETE_TASKS_PENDING,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_ERROR,
  EDIT_TASKS_PENDING,
  EDIT_TASKS_SUCCESS,
  EDIT_TASKS_ERROR,
  CLEAN_SELECTED_ITEM
} from './constants';

export const getTasksPending = () => {
  return {
    type: GET_TASKS_PENDING
  };
};

export const getTasksSuccess = (tasks) => {
  return {
    type: GET_TASKS_SUCCESS,
    payload: tasks
  };
};

export const getTasksError = (error) => {
  return {
    type: GET_TASKS_ERROR,
    payload: error
  };
};

export const getTasksByIdPending = () => {
  return {
    type: GET_TASKS_BY_ID_PENDING
  };
};

export const getTasksByIdSuccess = (task) => {
  return {
    type: GET_TASKS_BY_ID_SUCCESS,
    payload: task
  };
};

export const getTasksByIdError = (error) => {
  return {
    type: GET_TASKS_BY_ID_ERROR,
    payload: error
  };
};

export const addTasksPending = () => {
  return {
    type: ADD_TASKS_PENDING
  };
};

export const addTasksSuccess = (task) => {
  return {
    type: ADD_TASKS_SUCCESS,
    payload: task
  };
};

export const addTasksError = (error) => {
  return {
    type: ADD_TASKS_ERROR,
    payload: error
  };
};

export const deleteTasksPending = () => {
  return {
    type: DELETE_TASKS_PENDING
  };
};

export const deleteTasksSuccess = (taskId) => {
  return {
    type: DELETE_TASKS_SUCCESS,
    payload: taskId
  };
};

export const deleteTasksError = (error) => {
  return {
    type: DELETE_TASKS_ERROR,
    payload: error
  };
};

export const editTasksPending = () => {
  return {
    type: EDIT_TASKS_PENDING
  };
};

export const editTasksSuccess = (task) => {
  return {
    type: EDIT_TASKS_SUCCESS,
    payload: task
  };
};

export const editTasksError = (error) => {
  return {
    type: EDIT_TASKS_ERROR,
    payload: error
  };
};

export const cleanSelectedItem = () => {
  return {
    type: CLEAN_SELECTED_ITEM
  };
};
