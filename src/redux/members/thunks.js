import {
  getMembersPending,
  getMembersSuccess,
  getMembersError,
  getMemberByIdPending,
  getMemberByIdSuccess,
  getMemberByIdError,
  postMemberPending,
  postMemberSuccess,
  postMemberError,
  deleteMemberPending,
  deleteMemberSuccess,
  deleteMemberError
} from './actions';

export const getMembers = () => {
  return async (dispatch) => {
    dispatch(getMembersPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/members`, {
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();
      dispatch(getMembersSuccess(data.data));
      return data;
    } catch (error) {
      dispatch(getMembersError(error));
    }
  };
};

export const getMemberById = (id) => {
  return async (dispatch) => {
    dispatch(getMemberByIdPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/members/${id}`, {
        method: 'GET',
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();
      dispatch(getMemberByIdSuccess(data));
      return data;
    } catch (error) {
      dispatch(getMemberByIdError(error));
      throw error;
    }
  };
};

export const deleteMember = (id) => {
  return async (dispatch) => {
    dispatch(deleteMemberPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/members/${id}`, {
        method: 'DELETE',
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(deleteMemberSuccess(id));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      dispatch(deleteMemberError(error));
      throw error;
    }
  };
};

export const postMember = (body) => {
  return async (dispatch) => {
    dispatch(postMemberPending());
    try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/members`, {
        method: 'POST',
        headers: {
          token: sessionStorage.getItem('token'),
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();

      dispatch(postMemberSuccess(data.data));
      return data;
    } catch (error) {
      console.error(error)
      return dispatch(postMemberError(error));
    }
  };
};
