import {
  getTimesheetsPending,
  getTimesheetsSuccess,
  getTimesheetsError,
  getTimesheetByIdPending,
  getTimesheetByIdSuccess,
  getTimesheetByIdError,
  addTimesheetSuccess,
  addTimesheetPending,
  addTimesheetError,
  editTimesheetSuccess,
  editTimesheetPending,
  editTimesheetError,
  deleteTimesheetSuccess,
  deleteTimesheetPending,
  deleteTimesheetError
} from './actions';

export const getTimesheet = () => {
  return async (dispatch) => {
    dispatch(getTimesheetsPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets`);
      const data = await response.json();
      data.data.map((item) => {
        item.employeeId = item.employeeId ? item.employeeId.firstName : 'No Employee';
        item.projectId = item.projectId ? item.projectId.name : 'No project';
        item.startDate = dateFormatter(item.startDate.substring(0, 10));
        item.endDate = dateFormatter(item.endDate.substring(0, 10));
        item.tasks = amountOfTasks(item.tasks);
      });
      dispatch(getTimesheetsSuccess(data.data));
    } catch (error) {
      dispatch(getTimesheetsError(error));
    }
  };
};

export const deleteTimesheet = (_id) => {
  return async (dispatch) => {
    dispatch(deleteTimesheetPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${_id}`, {
        method: 'DELETE'
      });
      dispatch(deleteTimesheetSuccess(_id));
    } catch (error) {
      dispatch(deleteTimesheetError(error));
    }
  };
};

const amountOfTasks = (tasks) => {
  if (tasks.length === 1) {
    return tasks[0].description;
  } else if (tasks.length === 0) {
    return 'Not assigned';
  } else {
    return 'Various Tasks';
  }
};

const dateFormatter = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const addTimesheet = (e, setShowButton, setSuccessTimesheet, setModalText) => {
  return async (dispatch) => {
    dispatch(addTimesheetPending());
    console.log('entre a pending');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });
      const res = await response.json();
      console.log(res);
      console.log(e);
      if (res.error === true) {
        console.log('entre al if');
        setShowButton(false);
        setSuccessTimesheet(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(addTimesheetError(res.error.toString()));
      } else {
        console.log('entre al else');
        setShowButton(false);
        setSuccessTimesheet(true);
        setModalText('Employee has been created!');
        dispatch(addTimesheetSuccess(res.data));
      }
    } catch (error) {
      console.log('entre al catch');
      setShowButton(false);
      setSuccessTimesheet(false);
      setModalText('An error has ocurred!');
      dispatch(addTimesheetError(error));
    }
  };
};

export const editTimesheet = (timesheet, id, setModalText, setShowButton, setSuccessTimesheet) => {
  return async (dispatch) => {
    dispatch(editTimesheetPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(timesheet)
      });
      const res = await response.json();
      if (res.message) {
        setShowButton(false);
        setSuccessTimesheet(true);
        setModalText('Timesheet has been edited!');
        dispatch(editTimesheetSuccess(timesheet));
      } else if (res.msg) {
        setShowButton(false);
        setSuccessTimesheet(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(editTimesheetError(res));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessTimesheet(false);
      dispatch(editTimesheetError(error));
      setModalText('An error has ocurred!');
    }
  };
};

export const getTimesheetById = (id) => {
  return async (dispatch) => {
    dispatch(getTimesheetByIdPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`);
      const res = await response.json();
      dispatch(getTimesheetByIdSuccess(res.data));
    } catch (error) {
      dispatch(getTimesheetByIdError(error.toString()));
    }
  };
};

// import {
//   addTimeSheetSuccess,
//   addTimeSheetPending,
//   addTimeSheetError,
//   // editTimeSheetError,
//   // editTimeSheetPending,
//   // editTimeSheetSuccess,
//   getTimeSheetPending,
//   getTimeSheetSuccess,
//   getTimeSheetError,
//   deleteTimeSheetSuccess,
//   deleteTimeSheetError,
//   deleteTimeSheetPending
// } from './actions';

// const amountOfTasks = (tasks) => {
//   if (tasks.length === 1) {
//     return tasks[0].description;
//   } else if (tasks.length === 0) {
//     return 'Not assigned';
//   } else {
//     return 'Various Tasks';
//   }
// };

// const dateFormatter = (inputDate) => {
//   const date = new Date(inputDate);
//   const day = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   return `${month}/${day}/${year}`;
// };

// export const addTimesheet = (newTimeSheet) => {
//   return async (dispatch) => {
//     dispatch(addTimeSheetPending());
//     try {
//       const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/`, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//           employeeId: newTimeSheet.employee._id,
//           projectId: newTimeSheet.project._id,
//           tasks: newTimeSheet.task._id,
//           startDate: newTimeSheet.startDate,
//           endDate: newTimeSheet.endDate
//         })
//       });
//       const res = await response.json();
//       if (res.error) {
//         throw res.message;
//       }
//       dispatch(
//         addTimeSheetSuccess({
//           _id: res.data._id,
//           employeeId: {
//             _id: newTimeSheet.employee._id,
//             first_name: newTimeSheet.employee.first_name
//           },
//           projectId: {
//             _id: newTimeSheet.project._id,
//             project_name: newTimeSheet.project.project_name
//           },
//           tasks: {
//             _id: newTimeSheet.task._id,
//             description: newTimeSheet.task.description
//           },
//           startDate: newTimeSheet.startDate,
//           endDate: newTimeSheet.endDate
//         })
//       );
//       return {
//         error: false,
//         message: res.message
//       };
//     } catch (error) {
//       dispatch(addTimeSheetError());
//       return {
//         error: true,
//         message: error
//       };
//     }
//   };
// };

// // export const editTimeSheet = (newTimeSheet) => {
// //   return async (dispatch) => {
// //     dispatch(editTimeSheetPending());
// //     try {
// //       const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-type': 'application/json'
// //         },
// //         body: JSON.stringify({
// //           employee: newTimeSheet.employee._id,
// //           project: newTimeSheet.project._id,
// //           task: newTimeSheet.task._id,
// //           hs_worked: newTimeSheet.hs_worked,
// //           timesheetDate: newTimeSheet.timesheetDate
// //         })
// //       });
// //       const res = await response.json();
// //       if (res.error) {
// //         throw res.message;
// //       }
// //       dispatch(
// //         editTimeSheetSuccess({
// //           _id: res.data._id,
// //           employee: {
// //             _id: newTimeSheet.employee._id,
// //             first_name: newTimeSheet.employee.first_name
// //           },
// //           project: {
// //             _id: newTimeSheet.project._id,
// //             project_name: newTimeSheet.project.project_name
// //           },
// //           task: {
// //             _id: newTimeSheet.task._id,
// //             description: newTimeSheet.task.description
// //           },
// //           hs_worked: newTimeSheet.hs_worked,
// //           timesheetDate: newTimeSheet.timesheetDate
// //         })
// //       );
// //       return {
// //         error: false,
// //         message: res.message
// //       };
// //     } catch (error) {
// //       dispatch(editTimeSheetError());
// //       return {
// //         error: true,
// //         message: error
// //       };
// //     }
// //   };
// // };

// export const getTimeSheet = () => {
//   return async (dispatch) => {
//     dispatch(getTimeSheetPending());
//     try {
//       const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/`);
//       const res = await response.json();
//       res.data.map((item) => {
//         item.employeeId = item.employeeId ? item.employeeId.firstName : 'No Employee';
//         item.projectId = item.projectId ? item.projectId.name : 'No project';
//         item.startDate = dateFormatter(item.startDate.substring(0, 10));
//         item.endDate = dateFormatter(item.endDate.substring(0, 10));
//         item.tasks = amountOfTasks(item.tasks);
//       });
//       dispatch(getTimeSheetSuccess(res.data));
//     } catch (error) {
//       dispatch(getTimeSheetError(error.toString()));
//     }
//   };
// };

// export const deleteTimeSheet = (_id) => {
//   return async (dispatch) => {
//     dispatch(deleteTimeSheetPending());
//     try {
//       await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${_id}`, {
//         method: 'DELETE'
//       });
//       dispatch(deleteTimeSheetSuccess(_id));
//     } catch (error) {
//       dispatch(deleteTimeSheetError(error.toString()));
//     }
//   };
// };
