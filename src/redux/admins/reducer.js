import {
  GET_ADMINS_PENDING,
  GET_ADMINS_SUCCESS,
  GET_ADMINS_ERROR,
  GET_ADMIN_BY_ID_PENDING,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_ERROR,
  POST_ADMIN_PENDING,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_ERROR,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR
} from './constants';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

const adminsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ADMINS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ADMINS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_ADMINS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_ADMIN_BY_ID_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ADMIN_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_ADMIN_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case POST_ADMIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case POST_ADMIN_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: ''
      };
    case POST_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_ADMIN_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        data: state.data.data?.filter((admin) => admin.id !== action.payload)
      };
    case DELETE_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default adminsReducer;
