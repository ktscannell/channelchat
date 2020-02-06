import React from 'react';

class DirectMessageForm extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.requestAllUsers();
  }

  handleClick (e) {
    
  }

  handleSubmit (e) {
    e.preventDefault();
    const userIds = Object.values(this.state).map(user => user.id)
    const 
    this.props.createDirectMessage(userIds);
  }

  render () {
    const list = this.props.users.map(user => {
      return (
        <li onClick={this.handleClick}>
          <img src={window.accountURL} />
          <p>{user.username}</p>
        </li>
      );
    });
    const inputValue = Object.values(this.state)
      .map(user => user.username).join(', ');

    return (
      <main className="direct-form-container">
        <h1>Direct Messages</h1>
        <Link to="/messages">X</Link>
        <form onSubmit={this.handleSubmit}>
         <input type="text" value={inputValue} readOnly/>
          <button>Go</button>
        </form>
        <ul>{list}</ul>
      </main>
    )
  }
}

export default DirectMessageForm;