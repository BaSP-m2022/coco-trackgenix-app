import {
  getMEMBERSuccess,
  getMEMBERPending,
  getMEMBEREerror,
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members`, {
        method: 'GET'
      });
      const data = await response.json();
      dispatch(getMEMBERSuccess(data.data));
    } catch (error) {
      dispatch(getMEMBEREerror(error.toString()));
    }
  };
};

export const deleteMember = (_id) => {
  return async (dispatch) => {
    dispatch(deleteMEMBERPending());
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/members/${_id}`, {
        method: 'DELETE'
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members`, {
        method: 'POST',
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members/${id}`, {
        method: 'PUT',
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
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/members/${id}`, {
        method: 'GET'
      });
      const memberData = await response.json();
      dispatch(getMEMBERbyIdSuccess(memberData.data));
    } catch (error) {
      dispatch(getMEMBERbyIdError(error.toString()));
    }
  };
};
