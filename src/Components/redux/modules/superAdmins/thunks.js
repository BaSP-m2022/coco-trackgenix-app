import {
  getSuperAdminsPending,
  getSuperAdminsSuccess,
  getSuperAdminsError,
  addSuperAdminsPending,
  addSuperAdminsSuccess,
  addSuperAdminsError,
  deleteSuperAdminsPending,
  deleteSuperAdminsSuccess,
  deleteSuperAdminsError,
  editSuperAdminsPending,
  editSuperAdminsSuccess,
  editSuperAdminsError,
  getSuperAdminByIdPending,
  getSuperAdminByIdSuccess,
  getSuperAdminByIdError
} from './actions';

export const getSuperAdmins = () => {
  return async (dispatch) => {
    dispatch(getSuperAdminsPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`, {
        headers: { token }
      });
      const resp = await response.json();
      dispatch(getSuperAdminsSuccess(resp.data));
    } catch (error) {
      dispatch(getSuperAdminsError(error.toString()));
    }
  };
};

export const deleteSuperAdmins = (user) => {
  return async (dispatch) => {
    dispatch(deleteSuperAdminsPending());
    const token = sessionStorage.getItem('token');
    const uid = user.firebaseUid;
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${user._id}`, {
        method: 'DELETE',
        headers: { token, uid }
      });
      dispatch(deleteSuperAdminsSuccess(user._id));
      dispatch(getSuperAdmins());
    } catch (error) {
      dispatch(deleteSuperAdminsError(error.toString()));
      console.error(error);
    }
  };
};

export const addSuperAdmin = (superAdmin, setModalText, setShowButton, setSuperAdminCreated) => {
  return async (dispatch) => {
    dispatch(addSuperAdminsPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token
        },
        body: JSON.stringify(superAdmin)
      });
      const resp = await response.json();
      if (resp.error === false) {
        setShowButton(false);
        setSuperAdminCreated(true);
        setModalText('Super-admin has been created!');
        dispatch(addSuperAdminsSuccess(superAdmin));
      } else {
        setShowButton(false);
        setSuperAdminCreated(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(addSuperAdminsError(resp));
      }
    } catch (error) {
      setShowButton(false);
      setSuperAdminCreated(false);
      dispatch(addSuperAdminsError(error.toString()));
      setModalText('An error has ocurred!');
    }
  };
};

export const editSuperAdmin = (
  superAdmin,
  id,
  setModalText,
  setShowButton,
  setSuperAdminEdited
) => {
  return async (dispatch) => {
    dispatch(editSuperAdminsPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          token
        },
        body: JSON.stringify(superAdmin)
      });
      const resp = await response.json();
      if (resp.error === false) {
        setShowButton(false);
        setSuperAdminEdited(true);
        setModalText('Super-admin has been edited!');
        dispatch(editSuperAdminsSuccess(superAdmin));
      } else {
        setShowButton(false);
        setSuperAdminEdited(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(editSuperAdminsError(resp));
      }
    } catch (error) {
      setShowButton(false);
      setSuperAdminEdited(false);
      dispatch(editSuperAdminsError(error.toString()));
      setModalText('An error has ocurred!');
    }
  };
};

export const getSuperAdminById = (id) => {
  return async (dispatch) => {
    dispatch(getSuperAdminByIdPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`, {
        headers: { token }
      });
      const resp = await response.json();
      dispatch(getSuperAdminByIdSuccess(resp.data));
    } catch (error) {
      dispatch(getSuperAdminByIdError(error.toString()));
    }
  };
};
