import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', channel_id: this.props.match.params.channelId };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createMessage({ message: this.state })
      .then(() => this.setState({ body: '' }));
  }

  render () {
    let title;
    const channel = this.props.currentChannel;
    if (channel) {
      title = channel.title;
    } else {
      title = '';
    }
    return (
      <div className="message-form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.body} onChange={this.handleChange}
            placeholder={`Message #${title}`}/>
        </form>
      </div>
    );
  }
}

export default MessageForm;