import {
  GET_PROJECT_SUCCESS,
  GET_PROJECT_PENDING,
  GET_PROJECT_ERROR,
  POST_PROJECT_SUCCESS,
  POST_PROJECT_PENDING,
  POST_PROJECT_ERROR,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_PENDING,
  PUT_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_ERROR,
  GET_BY_ID_PROJECT_SUCCESS,
  GET_BY_ID_PROJECT_PENDING,
  GET_BY_ID_PROJECT_ERROR
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};

let editProject = [];

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    case GET_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case GET_PROJECT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_BY_ID_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
        selectedItem: initialState.selectedItem
      };

    case GET_BY_ID_PROJECT_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isLoading: false
      };

    case GET_BY_ID_PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case POST_PROJECT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case POST_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case POST_PROJECT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PUT_PROJECT_SUCCESS:
      editProject = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isLoading: false,
        list: editProject
      };
    case PUT_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case PUT_PROJECT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item._id !== action.payload),
        isLoading: false
      };
    case DELETE_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case DELETE_PROJECT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
