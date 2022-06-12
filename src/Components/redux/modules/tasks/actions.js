import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  ADD_TASKS_PENDING,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR,
  DELETE_TASKS_PENDING,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_ERROR,
  EDIT_TASKS_PENDING,
  EDIT_TASKS_SUCCESS,
  EDIT_TASKS_ERROR
} from './constants';

export const getTasksPending = () => {
  return {
    type: GET_TASKS_PENDING
  };
};

export const getTasksSuccess = (data) => {
  return {
    type: GET_TASKS_SUCCESS,
    payload: data
  };
};

export const getTasksError = (error) => {
  return {
    type: GET_TASKS_ERROR,
    payload: error
  };
};

// ADD

export const addTasksPending = () => {
  return {
    type: ADD_TASKS_PENDING
  };
};

export const addTasksSuccess = (data) => {
  return {
    type: ADD_TASKS_SUCCESS,
    payload: data
  };
};

export const addTasksError = (error) => {
  return {
    type: ADD_TASKS_ERROR,
    payload: error
  };
};

// DELETE

export const deleteTasksPending = () => {
  return {
    type: DELETE_TASKS_PENDING
  };
};

export const deleteTasksSuccess = (dataId) => {
  return {
    type: DELETE_TASKS_SUCCESS,
    payload: dataId
  };
};

export const deleteTasksError = (error) => {
  return {
    type: DELETE_TASKS_ERROR,
    payload: error
  };
};

// EDIT

export const editTasksPending = () => {
  return {
    type: EDIT_TASKS_PENDING
  };
};

export const editTasksSuccess = (dataId) => {
  return {
    type: EDIT_TASKS_SUCCESS,
    payload: dataId
  };
};

export const editTasksError = (error) => {
  return {
    type: EDIT_TASKS_ERROR,
    payload: error
  };
};
