import { GET_TASKS_FULFILLED } from './constants';

const initialState = {
  list: []
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_FULFILLED:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
