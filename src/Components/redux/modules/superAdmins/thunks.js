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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`);
      const resp = await response.json();
      resp.data.map((superadmin) => {
        superadmin.active = superadmin.active ? 'true' : 'false';
      });
      dispatch(getSuperAdminsSuccess(resp.data));
    } catch (error) {
      dispatch(getSuperAdminsError(error.toString()));
    }
  };
};

export const deleteSuperAdmins = (_id) => {
  return async (dispatch) => {
    dispatch(deleteSuperAdminsPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`, {
        method: 'DELETE'
      });
      dispatch(deleteSuperAdminsSuccess(_id));
      dispatch(getSuperAdmins());
    } catch (error) {
      dispatch(deleteSuperAdminsError(error.toString()));
      console.error(error);
    }
  };
};

export const addSuperAdmin = (superAdmin) => {
  return async (dispatch) => {
    dispatch(addSuperAdminsPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: superAdmin.name,
          lastName: superAdmin.lastName,
          email: superAdmin.email,
          password: superAdmin.password,
          active: superAdmin.active
        })
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        dispatch(addSuperAdminsError(responseJson.message));
      } else {
        dispatch(addSuperAdminsSuccess());
      }
      return responseJson.data;
    } catch (error) {
      dispatch(addSuperAdminsError(error.toString()));
    }
  };
};

export const editSuperAdmin = (superAdmin, id, setIsOpen, backSuperAdmin) => {
  return async (dispatch) => {
    dispatch(editSuperAdminsPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(superAdmin)
      });
      dispatch(editSuperAdminsSuccess(superAdmin, response));
      setIsOpen(false);
      backSuperAdmin();
    } catch (error) {
      dispatch(editSuperAdminsError(error.toString()));
    }
  };
};

export const getSuperAdminById = (id) => {
  return async (dispatch) => {
    dispatch(getSuperAdminByIdPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/superAdmins/${id}`);
      const resp = await response.json();
      dispatch(getSuperAdminByIdSuccess(resp.data));
    } catch (error) {
      dispatch(getSuperAdminByIdError(error.toString()));
    }
  };
};
