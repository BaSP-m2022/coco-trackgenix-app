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
  PutAdminError
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
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/admins/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      dispatch(DeleteAdminSuccess(_id));
    } catch (error) {
      console.error(error);
      dispatch(DeleteAdminError(error));
    }
  };
};

export const postAdmin = (e) => {
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
      if (response.error) {
        dispatch(PostAdminError(responseJson.message));
      } else {
        dispatch(PostAdminSuccess(responseJson.data));
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      dispatch(PostAdminError(error.toString));
    }
  };
};

export const putAdmin = (admin, id) => {
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
    } catch (error) {
      console.error(error);
      dispatch(PutAdminError());
    }
  };
};
