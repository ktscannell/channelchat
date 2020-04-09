import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { Link, Route, Switch } from 'react-router-dom';
import SplashImg from './splash_img';
import { AuthRoute } from '../../util/route_util';

const Splash = () => (
  <div className="splash">
    <header className="splash-header">
      <div className="header-container">
        <div className="masthead">
          <img className="logo" src={window.iconURL} alt="Slack Logo"/>
          <Link to="/"><h1>ChannelChat</h1></Link>
        </div>
        <GreetingContainer />
      </div>
    </header> 
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route component={SplashImg} />
    </Switch>
    
  </div>
);

export default Splash;