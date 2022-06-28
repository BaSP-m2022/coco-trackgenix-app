import { combineReducers } from 'redux';
import { superAdminsReducer } from './modules/superAdmins/reducer';
import { employeeReducer } from './modules/employees/reducer';
import { adminReducer } from './modules/admins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';
import { projectReducer } from './modules/projects/reducer';
import { timesheetReducer } from './modules/timeSheets/reducer';
import { loginReducer } from './modules/auth/reducer';

const rootReducer = combineReducers({
  superadmins: superAdminsReducer,
  admin: adminReducer,
  tasks: tasksReducer,
  employee: employeeReducer,
  project: projectReducer,
  timesheet: timesheetReducer,
  login: loginReducer
});

export default rootReducer;
