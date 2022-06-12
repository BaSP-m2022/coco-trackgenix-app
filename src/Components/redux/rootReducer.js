import { combineReducers } from 'redux';
import { employeeReducer } from './modules/employees/reducer';

const rootReducer = combineReducers({ employee: employeeReducer });

export default rootReducer;
