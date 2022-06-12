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

const initialState = {
  list: [],
  isFetching: false,
  error: ''
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case GET_TASKS_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case GET_TASKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };

    case GET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // ADD
    case ADD_TASKS_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case ADD_TASKS_SUCCESS:
      return {
        ...state,
        list: [state.list, action.payload],
        isFetching: false
      };

    case ADD_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // DELETE
    case DELETE_TASKS_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case DELETE_TASKS_SUCCESS:
      return {
        ...state,
        list: [state.list.filter((task) => task.id !== action.payload)],
        isFetching: false
      };

    case DELETE_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    //EDIT
    case EDIT_TASKS_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case EDIT_TASKS_SUCCESS:
      return {
        ...state,
        // list: [state.list.filter((task) => task.id !== action.payload)],
        isFetching: false
      };

    case EDIT_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
