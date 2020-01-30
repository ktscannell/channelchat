import React from 'react';

// const ClientHeader = ({currentChannel, logout}) => {
//   let title;
//   if (currentChannel) {
//     title = `#${currentChannel.title}`;
//   } else {
//     title = "Select a Channel"
//   }
//   return (
//     <header className="client-header">
//       <h1>{title}</h1>
//       <button className="button-main" onClick={logout}>Log Out</button>
//     </header>
//   );
// }



class ClientHeader extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.channelId !== this.props.match.params.channelId
    ) {
      
    }
  }

  render () {
    let title;
    if (this.props.channel) {
      title = `#${this.props.channel.title}`;
    } else {
      title = "Select a Channel";
    }
    return (
      <header className="client-header">
        <h1>{title}</h1>
        <button className="button-main" onClick={this.props.logout}>Log Out</button>
      </header>
    );
  }
}

export default ClientHeader;