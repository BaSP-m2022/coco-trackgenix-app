import { lazy } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from 'Components/Layout';

const Admins = lazy(() => import('Components/Admins/index'));
const AdminForm = lazy(() => import('Components/Admins/AdminForm/AdminForm'));

const SuperAdminRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={`${url}/`} component={Admins} />
        <Route exact path={`${url}/add-admin`} component={AdminForm} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default SuperAdminRoutes;
