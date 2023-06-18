import {
  loginError,
  loginPending,
  loginSuccess,
  logoutError,
  logoutPending,
  logoutSuccess
  // signUpError,
  // signUpPending,
  // signUpSuccess
} from './actions';

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(loginPending());
    return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.message);
        }
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('role', response.data.role);
        sessionStorage.setItem('email', response.data.email);
        return dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(loginError(error.toString()));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutPending());
    return fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        token: sessionStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.message);
        }
        sessionStorage.clear();
        return dispatch(logoutSuccess());
      })
      .catch((error) => {
        return dispatch(logoutError(error.toString()));
      });
  };
};

// export const signUpEmployee = (data) => {
//   return (dispatch) => {
//     dispatch(signUpPending());
//     return fetch(`${process.env.REACT_APP_API_URL}/employees`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(async (response) => {
//         if (response.error) {
//           throw new Error(response.message);
//         }
//         return dispatch(signUpSuccess());
//       })
//       .catch((error) => {
//         return dispatch(signUpError(error.toString()));
//       });
//   };
// };