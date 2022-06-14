import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_PENDING,
  ADD_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_PENDING,
  EDIT_EMPLOYEE_ERROR,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_PENDING,
  GET_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_PENDING,
  DELETE_EMPLOYEE_ERROR
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: ''
};

let updatedEmployee = [];

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case GET_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_EMPLOYEE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_EMPLOYEE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_EMPLOYEE_SUCCESS:
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
    case EDIT_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_EMPLOYEE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((employee) => employee._id !== action.payload)
      };
    case DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
