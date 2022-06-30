import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, useRouteMatch } from 'react-router-dom';
import PrivateRoute from 'Components/routes/PrivateRoute';
import AdminForm from 'Components/Admins/AdminForm/AdminForm';
import Layout from 'Components/Layout/';

const Admins = lazy(() => import('Components/Admins/index'));
const AdminFormEdit = lazy(() => import('Components/Admins/AdminForm/AdminFormEdit'));
const SuperAdmins = lazy(() => import('Components/SuperAdmins/index'));
const SuperAdminFormEdit = lazy(() => import('Components/SuperAdmins/SuperAdminFormEdit'));
const SuperAdminsForm = lazy(() => import('Components/SuperAdmins/SuperAdminForm'));
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
const TimeSheets = lazy(() => import('Components/TimeSheets'));
const TimeSheetsFormAdd = lazy(() => import('Components/TimeSheets/TimeSheetsFormAdd'));
const TimeSheetsFormEdit = lazy(() => import('Components/TimeSheets/TimeSheetsFormEdit'));
const Tasks = lazy(() => import('Components/Tasks/index'));
const TaskFormEdit = lazy(() => import('Components/Tasks/TaskForm/TaskFormEdit'));
const TaskForm = lazy(() => import('Components/Tasks/TaskForm/TaskForm'));

const adminRoutes = [
  { path: '/admins', name: 'Admins' },
  { path: '/admins/super-admins', name: 'Super-admins' },
  { path: '/admins/employees', name: 'Employees' },
  { path: '/admins/projects', name: 'Projects' },
  { path: '/admins/time-sheets', name: 'Time-sheets' },
  { path: '/admins/tasks', name: 'Tasks' }
];

const AdminRoutes = () => {
  const { url } = useRouteMatch();

  'Admin routes:', AdminRoutes;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout routes={adminRoutes}></Layout>
      <Switch>
        <PrivateRoute path={`${url}/admins`} component={Admins} />
        <PrivateRoute path={`${url}/admins/add`} component={AdminForm} />
        <PrivateRoute path={`${url}/admins/edit`} component={AdminFormEdit} />
        <PrivateRoute path={`${url}/super-admins`} component={SuperAdmins} />
        <PrivateRoute path={`${url}/super-admins/Form`} component={SuperAdminFormEdit} />
        <PrivateRoute path={`${url}/super-admins/formAdd`} component={SuperAdminsForm} />
        <PrivateRoute path={`${url}/employee`} component={Employees} />
        <PrivateRoute path={`${url}/employee/timesheet`} component={EmployeesTimesheet} />
        <PrivateRoute path={`${url}/employee/timesheetAdd`} component={EmployeesTimesheetAdd} />
        <PrivateRoute path={`${url}/employee/timesheetEdit`} component={EmployeesTimesheetEdit} />
        <PrivateRoute path={`${url}/employee/profile`} component={EmployeesProfile} />
        <PrivateRoute path={`${url}/employee/projects`} component={EmployeesProject} />
        <PrivateRoute path={`${url}/employee/profile/edit`} component={FormEmployeeEdit} />
        <PrivateRoute path={`${url}/projects`} component={Projects} />
        <PrivateRoute path={`${url}/projects/add`} component={AddNew} />
        <PrivateRoute path={`${url}/projects/edit`} component={EditProject} />
        <PrivateRoute path={`${url}time-sheets`} component={TimeSheets} />
        <PrivateRoute path={`${url}time-sheets/add`} component={TimeSheetsFormAdd} />
        <PrivateRoute path={`${url}/time-sheets/edit`} component={TimeSheetsFormEdit} />
        <PrivateRoute path={`${url}/tasks`} component={Tasks} />
        <PrivateRoute path={`${url}/tasks/add`} component={TaskForm} />
        <PrivateRoute path={`${url}/tasks/edit`} component={TaskFormEdit} />
        <Redirect to={`${url}/admins`} />
      </Switch>
      <Layout />
    </Suspense>
  );
};

export default AdminRoutes;
