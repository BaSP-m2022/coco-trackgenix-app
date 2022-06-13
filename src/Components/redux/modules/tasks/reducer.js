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
        isFetching: true,
        error: initialState.error
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
        isFetching: true,
        error: initialState.error
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
        isFetching: true,
        error: initialState.error
      };

    case DELETE_TASKS_SUCCESS:
      return {
        ...state,
        list: [state.list.filter((task) => task._id !== action.payload)],
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
        isFetching: true,
        error: initialState.error
      };

    case EDIT_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: state.list.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        })
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
