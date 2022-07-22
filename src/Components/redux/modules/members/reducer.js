import {
  ADD_MEMBER_ERROR,
  ADD_MEMBER_PENDING,
  ADD_MEMBER_SUCCESS,
  EDIT_MEMBER_ERROR,
  EDIT_MEMBER_PENDING,
  EDIT_MEMBER_SUCCESS,
  GET_MEMBER_ERROR,
  GET_MEMBER_PENDING,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_BY_ID_ERROR,
  GET_MEMBER_BY_ID_PENDING,
  GET_MEMBER_BY_ID_SUCCESS,
  DELETE_MEMBER_ERROR,
  DELETE_MEMBER_PENDING,
  DELETE_MEMBER_SUCCESS
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};

let updatedMember = [];

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case GET_MEMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_MEMBER_BY_ID_PENDING:
      return {
        ...state,
        error: initialState.error,
        selectedItem: initialState.selectedItem,
        isLoading: true
      };
    case GET_MEMBER_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isLoading: false
      };
    case GET_MEMBER_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_MEMBER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case ADD_MEMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_MEMBER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_MEMBER_SUCCESS:
      updatedMember = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isLoading: false,
        list: updatedMember
      };
    case EDIT_MEMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_MEMBER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((member) => member._id !== action.payload)
      };
    case DELETE_MEMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
