import { combineReducers } from 'redux';
import { superAdminsReducer } from './modules/superAdmins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';
import { adminReducer } from './modules/admins/reducer';

const rootReducer = combineReducers({
  superadmins: superAdminsReducer,
  admin: adminReducer,
  tasks: tasksReducer
});

export default rootReducer;
