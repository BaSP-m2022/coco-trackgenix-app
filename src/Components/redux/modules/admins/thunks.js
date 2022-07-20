import {
  getAdminSuccess,
  getAdminPending,
  getAdminError,
  PostAdminSuccess,
  PostAdminPending,
  PostAdminError,
  DeleteAdminSuccess,
  DeleteAdminPending,
  DeleteAdminError,
  PutAdminsPending,
  PutAdminsSuccess,
  PutAdminError,
  getAdminByIdSuccess,
  getAdminByIdPending,
  getAdminByIdError
} from './actions';

export const getAdmin = () => {
  return async (dispatch) => {
    dispatch(getAdminPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        headers: { token }
      });
      const data = await response.json();
      dispatch(getAdminSuccess(data.data));
    } catch (error) {
      console.error(error);
      dispatch(getAdminError(error));
    }
  };
};

export const deleteAdmin = (user) => {
  return async (dispatch) => {
    dispatch(DeleteAdminPending());
    const token = sessionStorage.getItem('token');
    const uid = user.firebaseUid;
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/admins/${user._id}`, {
        method: 'DELETE',
        headers: { token, uid }
      });
      dispatch(DeleteAdminSuccess(user._id));
      dispatch(getAdmin());
    } catch (error) {
      dispatch(DeleteAdminError(error.toString()));
    }
  };
};

export const postAdmin = (e, setModalText, setShowButton, setSuccessAdmin) => {
  return async (dispatch) => {
    dispatch(PostAdminPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(e)
      });
      const res = await response.json();
      if (res.error) {
        setShowButton(false);
        setSuccessAdmin(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(PostAdminError(res.message));
      } else {
        setShowButton(false);
        setSuccessAdmin(true);
        setModalText('Admin has been created!');
        dispatch(PostAdminSuccess(e));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessAdmin(false);
      dispatch(PostAdminError(error.toString));
      setModalText('An error has ocurred!');
    }
  };
};

export const putAdmin = (admin, id, setModalText, setShowButton, setSuccessAdmin) => {
  return async (dispatch) => {
    dispatch(PutAdminsPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(admin)
      });
      const res = await response.json();
      if (res.error) {
        setShowButton(false);
        setSuccessAdmin(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(PutAdminError(res));
      } else {
        setShowButton(false);
        setSuccessAdmin(true);
        setModalText('Admin has been edited!');
        dispatch(PutAdminsSuccess(admin));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessAdmin(false);
      dispatch(PutAdminError(error));
      setModalText('An error has ocurred!');
    }
  };
};

export const getAdminById = (id) => {
  return async (dispatch) => {
    dispatch(getAdminByIdPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`, {
        headers: { token }
      });
      const adminData = await response.json();
      dispatch(getAdminByIdSuccess(adminData.data));
    } catch (error) {
      dispatch(getAdminByIdError(error.toString()));
    }
  };
};
