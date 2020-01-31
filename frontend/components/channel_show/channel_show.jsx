import React from 'react';

class ChannelShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleChannel(this.props.match.params.channelId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelId !== this.props.match.params.channelId
    ) {
      this.props.requestSingleChannel(this.props.match.params.channelId);
    }
  }

  render () {
    const list = this.props.messages.map(message => (
      <li key={message.id} className="message-container">
        {/* <img src="" alt=""/> */}
        <h4>{message.author}</h4>
        <p>{message.body}</p>
      </li>
    ));
    return (
      <ul className="messages-list">{list}</ul>
    )
  }
}

export default ChannelShow;