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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/Employees`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          token
        })
      });
      const data = await response.json();
      dispatch(getEMPLOYEESuccess(data.data));
    } catch (error) {
      dispatch(getEMPLOYEEerror(error));
    }
  };
};

export const deleteEmployee = (_id) => {
  return async (dispatch) => {
    dispatch(deleteEMPLOYEEPending());
    const token = sessionStorage.getItem('token');
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/employees/${_id}`, {
        method: 'DELETE',
        headers: { token }
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
      if (res.message == 'A new employee has been added successfully.') {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been created!');
        dispatch(addEMPLOYEESuccess(e));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Fields filled incorrectly, please check the data');
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(employee)
      });
      const res = await response.json();
      if (res.error == false) {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been edited!');
        dispatch(editEMPLOYEESuccess(employee));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Fields filled incorrectly, please check the data');
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${id}`, {
        headers: { token }
      });
      const employeeData = await response.json();
      employeeData.data.phone = employeeData.data.phone.toString();
      dispatch(getEMPLOYEEbyIdSuccess(employeeData.data));
    } catch (error) {
      dispatch(getEMPLOYEEbyIdError(error.toString()));
    }
  };
};
