import { combineReducers } from 'redux';
import { superAdminsReducer } from './modules/superAdmins/reducer';

const rootReducer = combineReducers({ superadmin: superAdminsReducer });

export default rootReducer;
