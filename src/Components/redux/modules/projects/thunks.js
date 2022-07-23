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

// const changeDate = (date) => {
//   let changedDate;
//   if (!date) {
//     changedDate = null;
//   } else {
//     let substrained = date.substring(0, 10);
//     let year = Number(substrained.split('-')[0]);
//     let month = Number(substrained.split('-')[1]);
//     let day = Number(substrained.split('-')[2]);
//     if (day < 10) {
//       day = `0${day}`;
//     }
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     changedDate = `${month}-${day}-${year}`;
//   }
//   return changedDate;
// };
export const getProject = () => {
  return async (dispatch) => {
    dispatch(getProjectPending());
    const token = sessionStorage.getItem('token');
    console.log(token, 'token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          token
        })
      });
      const data = await response.json();
      console.log(data, 'datA');
      dispatch(getProjectSuccess(data.data));
      console.log(data.data[0], 'dos');
    } catch (error) {
      console.error;
      dispatch(getProjectError(error));
    }
  };
};
export const deleteProject = (_id) => {
  return async (dispatch) => {
    dispatch(DeleteProjectPending());
    const token = sessionStorage.getItem('token');
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        }
      });
      console.log('hola', _id);
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(projectInput)
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        dispatch(PostProjectError(responseJson.message));
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
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
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects/${id}`, {
        headers: { token }
      });
      const response_1 = await response.json();
      dispatch(getProjectByIdSuccess(response_1.data));
    } catch (error) {
      dispatch(getProjectByIdError(error.toString()));
    }
  };
};
