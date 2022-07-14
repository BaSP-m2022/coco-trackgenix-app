import React, { lazy } from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import Layout from 'Components/Layout';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Admins = lazy(() => import('Components/Admins/index'));
const AdminFormEdit = lazy(() => import('Components/Admins/AdminForm/AdminFormEdit'));
const Projects = lazy(() => import('Components/Projects'));
const AddNew = lazy(() => import('Components/Projects/AddNew'));
const EditProject = lazy(() => import('Components/Projects/EditProject'));
const TimeSheets = lazy(() => import('Components/TimeSheets/index'));
const TimeSheetsFormAdd = lazy(() => import('Components/TimeSheets/TimeSheetsFormAdd'));
const TimeSheetsFormEdit = lazy(() => import('Components/TimeSheets/TimeSheetsFormEdit'));

const adminRoutes = [
  { path: '/admin/projects', name: 'Projects' },
  { path: '/admin/timesheets', name: 'Time-sheets' },
  { path: '/admin/profile', name: 'Personal information' }
];

const AdminRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={adminRoutes}>
      <Switch>
        <Route exact path={`${url}/profile`} component={Admins} />
        <Route exact path={`${url}/profile/edit`} component={AdminFormEdit} />
        <Route exact path={`${url}/projects`} component={Projects} />
        <Route exact path={`${url}/projects/add`} component={AddNew} />
        <Route exact path={`${url}/projects/edit`} component={EditProject} />
        <Route exact path={`${url}/timesheets`} component={TimeSheets} />
        <Route exact path={`${url}/timesheets/add`} component={TimeSheetsFormAdd} />
        <Route exact path={`${url}/timesheets/edit`} component={TimeSheetsFormEdit} />
        <Redirect to={`${url}/projects`} />
      </Switch>
    </Layout>
  );
};

export default AdminRoutes;
