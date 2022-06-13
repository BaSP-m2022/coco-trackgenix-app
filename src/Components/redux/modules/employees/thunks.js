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

export const addEmployee = (e, setStatus) => {
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
      dispatch(addEMPLOYEESuccess(e, setStatus));
    } catch (error) {
      console.error(error);
      dispatch(addEMPLOYEEerror(error));
    }
  };
};

// export const editEmployee = (setStatus, _id) => {
//   return async (dispatch) => {
//     const params = window.location.search;
//     let id = params.substring(2);
//     console.log(id);
//     dispatch(editEMPLOYEEPending());
//     try {
//       const response = await fetch(`https://coco-trackgenix-server.vercel.app/employees/${id}`, {
//         method: 'PUT',
//         headers: {
//           // Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           firstName: _id.firstName,
//           lastName: _id.lastName,
//           phone: _id.phone,
//           email: _id.email,
//           password: _id.password,
//           active: _id.active
//         })
//       });
//       console.log(response);
//       const res = await response.json();
//       console.log(res);
//       setStatus(res.msg);
//       dispatch(editEMPLOYEESuccess(_id, setStatus));
//     } catch (error) {
//       dispatch(editEMPLOYEEerror(error));
//     }
//   };
// };

export const editEmployee = (employee, setStatus) => {
  return async (dispatch) => {
    dispatch(editEMPLOYEEPending());
    const params = window.location.search;
    let id = params.substring(2);
    console.log(id);
    let url = `https://coco-trackgenix-server.vercel.app/employees/${id}`;
    const editEmployee = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ employee })
    };
    await fetch(url, editEmployee)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(employee);
        setStatus(data.msg);
        dispatch(editEMPLOYEESuccess(employee, setStatus));
      })
      .catch((error) => console.error(error));
    dispatch(editEMPLOYEEerror());
  };
};
