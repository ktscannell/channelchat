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
    <div className="splash-main-container">
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route component={SplashImg} />
      </Switch>
      <footer className="footer">
        <div className="copy">
          <img className="footer-logo" src={window.iconURL} alt="Slack Logo" />
          <span className="created-by footer-item">created by Kieran Scannell in 2020</span>
        </div>
        <a className="footer-item" href="http://kierantscannell.com" target="_blank">portfolio</a>
        <a href="http://linkedin.com/in/kierantscannell/" target="_blank"><i className="fab fa-linkedin footer-icon"></i></a>
        <a href="http://github.com/ktscannell" target="_blank"><i className="fab fa-github footer-icon"></i></a>
        <a href="http://angel.co/u/kieran-scannell" target="_blank"><i className="fab fa-angellist footer-icon"></i></a>
      </footer>
    </div>
  </div>
);

export default Splash;