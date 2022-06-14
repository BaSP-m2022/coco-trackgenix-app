import {
  getEMPLOYEESuccess,
  getEMPLOYEEPending,
  getEMPLOYEEerror,
  deleteEMPLOYEESuccess,
  deleteEMPLOYEEPending,
  deleteEMPLOYEEerror,
  addEMPLOYEESuccess,
  addEMPLOYEEPending,
  addEMPLOYEEerror,
  editEMPLOYEESuccess,
  editEMPLOYEEPending,
  editEMPLOYEEerror
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
      dispatch(getEMPLOYEEerror(error));
    }
  };
};

export const deleteEmployee = (_id) => {
  return async (dispatch) => {
    dispatch(deleteEMPLOYEEPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/employees/${_id}`, {
        method: 'DELETE'
      });
      dispatch(deleteEMPLOYEESuccess(_id));
    } catch (error) {
      dispatch(deleteEMPLOYEEerror(error));
    }
  };
};

export const addEmployee = (e, setStatus, createMsg) => {
  return async (dispatch) => {
    dispatch(addEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      const res = await response.json();
      setStatus(res.msg);
      createMsg(res.msg);
      dispatch(addEMPLOYEESuccess(e, setStatus));
    } catch (error) {
      dispatch(addEMPLOYEEerror(error));
    }
  };
};

export const editEmployee = (employee, id, setStatus, setModalText) => {
  return async (dispatch) => {
    dispatch(editEMPLOYEEPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      const res = await response.json();
      setStatus(res.msg);
      setModalText(res.msg);
      dispatch(editEMPLOYEESuccess(employee));
    } catch (error) {
      dispatch(editEMPLOYEEerror());
    }
  };
};
