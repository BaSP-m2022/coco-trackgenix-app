import {
  GET_ADMIN_SUCCESS,
  GET_ADMIN_PENDING,
  GET_ADMIN_ERROR,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_PENDING,
  POST_ADMIN_ERROR,
  PUT_ADMIN_SUCCESS,
  PUT_ADMIN_PENDING,
  PUT_ADMIN_ERROR,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_ERROR
} from './constants';

export const getAdminSuccess = (admin) => {
  return {
    type: GET_ADMIN_SUCCESS,
    payload: admin
  };
};

export const getAdminPending = () => {
  return {
    type: GET_ADMIN_PENDING
  };
};

export const getAdminError = (error) => {
  return {
    type: GET_ADMIN_ERROR,
    payload: error
  };
};

export const PostAdminSuccess = (admin) => {
  return {
    type: POST_ADMIN_SUCCESS,
    payload: admin
  };
};

export const PostAdminPending = () => {
  return {
    type: POST_ADMIN_PENDING
  };
};

export const PostAdminError = (error) => {
  return {
    type: POST_ADMIN_ERROR,
    payload: error
  };
};

export const PutAdminsSuccess = (admin) => {
  return {
    type: PUT_ADMIN_SUCCESS,
    payload: admin
  };
};

export const PutAdminsPending = () => {
  return {
    type: PUT_ADMIN_PENDING
  };
};

export const PutAdminError = (error) => {
  return {
    type: PUT_ADMIN_ERROR,
    payload: error
  };
};

export const DeleteAdminSuccess = (admin) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: admin
  };
};

export const DeleteAdminPending = () => {
  return {
    type: DELETE_ADMIN_PENDING
  };
};

export const DeleteAdminError = (error) => {
  return {
    type: DELETE_ADMIN_ERROR,
    payload: error
  };
};
