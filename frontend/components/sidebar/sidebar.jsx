import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllChannels();
  }

  render () {
    const { currentUser, channels } = this.props;
    const list = channels.map(channel => (
      <li key={channel.id}>{channel.title}</li>
    ));
    return (
      <div>
        <hgroup className="sidebar-header">
          <h1>ChannelChat</h1>
          <h4>{currentUser.username}</h4>
          {/* figure out how to render the green bubble for logged in */}
        </hgroup>
        <ul className="channels-list">{list}</ul>
      </div>
    );
  }
}

export default Sidebar;