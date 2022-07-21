import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import userIcon from '../../Assets/user.svg';
import styles from './navBar.module.css';

const NavBar = () => {
  const currentUsr = useSelector((state) => state.login);
  const users = useSelector((state) => state);

  const role = sessionStorage.getItem('role');
  if (!role) {
    return null;
  }

  const currentUser = () => {
    if (role === 'PM' || role === 'EMPLOYEE') {
      const employee = users.employee.list.find(
        (employee) => employee.email === currentUsr.userEmail
      );
      return `${employee?.firstName} ${employee?.lastName}`;
    } else if (role === 'ADMIN') {
      const admin = users.admin.list.find((admin) => admin.email === currentUsr.userEmail);
      return `${admin?.name} ${admin?.lastName}`;
    }
    return 'Welcome';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.userInfo}>
        <img src={userIcon} className={styles.userImg} />
        <div className={styles.userName}>{currentUser()}</div>
        <div className={styles.userRole}>{role}</div>
      </div>
      <div className={styles.menu}>menu</div>
      <ul className={styles.routes}>
        {currentUsr.routes.map((element, index) => {
          return (
            <li key={index}>
              <Link className={styles.links} to={element.path}>
                {element.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
