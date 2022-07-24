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
const EmployeeProfile = lazy(() => import('Components/Employees/index'));
const EmployeeProfileEdit = lazy(() =>
  import('Components/Employees/FormEmployee/FormEmployeeEdit')
);

const AdminRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${url}/profile`} component={Admins} />
        <Route exact path={`${url}/profile/edit`} component={AdminFormEdit} />
        <Route exact path={`${url}/projects`} component={Projects} />
        <Route exact path={`${url}/projects/add`} component={AddNew} />
        <Route exact path={`${url}/projects/edit`} component={EditProject} />
        <Route exact path={`${url}/timesheets`} component={TimeSheets} />
        <Route exact path={`${url}/timesheets/add`} component={TimeSheetsFormAdd} />
        <Route exact path={`${url}/timesheets/edit`} component={TimeSheetsFormEdit} />
        <Route exact path={`${url}/employees`} component={EmployeeProfile} />
        <Route exact path={`${url}/employees/edit`} component={EmployeeProfileEdit} />
        <Redirect to={`${url}/projects`} />
      </Switch>
    </Layout>
  );
};

export default AdminRoutes;
