import {
  ADD_EMPLOYEE_ERROR,
  ADD_EMPLOYEE_PENDING,
  ADD_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE_PENDING,
  EDIT_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  GET_EMPLOYEE_PENDING,
  GET_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_PENDING,
  DELETE_EMPLOYEE_SUCCESS
} from './constants';

export const getEMPLOYEEPending = () => ({
  type: GET_EMPLOYEE_PENDING
});
export const getEMPLOYEESuccess = (employee) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: employee
});
export const editEMPLOYEEerror = (error) => ({
  type: EDIT_EMPLOYEE_ERROR,
  payload: error
});
export const addEMPLOYEESuccess = (employee) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: employee
});
export const addEMPLOYEEPending = () => ({
  type: ADD_EMPLOYEE_PENDING
});
export const addEMPLOYEEerror = (error) => ({
  type: ADD_EMPLOYEE_ERROR,
  payload: error
});
export const editEMPLOYEESuccess = (employee) => ({
  type: EDIT_EMPLOYEE_SUCCESS,
  payload: employee
});
export const editEMPLOYEEPending = () => ({
  type: EDIT_EMPLOYEE_PENDING
});
export const getEMPLOYEEerror = (error) => ({
  type: GET_EMPLOYEE_ERROR,
  payload: error
});
export const deleteEMPLOYEESuccess = (employee) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: employee
});
export const deleteEMPLOYEEPending = () => ({
  type: DELETE_EMPLOYEE_PENDING
});
export const deleteEMPLOYEEerror = (error) => ({
  type: DELETE_EMPLOYEE_ERROR,
  payload: error
});
