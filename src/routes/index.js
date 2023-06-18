import { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const AdminRoutes = lazy(() => import('./admin'));
const SuperAdminRoutes = lazy(() => import('./superAdmin'));
const AuthRoutes = lazy(() => import('./auth'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <PrivateRoute path="/admin" role="ADMIN" component={AdminRoutes} />
          <PrivateRoute path="/super-admin" role="SUPER_ADMIN" component={SuperAdminRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;