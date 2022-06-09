import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Admins from '../Admins/index';
import AdminForm from '../Admins/AdminForm/AdminForm';
import EditAdmin from '../Admins/Modal/AdminFormEdit';
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
import Navigation from '../Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/admins" component={Admins} />
          <Route path="/admins/add" component={AdminForm} />
          <Route path="/admins/edit" component={EditAdmin} />
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
          <Route path="/nav" component={Navigation} />
          <Route exact path="/" component={Home}>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
