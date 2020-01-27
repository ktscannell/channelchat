import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// Testing start
// import * as sessionApiUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
// Testing end

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // Testing start
  // window.login = sessionApiUtil.login;
  // window.signup = sessionApiUtil.signup;
  // window.logout = sessionApiUtil.logout;

  window.login = login;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing end
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});