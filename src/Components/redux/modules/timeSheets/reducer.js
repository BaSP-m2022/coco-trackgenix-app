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

const initialState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};

let updatedEmployee = [];

export const timesheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMESHEETS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case GET_TIMESHEETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case GET_TIMESHEETS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_TIMESHEET_BY_ID_PENDING:
      return {
        ...state,
        error: initialState.error,
        selectedItem: initialState.selectedItem,
        isLoading: true
      };
    case GET_TIMESHEET_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isLoading: false
      };
    case GET_TIMESHEET_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_TIMESHEET_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case ADD_TIMESHEET_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case ADD_TIMESHEET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_TIMESHEET_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case EDIT_TIMESHEET_SUCCESS:
      updatedEmployee = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isLoading: false,
        list: updatedEmployee
      };
    case EDIT_TIMESHEET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_TIMESHEET_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case DELETE_TIMESHEET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((timesheet) => timesheet._id !== action.payload)
      };
    case DELETE_TIMESHEET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
