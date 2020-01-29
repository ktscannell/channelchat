import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Client = () => (
  <div className="client-container">
    <header>
      <div className="header-container">
        <Link to="/"><h1>ChannelChat</h1></Link>
        <GreetingContainer />
      </div>
    </header>
    <h1>Client Goes Here</h1>
  </div>
);

export default Client;