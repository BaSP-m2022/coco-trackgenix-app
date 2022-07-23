import {
  EDIT_HIDE,
  EDIT_SHOW,
  DELETE_HIDE,
  DELETE_SHOW
} from 'Components/redux/modules/table/constants';

const initialState = {
  dispalyEdit: true,
  displayDelete: true
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_HIDE: {
      return {
        ...state,
        dispalyEdit: false
      };
    }
    case EDIT_SHOW: {
      return {
        ...state,
        dispalyEdit: true
      };
    }
    case DELETE_HIDE: {
      return {
        ...state,
        displayDelete: false
      };
    }
    case DELETE_SHOW: {
      return {
        ...state,
        displayDelete: true
      };
    }
  }
};
