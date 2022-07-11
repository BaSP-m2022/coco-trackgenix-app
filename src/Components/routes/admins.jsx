import React, { lazy } from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import Layout from 'Components/Layout';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import tokenListener from 'Components/helper/firebase/index';

const Admins = lazy(() => import('Components/Admins/index'));
// const AdminForm = lazy(() => import('Components/Admins/AdminForm/AdminForm'));
const AdminFormEdit = lazy(() => import('Components/Admins/AdminForm/AdminFormEdit'));
const Employees = lazy(() => import('Components/Employees/index'));
const EmployeesTimesheet = lazy(() => import('Components/TimeSheets/index'));
const EmployeesTimesheetAdd = lazy(() => import('Components/TimeSheets/TimeSheetsFormAdd'));
const EmployeesTimesheetEdit = lazy(() => import('Components/TimeSheets/TimeSheetsFormEdit'));
const EmployeesProfile = lazy(() => import('Components/Employees/index'));
const EmployeesProject = lazy(() => import('Components/Projects/index'));
const FormEmployeeEdit = lazy(() => import('Components/Employees/FormEmployee/FormEmployeeEdit'));
const Projects = lazy(() => import('Components/Projects'));
const AddNew = lazy(() => import('Components/Projects/AddNew'));
const EditProject = lazy(() => import('Components/Projects/EditProject'));
const TimeSheets = lazy(() => import('Components/TimeSheets/index'));
const TimeSheetsFormAdd = lazy(() => import('Components/TimeSheets/TimeSheetsFormAdd'));
const TimeSheetsFormEdit = lazy(() => import('Components/TimeSheets/TimeSheetsFormEdit'));
// const Tasks = lazy(() => import('Components/Tasks/index'));
// const TaskFormEdit = lazy(() => import('Components/Tasks/TaskForm/TaskFormEdit'));
// const TaskForm = lazy(() => import('Components/Tasks/TaskForm/TaskForm'));

const adminRoutes = [
  //   { path: '/', name: 'Admins' },
  //   { path: '/admins/super-admins', name: 'Super-admins' },
  //   { path: '/admins/employees', name: 'Employees' },
  { path: '/admins/projects', name: 'Projects' },
  { path: '/admins/time-sheets', name: 'Time-sheets' },
  { path: '/admins/personal-information', name: 'Personal information' }
];

const AdminRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={adminRoutes}>
      <Switch>
        {/* <Route exact path={`${url}/admins`} component={Admins} />
        {/* <Route exact path={`${url}/admins/add`} component={AdminForm} /> */}
        <Route exact path={`${url}/personal-information`} component={Admins} />
        <Route exact path={`${url}/personal-information/edit`} component={AdminFormEdit} />
        <Route exact path={`${url}/employee`} component={Employees} />
        <Route exact path={`${url}/employee/timesheet`} component={EmployeesTimesheet} />
        <Route exact path={`${url}/employee/timesheetAdd`} component={EmployeesTimesheetAdd} />
        <Route exact path={`${url}/employee/timesheetEdit`} component={EmployeesTimesheetEdit} />
        <Route exact path={`${url}/employee/profile`} component={EmployeesProfile} />
        <Route exact path={`${url}/employee/projects`} component={EmployeesProject} />
        <Route exact path={`${url}/employee/profile/edit`} component={FormEmployeeEdit} />
        <Route exact path={`${url}/projects`} component={Projects} />
        <Route exact path={`${url}/projects/add`} component={AddNew} />
        <Route exact path={`${url}/projects/edit`} component={EditProject} />
        <Route exact path={`${url}/time-sheets`} component={TimeSheets} />
        <Route exact path={`${url}/time-sheets/add`} component={TimeSheetsFormAdd} />
        <Route exact path={`${url}/time-sheets/edit`} component={TimeSheetsFormEdit} />
        {/* <Route exact path={`${url}/tasks`} component={Tasks} />
        <Route exact path={`${url}/tasks/add`} component={TaskForm} />
        <Route exact path={`${url}/tasks/edit`} component={TaskFormEdit} /> */}
        <Redirect to={`${url}/projects`} />
      </Switch>
    </Layout>
  );
};

export default AdminRoutes;
