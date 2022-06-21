import {
  GET_PROJECT_SUCCESS,
  GET_PROJECT_PENDING,
  GET_PROJECT_ERROR,
  POST_PROJECT_SUCCESS,
  POST_PROJECT_PENDING,
  POST_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_ERROR
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};

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
    case POST_PROJECT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false,
        isAdded: true
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
