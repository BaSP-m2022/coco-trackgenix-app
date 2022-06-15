import {
  GET_ADMIN_SUCCESS,
  GET_ADMIN_PENDING,
  GET_ADMIN_ERROR,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_PENDING,
  POST_ADMIN_ERROR,
  PUT_ADMIN_SUCCESS,
  PUT_ADMIN_PENDING,
  PUT_ADMIN_ERROR,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_ERROR,
  GET_BY_ID_ADMIN_SUCCESS,
  GET_BY_ID_ADMIN_PENDING,
  GET_BY_ID_ADMIN_ERROR
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};

let editAdmin = [];

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    case GET_ADMIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case GET_ADMIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_BY_ID_ADMIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
        selectedItem: initialState.selectedItem
      };

    case GET_BY_ID_ADMIN_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isLoading: false
      };

    case GET_BY_ID_ADMIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case POST_ADMIN_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case POST_ADMIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case POST_ADMIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PUT_ADMIN_SUCCESS:
      editAdmin = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isLoading: false,
        list: editAdmin
      };
    case PUT_ADMIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case PUT_ADMIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item._id !== action.payload),
        isLoading: false
      };
    case DELETE_ADMIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: initialState.error
      };
    case DELETE_ADMIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
