import { loginPending, loginSuccess, loginError, logoutPending, logoutSuccess } from './actions';
import firebase from 'Components/helper/firebase';

export const login = (credentials, setResStatus) => {
  return (dispatch) => {
    dispatch(loginPending());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        const token = await response.user.getIdToken();
        const {
          claims: { role }
        } = await response.user.getIdTokenResult();
        setResStatus(true);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
        return dispatch(loginSuccess({ role, token }));
      })
      .catch((error) => {
        return dispatch(loginError(error.toString()));
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
