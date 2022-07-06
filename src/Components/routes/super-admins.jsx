// const SuperAdmins = lazy(() => import('Components/SuperAdmins/index'));
// const SuperAdminFormEdit = lazy(() => import('Components/SuperAdmins/SuperAdminFormEdit'));
// const SuperAdminsForm = lazy(() => import('Components/SuperAdmins/SuperAdminForm'));

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
        <Route exact path={`${url}/admins`} component={Admins} />
        <Route exact path={`${url}/admins/add`} component={AdminForm} />
        <Redirect to={`${url}/admins`} />
      </Switch>
    </Layout>
  );
};

export default SuperAdminRoutes;
