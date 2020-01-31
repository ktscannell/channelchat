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
      <li key={message.id}>{message.body}</li>
    ));
    return (
      <ul className="messages-list">{list}</ul>
    )
  }
}

export default ChannelShow;