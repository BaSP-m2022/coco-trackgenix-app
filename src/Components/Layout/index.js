import Header from '../Header/index';
import Footer from '../Footer/index';
import Admins from '../Admins/index';
import AdminForm from '../Admins/AdminForm/AdminForm';
import SuperAdmins from '../SuperAdmins/index';
import Home from '../Home/Homepage';
import styles from './layout.module.css';
import Employees from '../Employees/index';
import Projects from '../Projects';
import AddNew from '../Projects/AddNew';
import TimeSheets from '../TimeSheets';
import Tasks from '../Tasks/index';
import TaskForm from '../Tasks/TaskForm/TaskForm';
import EditProject from '../Projects/EditProject';
import SuperAdminFormEdit from '../SuperAdmins/SuperAdminFormEdit';
import SuperAdminForm from '../SuperAdmins/SuperAdminForm';
import FormEmployee from '../Employees/FormEmployee/FormEmployee';
import FormEmployeeEdit from '../Employees/FormEmployee/FormEmployeeEdit';
import { Switch, Route, Redirect } from 'react-router-dom';

function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/admins" component={Admins} />
        <Route path="/admins/add" component={AdminForm} />
        <Route exact path="/super-admins" component={SuperAdmins} />
        <Route path="/super-admins/Form" component={SuperAdminFormEdit} />
        <Route path="/super-admins/formAdd" component={SuperAdminForm} />
        <Route exact path="/employees" component={Employees} />
        <Route path="/employees/form" component={FormEmployee} />
        <Route path="/employees/formEdit" component={FormEmployeeEdit} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/add" component={AddNew} />
        <Route path="/projects/edit" component={EditProject} />
        <Route exact path="/time-sheets" component={TimeSheets} />
        <Route exact path="/tasks" component={Tasks} />
        <Route path="/tasks/add" component={TaskForm} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Layout;
