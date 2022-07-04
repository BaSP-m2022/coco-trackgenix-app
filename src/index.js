import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Components/Routes';
import './index.css';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
