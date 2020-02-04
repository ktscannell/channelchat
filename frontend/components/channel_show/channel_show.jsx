import React from 'react';
import MessageDetail from './message_detail';
import { ActionCableConsumer } from 'react-actioncable-provider';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);

    // this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleChannel(this.props.match.params.channelId);
    // debugger;
    App.cable.subscriptions.create(
      { 
        channel: "MessagesChannel",
        room: this.props.match.params.channelId
      },
      {
        received: message => {
          this.props.receiveMessage(message)
        },
        // speak: function (data) {
        //   return this.perform("speak", data);
        // }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelId !== this.props.match.params.channelId
    ) {
      this.props.requestSingleChannel(this.props.match.params.channelId);
      
      App.cable.subscriptions.create(
        {
          channel: "MessagesChannel",
          room: this.props.match.params.channelId
        },
        {
          received: message => {
            this.props.receiveMessage(message)
          },
          // speak: function (data) {
          //   return this.perform("speak", data);
          // }
        }
      );
    }
  }

  // handleReceivedMessage (response) {
  //   const { author, body } = response;
  //   debugger;
  // }

  render () {
    const { messages, authors } = this.props;
    const list = messages.map(message => {
      const author = authors[message.author_id];
      return (
        <MessageDetail key={message.id} message={message} author={author} />
      );
    });
    return (
      // <ActionCableConsumer channel={{
      //   channel: 'MessagesChannel',
      //   room: this.props.match.params.channel_id
      //   }}
      //   onReceived={this.handleReceivedMessage}>
      // </ActionCableConsumer>
          <div>
            <ul className="messages-list">{list}</ul>
          </div>
    );
  }
}

export default ChannelShow;