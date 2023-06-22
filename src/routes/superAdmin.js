import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Components/Home';
import Admins from '../Components/SuperAdmin/Admins';
import AdminForm from '../Components/SuperAdmin/Admins/Form';

const routes = [
  {
    name: 'Home',
    path: '/super-admin'
  },
  {
    name: 'Admins',
    path: '/super-admin/admins'
  }
];

const SuperAdminRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={routes}>
      <Switch>
        <Route exact path={`${url}/`} component={Home} />
        <Route exact path={`${url}/admins`} component={Admins} />
        <Route exact path={`${url}/admins/form`} component={AdminForm} />
        <Route exact path={`${url}/admins/form/:id`} component={AdminForm} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default SuperAdminRoutes;
