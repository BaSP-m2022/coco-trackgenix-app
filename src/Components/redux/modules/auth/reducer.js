import { CLEAN_ERROR, LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from './constants';

const initialState = {
  isLoading: true,
  authenticated: false,
  error: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: initialState.error
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        authenticated: true
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case CLEAN_ERROR: {
      return {
        ...state,
        error: initialState.error
      };
    }
    default: {
      return state;
    }
  }
};
