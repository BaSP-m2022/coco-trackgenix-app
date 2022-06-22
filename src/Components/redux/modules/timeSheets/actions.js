import {
  ADD_TIMESHEET_ERROR,
  ADD_TIMESHEET_PENDING,
  ADD_TIMESHEET_SUCCESS,
  EDIT_TIMESHEET_ERROR,
  EDIT_TIMESHEET_PENDING,
  EDIT_TIMESHEET_SUCCESS,
  GET_TIMESHEETS_ERROR,
  GET_TIMESHEETS_PENDING,
  GET_TIMESHEETS_SUCCESS,
  GET_TIMESHEET_BY_ID_ERROR,
  GET_TIMESHEET_BY_ID_PENDING,
  GET_TIMESHEET_BY_ID_SUCCESS,
  DELETE_TIMESHEET_ERROR,
  DELETE_TIMESHEET_PENDING,
  DELETE_TIMESHEET_SUCCESS
} from './constants';

export const getTimesheetsPending = () => ({
  type: GET_TIMESHEETS_PENDING
});
export const getTimesheetsSuccess = (timesheet) => ({
  type: GET_TIMESHEETS_SUCCESS,
  payload: timesheet
});
export const getTimesheetsError = (error) => ({
  type: GET_TIMESHEETS_ERROR,
  payload: error
});

export const getTimesheetByIdPending = () => ({
  type: GET_TIMESHEET_BY_ID_PENDING
});
export const getTimesheetByIdSuccess = (timesheet) => ({
  type: GET_TIMESHEET_BY_ID_SUCCESS,
  payload: timesheet
});
export const getTimesheetByIdError = (error) => ({
  type: GET_TIMESHEET_BY_ID_ERROR,
  payload: error
});

export const addTimesheetSuccess = (timesheet) => ({
  type: ADD_TIMESHEET_SUCCESS,
  payload: timesheet
});
export const addTimesheetPending = () => ({
  type: ADD_TIMESHEET_PENDING
});
export const addTimesheetError = (error) => ({
  type: ADD_TIMESHEET_ERROR,
  payload: error
});

export const editTimesheetSuccess = (timesheet) => ({
  type: EDIT_TIMESHEET_SUCCESS,
  payload: timesheet
});
export const editTimesheetPending = () => ({
  type: EDIT_TIMESHEET_PENDING
});
export const editTimesheetError = (error) => ({
  type: EDIT_TIMESHEET_ERROR,
  payload: error
});

export const deleteTimesheetSuccess = (timesheet) => ({
  type: DELETE_TIMESHEET_SUCCESS,
  payload: timesheet
});
export const deleteTimesheetPending = () => ({
  type: DELETE_TIMESHEET_PENDING
});
export const deleteTimesheetError = (error) => ({
  type: DELETE_TIMESHEET_ERROR,
  payload: error
});
