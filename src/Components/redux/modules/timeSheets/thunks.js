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

const totalHours = (item) => {
  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total = total + Number(item[i]);
  }

  return total;
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets`, {
        headers: { token }
      });
      const data = await response.json();
      data.data.map((item) => {
        item.member = item.member ? item.member.employee.firstName : 'No Member';
        item.project = item.project ? item.project.name : 'No Project';
        item.startDate = dateFormatter(item.startDate.substring(0, 10));
        item.endDate = dateFormatter(item.endDate.substring(0, 10));
        item.workedHours = totalHours(item.workedHours);
        item.approve = item.approve ? 'true' : 'false';
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
    const token = sessionStorage.getItem('token');
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${_id}`, {
        method: 'DELETE',
        headers: { token }
      });
      dispatch(deleteTimesheetSuccess(_id));
    } catch (error) {
      dispatch(deleteTimesheetError(error));
    }
  };
};

export const addTimesheet = (e, setModalText, setSuccessTimesheet, setShowButton) => {
  return async (dispatch) => {
    dispatch(addTimesheetPending());
    const token = sessionStorage.getItem('token');

    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(e)
      });
      const res = await response.json();
      if (res.error === true) {
        setShowButton(false);
        setSuccessTimesheet(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(addTimesheetError(res.error.toString()));
      } else {
        setShowButton(false);
        setSuccessTimesheet(true);
        setModalText('Timesheet has been created!');
        dispatch(addTimesheetSuccess(e));
      }
    } catch (error) {
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(timesheet)
      });
      const res = await response.json();
      if (!res.error) {
        setShowButton(false);
        setSuccessTimesheet(true);
        setModalText('Timesheet has been edited!');
        dispatch(editTimesheetSuccess(timesheet));
      } else if (res.error) {
        setShowButton(false);
        setSuccessTimesheet(false);
        setModalText('Fields filled incorrectly, please check the data');
        dispatch(editTimesheetError(res.error.toString()));
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/timesheets/${id}`, {
        headers: { token }
      });
      const res = await response.json();
      dispatch(getTimesheetByIdSuccess(res.data));
    } catch (error) {
      dispatch(getTimesheetByIdError(error.toString()));
    }
  };
};
