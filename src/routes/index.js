import { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const SuperAdminRoutes = lazy(() => import('./superAdmin'));
const AdminRoutes = lazy(() => import('./admin'));
const MemberRoutes = lazy(() => import('./member'));
const TrainerRoutes = lazy(() => import('./trainer'));
const AuthRoutes = lazy(() => import('./auth'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <PrivateRoute path="/super-admin" role="SUPER_ADMIN" component={SuperAdminRoutes} />
          <PrivateRoute path="/admin" role="ADMIN" component={AdminRoutes} />
          <PrivateRoute path="/member" role="MEMBER" component={MemberRoutes} />
          <PrivateRoute path="/trainer" role="TRAINER" component={TrainerRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;