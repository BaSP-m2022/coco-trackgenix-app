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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`);
      const data = await response.json();
      data.data.map((admin) => {
        admin.active = admin.active ? 'true' : 'false';
      });
      dispatch(getAdminSuccess(data.data));
    } catch (error) {
      console.error(error);
      dispatch(getAdminError(error));
    }
  };
};

export const deleteAdmin = (_id) => {
  return async (dispatch) => {
    dispatch(DeleteAdminPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/admins/${_id}`, {
        method: 'DELETE'
      });
      dispatch(DeleteAdminSuccess(_id));
      dispatch(getAdmin());
    } catch (error) {
      dispatch(DeleteAdminError(error.toString()));
    }
  };
};

export const postAdmin = (e, setModalText, setShowButton, setSuccessAdmin) => {
  return async (dispatch) => {
    dispatch(PostAdminPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`);
      const adminData = await response.json();
      dispatch(getAdminByIdSuccess(adminData.data));
    } catch (error) {
      dispatch(getAdminByIdError(error.toString()));
    }
  };
};
