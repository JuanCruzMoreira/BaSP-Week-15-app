import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from '../Components/Layout';
import Login from '../Components/Auth/Login';
// import SignUp from '../Components/Auth/SignUp';
import NotAllowed from '../Components/Auth/NotAllowed';

const routes = [
  {
    name: 'Login',
    path: '/auth/login'
  },
  {
    name: 'Sign Up',
    path: '/auth/sign-up'
  }
];

const AuthRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={routes}>
      <Switch>
        <Route path={`${url}/login`} component={Login} />
        {/* <Route path={`${url}/sign-up`} component={SignUp} /> */}
        <Route path={`${url}/not-allowed`} component={NotAllowed} />
        <Redirect to={`${url}/login`} />
      </Switch>
    </Layout>
  );
};

export default AuthRoutes;