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

export const addTimesheet = (e, setModalText, setShowButton, setSuccessEmployee) => {
  return async (dispatch) => {
    dispatch(addTimesheetPending());
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
      if (res.error === false) {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been created!');
        dispatch(addTimesheetSuccess(e));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(addTimesheetError(res));
        console.log('error 1', e);
      }
    } catch (error) {
      setShowButton(false);
      setSuccessEmployee(false);
      dispatch(addTimesheetError(error));
      setModalText('An error has ocurred!');
      console.log('error 2', e);
    }
  };
};

export const editTimesheet = (timesheet, id, setModalText, setShowButton, setSuccessEmployee) => {
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
      if (res.msg == 'Status 200') {
        setShowButton(false);
        setSuccessEmployee(true);
        setModalText('Employee has been edited!');
        dispatch(editTimesheetSuccess(timesheet));
      } else {
        setShowButton(false);
        setSuccessEmployee(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(editTimesheetError(res));
      }
    } catch (error) {
      setShowButton(false);
      setSuccessEmployee(false);
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
