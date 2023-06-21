import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { useDispatch } from 'react-redux';
import { tokenListener } from '../helper/firebase';
import { getAuth } from '../redux/auth/thunks';

const AdminRoutes = lazy(() => import('./admin'));
const SuperAdminRoutes = lazy(() => import('./superAdmin'));
const AuthRoutes = lazy(() => import('./auth'));
const MemberRoutes = lazy(() => import('./member'))

const Routes = () => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    tokenListener();
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getAuth(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <PrivateRoute path="/admin" role="ADMIN" component={AdminRoutes} />
          <PrivateRoute path="/member" role="MEMBER" component={MemberRoutes} />
          <PrivateRoute path="/super-admin" role="SUPER_ADMIN" component={SuperAdminRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;