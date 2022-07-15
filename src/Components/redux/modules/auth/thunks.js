import { loginPending, loginSuccess, loginError, logoutPending, logoutSuccess } from './actions';
import { firebaseApp } from 'Components/helper/firebase';
import {
  employeeRoutes,
  adminRoutes,
  pmRoutes,
  superAdminRoutes
} from 'Components/routes/routesData';
import { currentRoutes } from './actions';

export const login = (credentials, setIsOpen) => {
  return (dispatch) => {
    dispatch(loginPending());
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        const token = await response.user.getIdToken();
        const {
          claims: { role }
        } = await response.user.getIdTokenResult();
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
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
      return dispatch(currentRoutes(employeeRoutes));
    case 'ADMIN':
      return dispatch(currentRoutes(adminRoutes));
    case 'SUPERADMIN':
      return dispatch(currentRoutes(superAdminRoutes));
    case 'PM':
      return dispatch(currentRoutes(pmRoutes));
  }
};
