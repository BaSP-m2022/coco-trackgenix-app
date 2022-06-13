import {
  getEMPLOYEESuccess,
  getEMPLOYEEPending,
  getEMPLOYEEerror,
  deleteEMPLOYEESuccess,
  deleteEMPLOYEEPending,
  deleteEMPLOYEEerror
} from './actions';

export const getEmployee = () => {
  return async (dispatch) => {
    dispatch(getEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`);
      const data = await response.json();
      data.data.map((item) => {
        item.active = item.active ? 'true' : 'false';
      });
      dispatch(getEMPLOYEESuccess(data.data));
    } catch (error) {
      console.error(error);
      dispatch(getEMPLOYEEerror(error));
    }
  };
};

export const deleteEmployee = (_id) => {
  return async (dispatch) => {
    dispatch(deleteEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      dispatch(deleteEMPLOYEESuccess(_id));
      console.log(response.data);
    } catch (error) {
      console.error(error);
      dispatch(deleteEMPLOYEEerror(error));
    }
  };
};
