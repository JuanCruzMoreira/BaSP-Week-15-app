import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setAuthentication } from '../redux/auth/actions';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const dispatch = useDispatch();

  const role = sessionStorage.getItem('role');
  const token = sessionStorage.getItem('token');
  const email = sessionStorage.getItem('email');
  const error = useSelector((state) => state.auth?.error)

  useEffect(() => {
    if (token && role && email) {
      dispatch(
        setAuthentication({
          role,
          email
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if ((!role || role !== rest.role) && !error) {
          return <Redirect to={'/auth/not-allowed'} />;
        }
        if (token && role === rest.role) {
          return <RouteComponent {...routeProps} />;
        }
        return <Redirect to={'/auth/login'} />;
      }}
    />
  );
};

export default PrivateRoute;