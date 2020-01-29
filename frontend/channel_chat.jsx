import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// TESTING START
// import { fetchAllChannels } from './util/channel_api_util'
import { requestAllChannels } from './actions/channel_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  
  // Bootstrap current user
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

  // TESTING START
  window.dispatch = store.dispatch;
  window.requestAllChannels = requestAllChannels;
  // TESTING END
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});