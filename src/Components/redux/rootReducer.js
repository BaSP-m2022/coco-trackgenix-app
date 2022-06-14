import { combineReducers } from 'redux';
import { superAdminsReducer } from './modules/superAdmins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';

const rootReducer = combineReducers({ superadmins: superAdminsReducer, tasks: tasksReducer });

export default rootReducer;
