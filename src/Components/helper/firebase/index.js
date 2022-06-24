import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { store } from 'Components/redux/store';
import { setAuthentication } from 'Components/redux/modules/auth/actions';
import { useDispatch } from 'react-redux';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const tokenListener = () => {
  const dispatch = useDispatch();

  firebase.auth().onIdTokenChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      const {
        claims: { role }
      } = await user.getIdTokenResult();
      dispatch(
        setAuthentication({
          token,
          role
        })
      );
    }
  });
};

export default firebaseApp;
