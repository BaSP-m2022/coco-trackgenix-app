import {
  getMEMBERSuccess,
  getMEMBERPending,
  getMEMBERerror,
  getMEMBERbyIdSuccess,
  getMEMBERbyIdPending,
  getMEMBERbyIdError,
  deleteMEMBERSuccess,
  deleteMEMBERPending,
  deleteMEMBERerror,
  addMEMBERSuccess,
  addMEMBERPending,
  addMEMBERerror,
  editMEMBERSuccess,
  editMEMBERPending,
  editMEMBERerror
} from './actions';

export const getMember = () => {
  return async (dispatch) => {
    dispatch(getMEMBERPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          token
        })
      });
      const data = await response.json();
      dispatch(getMEMBERSuccess(data.data));
    } catch (error) {
      dispatch(getMEMBERerror(error.toString()));
    }
  };
};

export const deleteMember = (_id) => {
  return async (dispatch) => {
    dispatch(deleteMEMBERPending());
    const token = sessionStorage.getItem('token');
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/members/${_id}`, {
        method: 'DELETE',
        headers: { token }
      });
      dispatch(deleteMEMBERSuccess(_id));
    } catch (error) {
      dispatch(deleteMEMBERerror(error.toString()));
    }
  };
};

export const addMember = (e) => {
  return async (dispatch) => {
    dispatch(addMEMBERPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(e)
      });
      const res = await response.json();
      if (res.message == 'Member has been created') {
        dispatch(addMEMBERSuccess(e));
      } else {
        dispatch(addMEMBERerror(res));
      }
    } catch (error) {
      dispatch(addMEMBERerror(error.toString()));
    }
  };
};

export const editMember = (member, id) => {
  return async (dispatch) => {
    dispatch(editMEMBERPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify(member)
      });
      const res = await response.json();
      if (res.error == false) {
        dispatch(editMEMBERSuccess(member));
      } else {
        dispatch(editMEMBERerror(res));
      }
    } catch (error) {
      dispatch(editMEMBERerror(error.toString()));
    }
  };
};

export const getMemberById = (id) => {
  return async (dispatch) => {
    dispatch(getMEMBERbyIdPending());
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members/${id}`, {
        method: 'GET',
        headers: { token }
      });
      const memberData = await response.json();
      dispatch(getMEMBERbyIdSuccess(memberData.data));
    } catch (error) {
      dispatch(getMEMBERbyIdError(error.toString()));
    }
  };
};
