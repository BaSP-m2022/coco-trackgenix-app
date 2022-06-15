import { combineReducers } from 'redux';
import { employeeReducer } from './modules/employees/reducer';
import { tasksReducer } from './/modules/tasks/reducer';

const rootReducer = combineReducers({ employee: employeeReducer, task: tasksReducer });

export default rootReducer;
