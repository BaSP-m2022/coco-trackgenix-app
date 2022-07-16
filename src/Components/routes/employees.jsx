import { lazy } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from 'Components/Layout';

const EmployeesTimeSheet = lazy(() => import('Components/TimeSheets/index'));
const EmployeesTimeSheetAdd = lazy(() => import('Components/TimeSheets/TimeSheetsFormAdd'));
const EmployeesTimeSheetEdit = lazy(() => import('Components/TimeSheets/TimeSheetsFormEdit'));
const EmployeeProfile = lazy(() => import('Components/Employees/index'));
const EmployeeProfileEdit = lazy(() =>
  import('Components/Employees/FormEmployee/FormEmployeeEdit')
);
const EmployeeProject = lazy(() => import('Components/Projects/index'));
const EmployeeProjectEdit = lazy(() => import('Components/Projects/AddNew'));

const EmployeeRoutes = [
  { path: '/employee/projects', name: 'Projects' },
  { path: '/employee/timesheets', name: 'Time-sheets' },
  { path: '/employee/profile', name: 'Personal information' }
];

const EmployeesRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <Layout routes={EmployeeRoutes}>
      <Switch>
        <Route exact path={`${url}/timesheet`} component={EmployeesTimeSheet} />
        <Route exact path={`${url}/timesheet/add`} component={EmployeesTimeSheetAdd} />
        <Route exact path={`${url}/timesheet/edit`} component={EmployeesTimeSheetEdit} />
        <Route exact path={`${url}/profile`} component={EmployeeProfile} />
        <Route exact path={`${url}/profile/edit`} component={EmployeeProfileEdit} />
        <Route exact path={`${url}/project`} component={EmployeeProject} />
        <Route exact path={`${url}/project/edit`} component={EmployeeProjectEdit} />
        <Redirect to={`${url}/`} />
      </Switch>
    </Layout>
  );
};

export default EmployeesRoutes;
