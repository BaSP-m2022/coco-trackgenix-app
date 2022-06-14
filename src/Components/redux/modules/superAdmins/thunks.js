import {
  getSuperAdminsPending,
  getSuperAdminsSuccess,
  getSuperAdminsError,
  addSuperAdminsPending,
  addSuperAdminsSuccess,
  addSuperAdminsError,
  deleteSuperAdminsPending,
  deleteSuperAdminsSuccess,
  deleteSuperAdminsError
  //editSuperAdminsPending,
  //editSuperAdminsSuccess,
  //editSuperAdminsError
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
      await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins${_id}`, {
        method: 'DELETE'
      });
      dispatch(deleteSuperAdminsSuccess(_id));
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
      const resp = await response.json();
      dispatch(addSuperAdminsSuccess(resp.data));
    } catch (error) {
      dispatch(addSuperAdminsError(error.toString()));
    }
  };
};
