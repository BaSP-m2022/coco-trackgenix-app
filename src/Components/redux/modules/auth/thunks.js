import {
  loginPending,
  loginSuccess,
  loginError,
  logoutPending,
  logoutSuccess,
  currentUserEmail
} from './actions';
import { firebaseApp } from 'Components/helper/firebase';
import {
  employeeRoutes,
  adminRoutes,
  pmRoutes,
  superAdminRoutes
} from 'Components/routes/routesData';
import { currentRoutes } from './actions';
import { getEmployee } from '../employees/thunks';
import { getAdmin } from '../admins/thunks';
import { getSuperAdmins } from '../superAdmins/thunks';

export const login = (credentials, setIsOpen) => {
  return (dispatch) => {
    dispatch(loginPending());
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        console.log(response);
        const token = await response.user.getIdToken();
        const {
          claims: { role, email }
        } = await response.user.getIdTokenResult();
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
        dispatch(currentUserEmail(email));
        setCurrentRoutes(role, dispatch);
        dispatch(loginSuccess());
      })
      .catch((error) => {
        setIsOpen(true);
        dispatch(loginError(error.toString()));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutPending());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    return dispatch(logoutSuccess());
  };
};

const setCurrentRoutes = (role, dispatch) => {
  switch (role) {
    case 'EMPLOYEE':
      dispatch(getEmployee());
      dispatch(currentRoutes(employeeRoutes));
      break;
    case 'ADMIN':
      dispatch(getAdmin());
      dispatch(currentRoutes(adminRoutes));
      break;
    case 'SUPERADMIN':
      dispatch(getSuperAdmins());
      dispatch(currentRoutes(superAdminRoutes));
      break;
    case 'PM':
      dispatch(getEmployee());
      dispatch(currentRoutes(pmRoutes));
      break;
  }
};
