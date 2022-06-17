import {
  GET_SUPERADMINS_PENDING,
  GET_SUPERADMINS_SUCCESS,
  GET_SUPERADMINS_ERROR,
  ADD_SUPERADMINS_SUCCESS,
  ADD_SUPERADMINS_PENDING,
  ADD_SUPERADMINS_ERROR,
  DELETE_SUPERADMINS_PENDING,
  DELETE_SUPERADMINS_SUCCESS,
  DELETE_SUPERADMINS_ERROR,
  EDIT_SUPERADMINS_PENDING,
  EDIT_SUPERADMINS_SUCCESS,
  EDIT_SUPERADMINS_ERROR,
  GET_SUPERADMIN_BY_ID_PENDING,
  GET_SUPERADMIN_BY_ID_SUCCESS,
  GET_SUPERADMIN_BY_ID_ERROR
} from './constants';

export const getSuperAdminsPending = () => {
  return {
    type: GET_SUPERADMINS_PENDING
  };
};

export const getSuperAdminsSuccess = (superadmin) => {
  return {
    type: GET_SUPERADMINS_SUCCESS,
    payload: superadmin
  };
};

export const getSuperAdminsError = (error) => {
  return {
    type: GET_SUPERADMINS_ERROR,
    payload: error
  };
};

export const addSuperAdminsPending = () => {
  return {
    type: ADD_SUPERADMINS_PENDING
  };
};

export const addSuperAdminsSuccess = (superadmin) => {
  return {
    type: ADD_SUPERADMINS_SUCCESS,
    payload: superadmin
  };
};

export const addSuperAdminsError = (error) => {
  return {
    type: ADD_SUPERADMINS_ERROR,
    payload: error
  };
};

export const deleteSuperAdminsPending = () => {
  return {
    type: DELETE_SUPERADMINS_PENDING
  };
};

export const deleteSuperAdminsSuccess = (superadmin) => {
  return {
    type: DELETE_SUPERADMINS_SUCCESS,
    payload: superadmin
  };
};

export const deleteSuperAdminsError = (error) => {
  return {
    type: DELETE_SUPERADMINS_ERROR,
    payload: error
  };
};

export const editSuperAdminsPending = () => {
  return {
    type: EDIT_SUPERADMINS_PENDING
  };
};

export const editSuperAdminsSuccess = (superadmin) => {
  return {
    type: EDIT_SUPERADMINS_SUCCESS,
    payload: superadmin
  };
};

export const editSuperAdminsError = (error) => {
  return {
    type: EDIT_SUPERADMINS_ERROR,
    payload: error
  };
};

export const getSuperAdminByIdPending = () => {
  return {
    type: GET_SUPERADMIN_BY_ID_PENDING
  };
};

export const getSuperAdminByIdSuccess = (superadmin) => {
  return {
    type: GET_SUPERADMIN_BY_ID_SUCCESS,
    payload: superadmin
  };
};

export const getSuperAdminByIdError = (error) => {
  return {
    type: GET_SUPERADMIN_BY_ID_ERROR,
    payload: error
  };
};
