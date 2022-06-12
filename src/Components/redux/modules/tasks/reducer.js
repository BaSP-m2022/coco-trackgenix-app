import { ADD_TASKS_FULFILLED, DELETE_TASKS_FULFILLED, GET_TASKS_FULFILLED } from './constants';

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
    case ADD_TASKS_FULFILLED:
      return {
        ...state,
        list: [state.list, action.payload]
      };
    case DELETE_TASKS_FULFILLED:
      return {
        ...state,
        list: [state.list.filter((task) => task.id !== action.payload)]
      };
    default:
      return state;
  }
};
