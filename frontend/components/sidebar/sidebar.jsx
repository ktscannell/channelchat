import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllChannels();
    App.cable.subscriptions.create(
      {
        channel: "ChannelsChannel",
        user_id: this.props.currentUser.id
      },
      {
        received: payload => {
          this.props.receiveDirectChannel(payload);
        }
      }
    );
  }

  render () {
    const { currentUser, channels, directChannels } = this.props;
    const list = channels.map(channel => (
      <li key={channel.id}>
        <NavLink exact to={`/channels/${channel.id}`} 
          className="sidebar-link"
          activeClassName="active-channel-link">
          &nbsp;#&nbsp;&nbsp; {channel.title}
        </NavLink>
      </li>
    ));

    const directList = directChannels.map(channel => (
      <li key={channel.id}>
        <NavLink exact to={`/channels/${channel.id}`}
          className="sidebar-link"
          activeClassName="active-channel-link">
          &nbsp;&nbsp;&nbsp; {channel.title}
        </NavLink>
      </li>
    ));

    return (
      <div className="sidebar">
        <div className="sidebar-top">
          <hgroup className="sidebar-header">
            <h1>ChannelChat</h1>
            <h5>{currentUser.username}</h5>
            {/* figure out how to render the green bubble for logged in */}
          </hgroup>

          <section className="sidebar-section">
            <h4>Channels</h4>
            <ul className="channels-list">{list}</ul>
          </section>

          <section className="sidebar-section">
            <div className="dm-header">
              <h4>Direct Messages</h4>
              <Link to="/directMessages/new">
                <i className="fas fa-plus-circle"></i>
              </Link>
            </div>
            <ul className="channels-list">{directList}</ul>
          </section>
        </div>
        <div className="sidebar-bottom">
          <h4>Made by Kieran Scannell</h4>
          <a className="sidebar-link sidebar-footer" href="http://kierantscannell.com" target="_blank">portfolio</a>
          <a className="sidebar-footer sidebar-link" href="http://linkedin.com/in/kierantscannell/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a className="sidebar-footer sidebar-link" href="http://github.com/ktscannell" target="_blank"><i className="fab fa-github"></i></a>
          <a className="sidebar-footer sidebar-link" href="http://angel.co/u/kieran-scannell" target="_blank"><i className="fab fa-angellist"></i></a>
        </div>
      </div>
    );
  }
}

export default Sidebar;