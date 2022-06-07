import Header from '../Header/index';
import Footer from '../Footer/index';
import Admins from '../Admins/index';
import AdminForm from '../Admins/AdminForm/AdminForm';
import SuperAdmins from '../SuperAdmins/index';
import Home from '../Home/index';
import styles from './layout.module.css';
import Employees from '../Employees/index';
import Projects from '../Projects';
import AddNew from '../Projects/AddNew';
import TimeSheets from '../TimeSheets';
import Tasks from '../Tasks/index';
import EditProject from '../Projects/EditProject';
import SuperAdminFormEdit from '../SuperAdmins/SuperAdminFormEdit';
import FormEmployee from '../Employees/FormEmployee/FormEmployee';
import FormEmployeeEdit from '../Employees/FormEmployee/FormEmployeeEdit';
import SuperAdminForm from '../SuperAdmins/SuperAdminForm';

function Layout() {
  let currentScreen = <Home />;
  switch (window.location.pathname) {
    case '/admins':
      currentScreen = <Admins />;
      break;
    case '/admins/add':
      currentScreen = <AdminForm />;
      break;
    case '/super-admins':
      currentScreen = <SuperAdmins />;
      break;
    case '/super-admins/Form':
      currentScreen = <SuperAdminFormEdit />;
      break;
    case '/super-admins/formAdd':
      currentScreen = <SuperAdminForm />;
      break;
    case '/employees':
      currentScreen = <Employees />;
      break;
    case '/employees/form':
      currentScreen = <FormEmployee />;
      break;
    case '/employees/formEdit':
      currentScreen = <FormEmployeeEdit />;
      break;
    case '/projects':
      currentScreen = <Projects />;
      break;
    case '/projects/add':
      currentScreen = <AddNew />;
      break;
    case '/projects/edit':
      currentScreen = <EditProject />;
      break;
    case '/time-sheets':
      currentScreen = <TimeSheets />;
      break;
    case '/tasks':
      currentScreen = <Tasks />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <Header />
      {currentScreen}
      <Footer />
    </div>
  );
}

export default Layout;
