import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const configureStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

export default store;
