import { combineReducers } from 'redux';
import { superAdminsReducer } from './modules/superAdmins/reducer';

const rootReducer = combineReducers({ superAdmin: superAdminsReducer });

export default rootReducer;
