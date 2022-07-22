import {
  EDIT_HIDE,
  EDIT_SHOW,
  DELETE_HIDE,
  DELETE_SHOW
} from 'Components/redux/modules/table/constants';

export const editHide = () => {
  return {
    type: EDIT_HIDE
  };
};
export const editShow = () => {
  return {
    type: EDIT_SHOW
  };
};
export const deleteHide = () => {
  return {
    type: DELETE_HIDE
  };
};
export const deleteShow = () => {
  return {
    type: DELETE_SHOW
  };
};
