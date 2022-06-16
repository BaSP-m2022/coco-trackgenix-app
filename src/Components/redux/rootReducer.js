import { combineReducers } from 'redux';
import { adminReducer } from './modules/admins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';

const rootReducer = combineReducers({ admin: adminReducer, tasks: tasksReducer });

export default rootReducer;
