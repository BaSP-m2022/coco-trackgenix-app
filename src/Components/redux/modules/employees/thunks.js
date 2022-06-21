import {
  getEMPLOYEESuccess,
  getEMPLOYEEPending,
  getEMPLOYEEerror,
  getEMPLOYEEbyIdSuccess,
  getEMPLOYEEbyIdPending,
  getEMPLOYEEbyIdError,
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

export const addEmployee = (e, setModalText, setShowButton, setSuccessEmployee) => {
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
      if (res.msg == 'Status 201') {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been created!');
        dispatch(addEMPLOYEESuccess(e));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Must indicate if the employee is active');
        dispatch(addEMPLOYEEerror(res));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessEmployee(false);
      dispatch(addEMPLOYEEerror(error));
      setModalText('An error has ocurred!');
    }
  };
};

export const editEmployee = (employee, id, setModalText, setShowButton, setSuccessEmployee) => {
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
      if (res.msg == 'Status 200') {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been edited!');
        dispatch(editEMPLOYEESuccess(employee));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Must indicate if the employee is active');
        dispatch(editEMPLOYEEerror(res));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessEmployee(false);
      dispatch(editEMPLOYEEerror(error));
      setModalText('An error has ocurred!');
    }
  };
};

export const getEmployeeById = (id) => {
  return async (dispatch) => {
    dispatch(getEMPLOYEEbyIdPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${id}`);
      const response_1 = await response.json();
      response_1.data.phone = response_1.data.phone.toString();
      dispatch(getEMPLOYEEbyIdSuccess(response_1.data));
    } catch (error) {
      dispatch(getEMPLOYEEbyIdError(error.toString()));
    }
  };
};
