import {
  GET_ADMINS_PENDING,
  GET_ADMINS_SUCCESS,
  GET_ADMINS_ERROR,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR,
  GET_ADMIN_BY_ID_PENDING,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_ERROR,
  POST_ADMIN_PENDING,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_ERROR
} from './constants';

export const getAdminsPending = () => {
  return {
    type: GET_ADMINS_PENDING
  };
};

export const getAdminsSuccess = (data) => {
  return {
    type: GET_ADMINS_SUCCESS,
    payload: data
  };
};

export const getAdminsError = (error) => {
  return {
    type: GET_ADMINS_ERROR,
    payload: error
  };
};

export const deleteAdminPending = () => {
  return {
    type: DELETE_ADMIN_PENDING
  };
};

export const deleteAdminSuccess = (id) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: id
  };
};

export const deleteAdminError = (error) => {
  return {
    type: DELETE_ADMIN_ERROR,
    payload: error
  };
};

export const getAdminByIdPending = () => {
  return {
    type: GET_ADMIN_BY_ID_PENDING
  };
};

export const getAdminByIdSuccess = (data) => {
  return {
    type: GET_ADMIN_BY_ID_SUCCESS,
    payload: data
  };
};

export const getAdminByIdError = (error) => {
  return {
    type: GET_ADMIN_BY_ID_ERROR,
    payload: error
  };
};

export const postAdminPending = () => {
  return {
    type: POST_ADMIN_PENDING
  };
};

export const postAdminSuccess = (data) => {
  return {
    type: POST_ADMIN_SUCCESS,
    payload: data
  };
};

export const postAdminError = (error) => {
  return {
    type: POST_ADMIN_ERROR,
    payload: error
  };
};
