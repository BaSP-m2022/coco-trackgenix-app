import {
  GET_PROJECT_SUCCESS,
  GET_PROJECT_PENDING,
  GET_PROJECT_ERROR,
  POST_PROJECT_SUCCESS,
  POST_PROJECT_PENDING,
  POST_PROJECT_ERROR,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_PENDING,
  PUT_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_ERROR
} from './constants';

export const getProjectSuccess = (project) => {
  return {
    type: GET_PROJECT_SUCCESS,
    payload: project
  };
};
export const getProjectPending = () => {
  return {
    type: GET_PROJECT_PENDING
  };
};
export const getProjectError = (error) => {
  return {
    type: GET_PROJECT_ERROR,
    payload: error
  };
};
export const PostProjectSuccess = (project) => {
  return {
    type: POST_PROJECT_SUCCESS,
    payload: project
  };
};
export const PostProjectPending = () => {
  return {
    type: POST_PROJECT_PENDING
  };
};
export const PostProjectError = (error) => {
  return {
    type: POST_PROJECT_ERROR,
    payload: error
  };
};
export const PutProjectsSuccess = (project) => {
  return {
    type: PUT_PROJECT_SUCCESS,
    payload: project
  };
};
export const PutProjectPending = () => {
  return {
    type: PUT_PROJECT_PENDING
  };
};
export const PutProjectError = (error) => {
  return {
    type: PUT_PROJECT_ERROR,
    payload: error
  };
};
export const DeleteProjectSuccess = (project) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    payload: project
  };
};
export const DeleteProjectPending = () => {
  return {
    type: DELETE_PROJECT_PENDING
  };
};
export const DeleteProjectError = (error) => {
  return {
    type: DELETE_PROJECT_ERROR,
    payload: error
  };
};
