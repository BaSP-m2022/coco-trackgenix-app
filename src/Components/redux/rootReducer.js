import { combineReducers } from 'redux';
import { adminReducer } from './modules/admins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';
import { employeeReducer } from './modules/employees/reducer';
import { projectReducer } from './modules/projects/reducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  tasks: tasksReducer,
  employee: employeeReducer,
  project: projectReducer
});

export default rootReducer;
