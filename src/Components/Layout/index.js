import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from 'Components/Layout/layout.module.css';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Header from 'Components/Header/Header';
import NavBar from 'Components/NavBar/NavBar';
import Footer from 'Components/Footer/Footer';
import Home from 'Components/Home/Homepage';
import Navigation from 'Components/Navigation';
import AdminForm from 'Components/Admins/AdminForm/AdminForm';
import SuperAdminForm from 'Components/SuperAdmins/SuperAdminForm';
import FormEmployee from 'Components/Employees/FormEmployee/FormEmployee';
import TaskForm from 'Components/Tasks/TaskForm/TaskForm';
import Login from 'Components/Auth/Login/Login';

const Admins = lazy(() => import('Components/Admins/index'));
const AdminFormEdit = lazy(() => import('Components/Admins/AdminForm/AdminFormEdit'));
const SuperAdmins = lazy(() => import('Components/SuperAdmins/index'));
const SuperAdminFormEdit = lazy(() => import('Components/SuperAdmins/SuperAdminFormEdit'));
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

function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/admins" component={Admins} />
            <Route exact path="/admins/add" component={AdminForm} />
            <Route exact path="/admins/edit" component={AdminFormEdit} />
            <Route exact path="/super-admins" component={SuperAdmins} />
            <Route exact path="/super-admins/Form" component={SuperAdminFormEdit} />
            <Route exact path="/super-admins/formAdd" component={SuperAdminForm} />
            <Route exact path="/employee" component={Employees} />
            <Route exact path="/employee/timesheet" component={EmployeesTimesheet} />
            <Route exact path="/employee/timesheetAdd" component={EmployeesTimesheetAdd} />
            <Route exact path="/employee/timesheetEdit" component={EmployeesTimesheetEdit} />
            <Route exact path="/employee/profile" component={EmployeesProfile} />
            <Route exact path="/employee/projects" component={EmployeesProject} />
            <Route exact path="/employee/signup" component={FormEmployee} />
            <Route exact path="/employee/profile/edit" component={FormEmployeeEdit} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/add" component={AddNew} />
            <Route path="/projects/edit" component={EditProject} />
            <Route exact path="/time-sheets" component={TimeSheets} />
            <Route path="/time-sheets/add" component={TimeSheetsFormAdd} />
            <Route path="/time-sheets/edit" component={TimeSheetsFormEdit} />
            <Route exact path="/tasks" component={Tasks} />
            <Route path="/tasks/add" component={TaskForm} />
            <Route path="/tasks/edit" component={TaskFormEdit} />
            <Route path="/nav" component={Navigation} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home}>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default Layout;
