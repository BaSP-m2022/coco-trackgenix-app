import {
  GET_SUPERADMINS_PENDING,
  GET_SUPERADMINS_SUCCESS,
  GET_SUPERADMINS_ERROR,
  ADD_SUPERADMINS_PENDING,
  ADD_SUPERADMINS_SUCCESS,
  ADD_SUPERADMINS_ERROR,
  DELETE_SUPERADMINS_PENDING,
  DELETE_SUPERADMINS_SUCCESS,
  DELETE_SUPERADMINS_ERROR,
  EDIT_SUPERADMINS_PENDING,
  EDIT_SUPERADMINS_SUCCESS,
  EDIT_SUPERADMINS_ERROR,
  GET_SUPERADMIN_BY_ID_PENDING,
  GET_SUPERADMIN_BY_ID_SUCCESS,
  GET_SUPERADMIN_BY_ID_ERROR
} from './constants';

const previousState = {
  list: [],
  isLoading: false,
  error: '',
  selectedItem: {}
};
// let editSuperAdmin = [];

export const superAdminsReducer = (state = previousState, action) => {
  switch (action.type) {
    case GET_SUPERADMINS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: previousState.error
      };
    case GET_SUPERADMINS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    case GET_SUPERADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case GET_SUPERADMIN_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true,
        error: previousState.error,
        selectedItem: previousState.selectedItem
      };

    case GET_SUPERADMIN_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
        isLoading: false
      };

    case GET_SUPERADMIN_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case ADD_SUPERADMINS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: previousState.error
      };
    case ADD_SUPERADMINS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false
      };
    case ADD_SUPERADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_SUPERADMINS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: previousState.error
      };
    case DELETE_SUPERADMINS_SUCCESS:
      return {
        ...state,
        list: state.list.filter((superAdmin) => superAdmin._id !== action.payload),
        isLoading: false
      };
    case DELETE_SUPERADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case EDIT_SUPERADMINS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: previousState.error
      };
    case EDIT_SUPERADMINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((updatedSuperAdmin) => {
          if (updatedSuperAdmin._id === action.payload._id) {
            return action.payload;
          }
          return updatedSuperAdmin;
        })
      };
    case EDIT_SUPERADMINS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: {
      return state;
    }
  }
};
