import {
  GET_ADMINS_SUCCESS,
  GET_ADMINS_PENDING,
  GET_ADMINS_ERROR,
  POST_ADMINS_SUCCESS,
  POST_ADMINS_PENDING,
  POST_ADMINS_ERROR,
  PUT_ADMINS_SUCCESS,
  PUT_ADMINS_PENDING,
  PUT_ADMINS_ERROR,
  DELETE_ADMINS_SUCCESS,
  DELETE_ADMINS_PENDING,
  DELETE_ADMINS_ERROR
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: ''
};

export const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMINS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    case GET_ADMINS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_ADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case POST_ADMINS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case POST_ADMINS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case POST_ADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PUT_ADMINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        })
      };
    case PUT_ADMINS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case PUT_ADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_ADMINS_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item._id !== action.payload),
        isLoading: false
      };
    case DELETE_ADMINS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_ADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
