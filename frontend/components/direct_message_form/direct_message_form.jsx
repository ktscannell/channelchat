import React from 'react';
import { Link } from 'react-router-dom';

class DirectMessageForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { member_ids: [] }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.requestAllUsers();
  }

  handleClick (e) {
    const currentTarget = e.currentTarget;
    let member_ids;
    // Toggle 'selected' class for each element and set state accordingly
    if (currentTarget.classList.contains('selected')) {
      currentTarget.classList.remove('selected');
      member_ids = this.state.member_ids.filter(id => (
        id !== currentTarget.dataset.key
      ));
      this.setState({ member_ids });
    } else {
      currentTarget.classList.add('selected');
      member_ids = this.state.member_ids;
      member_ids.push(currentTarget.dataset.key);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const directChannel = Object.assign({}, this.state);
    debugge
    this.props.createDirectMessage(directChannel);
  }

  render () {
    const list = this.props.users.map(user => {
      return (
        <li key={user.id} data-key={user.id} onClick={this.handleClick}>
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
        <Link to="/channels">X</Link>
        <button onClick={this.handleSubmit}>Go</button>
        <ul>{list}</ul>
      </main>
    )
  }
}

export default DirectMessageForm;