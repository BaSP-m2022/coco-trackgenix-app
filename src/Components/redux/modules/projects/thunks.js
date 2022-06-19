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
export const postProject = (projectInput) => {
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
      } else {
        dispatch(PostProjectSuccess(projectInput));
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      dispatch(PostProjectError(error.toString));
    }
  };
};
export const putProject = (projectInput, id) => {
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
      console.log(response.json);
      if (responseJson.error) {
        dispatch(PutProjectError(responseJson.message));
        console.log('error error', responseJson);
      } else {
        dispatch(PutProjectsSuccess(projectInput));
      }
      return responseJson.data;
    } catch (error) {
      console.error(error);
      console.log('error catch');
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
