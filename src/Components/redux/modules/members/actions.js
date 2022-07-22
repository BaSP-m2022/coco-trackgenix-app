import {
  ADD_MEMBER_ERROR,
  ADD_MEMBER_PENDING,
  ADD_MEMBER_SUCCESS,
  EDIT_MEMBER_ERROR,
  EDIT_MEMBER_PENDING,
  EDIT_MEMBER_SUCCESS,
  GET_MEMBER_ERROR,
  GET_MEMBER_PENDING,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_BY_ID_ERROR,
  GET_MEMBER_BY_ID_PENDING,
  GET_MEMBER_BY_ID_SUCCESS,
  DELETE_MEMBER_ERROR,
  DELETE_MEMBER_PENDING,
  DELETE_MEMBER_SUCCESS
} from './constants';

export const getMEMBERPending = () => ({
  type: GET_MEMBER_PENDING
});
export const getMEMBERSuccess = (member) => ({
  type: GET_MEMBER_SUCCESS,
  payload: member
});
export const getMEMBERbyIdPending = () => ({
  type: GET_MEMBER_BY_ID_PENDING
});
export const getMEMBERbyIdSuccess = (member) => ({
  type: GET_MEMBER_BY_ID_SUCCESS,
  payload: member
});
export const editMEMBERerror = (error) => ({
  type: EDIT_MEMBER_ERROR,
  payload: error
});
export const addMEMBERSuccess = (member) => ({
  type: ADD_MEMBER_SUCCESS,
  payload: member
});
export const addMEMBERPending = () => ({
  type: ADD_MEMBER_PENDING
});
export const addEMEMBERerror = (error) => ({
  type: ADD_MEMBER_ERROR,
  payload: error
});
export const editMEMBERSuccess = (member) => ({
  type: EDIT_MEMBER_SUCCESS,
  payload: member
});
export const editMEMBERPending = () => ({
  type: EDIT_MEMBER_PENDING
});
export const getMEMBERerror = (error) => ({
  type: GET_MEMBER_ERROR,
  payload: error
});
export const getMEMBERbyIdError = (error) => ({
  type: GET_MEMBER_BY_ID_ERROR,
  payload: error
});
export const deleteMEMBERSuccess = (member) => ({
  type: DELETE_MEMBER_SUCCESS,
  payload: member
});
export const deleteMEMBERPending = () => ({
  type: DELETE_MEMBER_PENDING
});
export const deleteMEMBEREerror = (error) => ({
  type: DELETE_MEMBER_ERROR,
  payload: error
});
