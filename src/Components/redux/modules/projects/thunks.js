import {
  getProjectSuccess,
  getProjectPending,
  getProjectError,
  getProjectByIdError,
  getProjectByIdPending,
  getProjectByIdSuccess,
  DeleteProjectError,
  DeleteProjectSuccess,
  DeleteProjectPending,
  PostProjectError,
  PostProjectPending,
  PostProjectSuccess,
  PutProjectError,
  PutProjectPending,
  PutProjectsSuccess
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
export const postProject = (projectInput, setSuccess, setModalText) => {
  return async (dispatch) => {
    dispatch(PostProjectPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectInput)
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        dispatch(PostProjectError(responseJson.message));
        console.log(responseJson);
        setSuccess(false);
        setModalText('Fields filled incorrectly, please check the data');
      } else {
        dispatch(PostProjectSuccess(projectInput));
        setSuccess(true);
        setModalText('Project Created!');
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      dispatch(PostProjectError(error.toString));
    }
  };
};
export const putProject = (projectInput, id, setSuccess, setModalText) => {
  return async (dispatch) => {
    dispatch(PutProjectPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectInput)
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        dispatch(PutProjectError(responseJson.message));
        setSuccess(false);
        setModalText('Fields filled incorrectly, please check the data');
      } else {
        dispatch(PutProjectsSuccess(projectInput));
        setSuccess(true);
        setModalText('Project Edited successfully!');
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      dispatch(PutProjectError(error.toString));
    }
  };
};
export const getProjectById = (id) => {
  return async (dispatch) => {
    dispatch(getProjectByIdPending());
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`);
      const response_1 = await response.json();
      dispatch(getProjectByIdSuccess(response_1.data));
    } catch (error) {
      dispatch(getProjectByIdError(error.toString()));
    }
  };
};
