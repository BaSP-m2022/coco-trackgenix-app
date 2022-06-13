import {
  GET_ADMINS_SUCCESS,
  GET_ADMINS_PENDING,
  GET_ADMINS_ERROR,
  POST_ADMINS_SUCCESS,
  POST_ADMINS_PENDING,
  POST_ADMINS_ERROR,
  PUT_ADMINS_SUCCESS,
  PUT_ADMINS_PENDING,
  PUT_ADMINS_ERROR,
  DELETE_ADMINS_SUCCESS,
  DELETE_ADMINS_PENDING,
  DELETE_ADMINS_ERROR
} from './constants';

export const getAdminsSuccess = (data) => {
  return {
    type: GET_ADMINS_SUCCESS,
    payload: data
  };
};

export const getAdminsPending = () => {
  return {
    type: GET_ADMINS_PENDING
  };
};

export const getAdminsError = (error) => {
  return {
    type: GET_ADMINS_ERROR,
    payload: error
  };
};

export const PostAdminsSuccess = (data) => {
  return {
    type: POST_ADMINS_SUCCESS,
    payload: data
  };
};

export const PostAdminsPending = () => {
  return {
    type: POST_ADMINS_PENDING
  };
};

export const PostAdminsError = (error) => {
  return {
    type: POST_ADMINS_ERROR,
    payload: error
  };
};

export const PutAdminsSuccess = (data) => {
  return {
    type: PUT_ADMINS_SUCCESS,
    payload: data
  };
};

export const PutAdminsPending = () => {
  return {
    type: PUT_ADMINS_PENDING
  };
};

export const PutAdminsError = (error) => {
  return {
    type: PUT_ADMINS_ERROR,
    payload: error
  };
};

export const DeleteAdminsSuccess = (dataId) => {
  return {
    type: DELETE_ADMINS_SUCCESS,
    payload: dataId
  };
};

export const DeleteAdminsPending = () => {
  return {
    type: DELETE_ADMINS_PENDING
  };
};

export const DeleteAdminsError = (error) => {
  return {
    type: DELETE_ADMINS_ERROR,
    payload: error
  };
};
