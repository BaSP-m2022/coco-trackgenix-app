import { combineReducers } from 'redux';
import { adminsReducer } from './modules/admins/reducer';

const rootReducer = combineReducers({ admins: adminsReducer });

export default rootReducer;
