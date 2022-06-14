import { combineReducers } from 'redux';
import { adminReducer } from './modules/admins/reducer';

const rootReducer = combineReducers({ admin: adminReducer });

export default rootReducer;
