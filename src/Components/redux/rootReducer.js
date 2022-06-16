import { combineReducers } from 'redux';
import { employeeReducer } from './modules/employees/reducer';
import { adminReducer } from './modules/admins/reducer';
import { tasksReducer } from './/modules/tasks/reducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  tasks: tasksReducer,
  employee: employeeReducer
});

export default rootReducer;
