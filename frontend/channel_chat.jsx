import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// Testing start
import * as sessionApiUtil from './util/session_api_util';
// Testing end

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // Testing start
  window.login = sessionApiUtil.login;
  window.signup = sessionApiUtil.signup;
  window.logout = sessionApiUtil.logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing end
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to channelchat</h1>, root);
});