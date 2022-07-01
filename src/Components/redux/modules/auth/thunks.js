import { loginPending, loginSuccess, loginError, logoutPending, logoutSuccess } from './actions';
import firebase from 'Components/helper/firebase';

export const login = (credentials, setIsOpen) => {
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
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
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
