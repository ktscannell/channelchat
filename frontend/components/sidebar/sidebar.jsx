import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <li key={channel.id}>
        <NavLink exact to={`/channels/${channel.id}`} 
          className="sidebar-link"
          activeClassName="active-channel-link">
          &nbsp;#&nbsp;&nbsp; {channel.title}
        </NavLink>
      </li>
    ));
    return (
      <div className="sidebar">
        <hgroup className="sidebar-header">
          <h1>ChannelChat</h1>
          <h5>{currentUser.username}</h5>
          {/* figure out how to render the green bubble for logged in */}
        </hgroup>
        <h4>Channels</h4>
        <ul className="channels-list">{list}</ul>
      </div>
    );
  }
}

export default Sidebar;