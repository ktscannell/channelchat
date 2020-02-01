import React from 'react';
import MessageDetail from './message_detail';

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
    const { messages, authors } = this.props;
    
    const list = messages.map(message => {
      const author = authors[message.author_id];
      return (
        <MessageDetail key={message.id} message={message} author={author} />
      );
    });
    return <ul className="messages-list">{list}</ul>;
  }
}

export default ChannelShow;