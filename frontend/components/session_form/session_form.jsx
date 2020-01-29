import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = {
      username: 'Demo User',
      password: 'hunter12'
    }
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let demoLoginButton;
    if (this.props.formType === "Log In") {
      demoLoginButton = 
        <button onClick={this.handleDemoLogin} className="button-main">
          Continue as Demo User
        </button>;
    }

    return (
      <div className="login-form-container">
        <form className="login-form-box">
          <h1>{this.props.formType}</h1>
          {this.renderErrors()}
          <div className="login-form">
              
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input" />
              
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input" />
            
            <button onClick={this.handleSubmit} className="button-main">Continue</button>
            {demoLoginButton}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
