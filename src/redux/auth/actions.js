import {
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_PENDING,
  SIGN_UP_SUCCESS,
  SET_AUTHENTICATION
} from './constants';

export const loginPending = () => {
  return {
    type: LOGIN_PENDING
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
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

export const signUpPending = () => {
  return {
    type: SIGN_UP_PENDING
  };
};

export const signUpSuccess = (data) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: data
  };
};

export const signUpError = (error) => {
  return {
    type: SIGN_UP_ERROR,
    payload: error
  };
};

export const setAuthentication = (role) => {
  return {
    type: SET_AUTHENTICATION,
    payload: {
      role
    }
  };
};