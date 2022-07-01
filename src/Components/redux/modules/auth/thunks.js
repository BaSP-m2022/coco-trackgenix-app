import { loginPending, loginSuccess, loginError, logoutPending, logoutSuccess } from './actions';
import firebase from 'Components/helper/firebase';

export const login = (credentials, setIsOpen) => {
  return (dispatch) => {
    dispatch(loginPending());
    console.log('PENDING');
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        const token = await response.user.getIdToken();
        console.log('ACA');
        const {
          claims: { role }
        } = await response.user.getIdTokenResult();
        console.log(role, token, 'ACA ESTAMOS');
        dispatch(loginSuccess({ role, token }));
        console.log('PENDINGG');
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
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
