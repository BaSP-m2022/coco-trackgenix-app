import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_BY_ID_PENDING,
  GET_TASKS_BY_ID_SUCCESS,
  GET_TASKS_BY_ID_ERROR,
  ADD_TASKS_PENDING,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR,
  DELETE_TASKS_PENDING,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_ERROR,
  EDIT_TASKS_PENDING,
  EDIT_TASKS_SUCCESS,
  EDIT_TASKS_ERROR,
  CLEAN_SELECTED_ITEM
} from './constants';

const initialState = {
  list: [],
  isFetching: false,
  error: '',
  selectedItem: {}
};

let editTask = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case GET_TASKS_BY_ID_PENDING:
      return {
        ...state,
        isFetching: true,
        error: initialState.error,
        selectedItem: initialState.selectedItem
      };

    case GET_TASKS_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isFetching: false
      };

    case GET_TASKS_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

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

    case EDIT_TASKS_PENDING:
      return {
        ...state,
        isFetching: true,
        error: initialState.error
      };

    case EDIT_TASKS_SUCCESS:
      editTask = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isFetching: false,
        list: editTask
      };

    case EDIT_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case CLEAN_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: initialState.selectedItem
      };

    default:
      return state;
  }
};
