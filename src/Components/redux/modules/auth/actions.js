import { CLEAN_ERROR, LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from './constants';

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
export const cleanError = () => {
  return {
    type: CLEAN_ERROR
  };
};
