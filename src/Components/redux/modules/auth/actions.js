import {
  CLEAN_ERROR,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  SET_CURRENT_ROUTES,
  SET_CURRENT_USR_EMAIL
} from './constants';

export const loginPending = () => {
  return {
    type: LOGIN_PENDING
  };
};
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};
export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
};

export const logoutPending = () => {
  return {
    type: LOGOUT_PENDING
  };
};
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: error
  };
};

export const cleanError = () => {
  return {
    type: CLEAN_ERROR
  };
};

export const currentRoutes = (routes) => {
  return {
    type: SET_CURRENT_ROUTES,
    payload: routes
  };
};

export const currentUserEmail = (email) => {
  return {
    type: SET_CURRENT_USR_EMAIL,
    payload: email
  };
};
