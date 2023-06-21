import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
  GET_MEMBER_BY_ID_PENDING,
  GET_MEMBER_BY_ID_SUCCESS,
  GET_MEMBER_BY_ID_ERROR,
  POST_MEMBER_PENDING,
  POST_MEMBER_SUCCESS,
  POST_MEMBER_ERROR,
  DELETE_MEMBER_PENDING,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_ERROR

} from './constants';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

const membersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEMBERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_MEMBER_BY_ID_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_MEMBER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_MEMBER_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case POST_MEMBER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_MEMBER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: ''
      };
    case POST_MEMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_MEMBER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        data: state.data?.filter((member) => member.id !== action.payload)
      };
    case DELETE_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default membersReducer;
