import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Log In</h1>
          {this.renderErrors()}
          <div className="login-form">
              
              <input type="text"
                value={this.state.username}
                defaultValue="Username"
                onChange={this.update('username')}
                className="login-input" />
              
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
            
            <input className=".button-main" 
              type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
