import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Components/Home';


const routes = [
    {
        name: 'Home',
        path: '/member'
    }
];

const MemberRoutes = () => {
    const { url } = useRouteMatch();
    return (
        <Layout routes={routes}>
            <Switch>
                <Route exact path={`${url}/`} component={Home} />
                <Redirect to={`${url}/`} />
            </Switch>
        </Layout>
    );
};

export default MemberRoutes;