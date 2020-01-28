import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <header>
      <div className="header-container">
        <Link to="/"><h1>channelchat</h1></Link>
        <GreetingContainer />
      </div>
    </header>
    
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;