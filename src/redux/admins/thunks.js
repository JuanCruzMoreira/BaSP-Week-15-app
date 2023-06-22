import {
  getAdminsPending,
  getAdminsSuccess,
  getAdminsError,
  getAdminByIdPending,
  getAdminByIdSuccess,
  getAdminByIdError,
  postAdminPending,
  postAdminSuccess,
  postAdminError,
  deleteAdminPending,
  deleteAdminSuccess,
  deleteAdminError
} from './actions';

export const getAdmins = () => {
  return async (dispatch) => {
    dispatch(getAdminsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins`, {
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();
      dispatch(getAdminsSuccess(data.data));
      return data;
    } catch (error) {
      dispatch(getAdminsError(error));
    }
  };
};

export const getAdminById = (id) => {
  return async (dispatch) => {
    dispatch(getAdminByIdPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
        method: 'GET',
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();

      dispatch(getAdminByIdSuccess(data.data));
      return data;
    } catch (error) {
      dispatch(getAdminByIdError(error));
      throw error;
    }
  };
};

export const postAdmin = (body) => {
  return async (dispatch) => {
    dispatch(postAdminPending());
    try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins`, {
        method: 'POST',
        headers: {
          token: sessionStorage.getItem('token'),
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();

      dispatch(postAdminSuccess(data.data));
      return data;
    } catch (error) {
      console.error(error)
      return dispatch(postAdminError(error));
    }
  };
};

export const deleteAdmin = (id) => {
  return async (dispatch) => {
    dispatch(deleteAdminPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
        method: 'DELETE',
        headers: {
          token: sessionStorage.getItem('token')
        }
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(deleteAdminSuccess(id));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      dispatch(deleteAdminError(error));
      throw error;
    }
  };
};
