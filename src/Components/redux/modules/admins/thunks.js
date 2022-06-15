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

export const postAdmin = (e, setIsOpen, backAdmin) => {
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
      const responseJson = await response.json();
      if (responseJson.error) {
        dispatch(PostAdminError(responseJson.message));
        setIsOpen(false);
      } else {
        dispatch(PostAdminSuccess(e));
        setIsOpen(false);
        backAdmin();
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      dispatch(PostAdminError(error.toString));
    }
  };
};

export const putAdmin = (admin, id, setIsOpen, backAdmin) => {
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
      dispatch(PutAdminsSuccess(admin, response));
      setIsOpen(false);
      backAdmin();
    } catch (error) {
      console.error(error);
      dispatch(PutAdminError());
    }
  };
};

export const getAdminById = (id) => {
  return async (dispatch) => {
    dispatch(getAdminByIdPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${id}`);
      const response_1 = await response.json();
      dispatch(getAdminByIdSuccess(response_1.data));
    } catch (error) {
      dispatch(getAdminByIdError(error.toString()));
    }
  };
};
