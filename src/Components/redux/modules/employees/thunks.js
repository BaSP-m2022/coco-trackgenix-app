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

export const editEmployee = async (employee, setStatus) => {
  return async (dispatch) => {
    dispatch(editEMPLOYEEPending());
    await fetch(`https://coco-trackgenix-server.vercel.app/employees/${employee._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: employee.firstName,
        lastName: employee.lastName,
        phone: employee.phone,
        email: employee.email,
        password: employee.password,
        active: employee.active
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus(data.msg);
        dispatch(editEMPLOYEESuccess(employee));
      })
      .catch((error) => console.error(error));
    dispatch(editEMPLOYEEerror());
  };
};

// export const editEmployee = (employee, setStatus) => {
//   return async (dispatch) => {
//     dispatch(editEMPLOYEEPending());
//     try {
//       const response = await fetch(
//         `https://coco-trackgenix-server.vercel.app/employees/${employee._id}`,
//         {
//           method: 'PUT',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             firstName: employee.firstName,
//             lastName: employee.lastName,
//             phone: employee.phone,
//             email: employee.email,
//             password: employee.password,
//             active: employee.active
//           })
//         }
//       );
//       const res = await response.json();
//       console.log(res);
//       setStatus(res.data);
//       dispatch(editEMPLOYEESuccess(res.data));
//     } catch (error) {
//       dispatch(editEMPLOYEEerror(error));
//     }
//   };
// };
