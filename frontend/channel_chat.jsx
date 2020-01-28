import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// Testing start
// import * as sessionApiUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
// Testing end

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
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