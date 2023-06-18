import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Components/Home';
import Members from '../Components/Members';
import MemberForm from '../Components/Members/Form';
import Trainers from '../Components/Trainers';
import TrainerForm from '../Components/Trainers/Form';


const routes = [
  {
    name: 'Home',
    path: '/admin'
  },
  {
    name: 'Members',
    path: '/admin/members'
  },
  {
    name: 'Trainers',
    path: '/admin/trainers'
  }
];

const AdminRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={routes}>
      <Switch>
        <Route exact path={`${url}/`} component={Home} />
        <Route exact path={`${url}/trainers`} component={Trainers} />
        <Route exact path={`${url}/trainers/form`} component={TrainerForm} />
        <Route exact path={`${url}/trainers/form/:id`} component={TrainerForm} />
        <Route exact path={`${url}/members`} component={Members} />
        <Route exact path={`${url}/members/form`} component={MemberForm} />
        <Route exact path={`${url}/members/form/:id`} component={MemberForm} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default AdminRoutes;