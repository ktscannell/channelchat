import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-nav">
      <Link className="header-link" to="/login">Log In</Link>
      <button className="button-main button-greeting">
        <Link className="header-button" to="/signup">Sign Up</Link>
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-nav">
      <span>{currentUser.username}</span>
      <button className="button-main button-greeting" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
