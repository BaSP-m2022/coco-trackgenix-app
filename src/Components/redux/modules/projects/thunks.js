import {
  getProjectSuccess,
  getProjectPending,
  getProjectError,
  DeleteProjectError,
  DeleteProjectSuccess,
  DeleteProjectPending
} from './actions';

const changeDate = (date) => {
  let changedDate;
  if (!date) {
    changedDate = null;
  } else {
    let substrained = date.substring(0, 10);
    let year = Number(substrained.split('-')[0]);
    let month = Number(substrained.split('-')[1]);
    let day = Number(substrained.split('-')[2]);
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    changedDate = `${month}-${day}-${year}`;
  }
  return changedDate;
};

export const getProject = () => {
  return async (dispatch) => {
    dispatch(getProjectPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`);
      const data = await response.json();
      data.data.map((project) => {
        project.active = project.active ? 'true' : 'false';
        project.createdAt = changeDate(project.createdAt);
        project.startDate = changeDate(project.startDate);
        project.endDate = changeDate(project.endDate);
        project.employees = project.employees.length;
      });
      dispatch(getProjectSuccess(data.data));
    } catch (error) {
      console.error;
      dispatch(getProjectError(error));
    }
  };
};

export const deleteProject = (_id) => {
  return async (dispatch) => {
    dispatch(DeleteProjectPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
        method: 'DELETE'
      });
      dispatch(DeleteProjectSuccess(_id));
      dispatch(getProject());
    } catch (error) {
      dispatch(DeleteProjectError(error));
    }
  };
};
