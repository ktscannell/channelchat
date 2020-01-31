import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import ClientHeaderContainer from '../client_header/client_header_container';
import ChannelShowContainer from '../channel_show/channel_show_container';
import { Route } from 'react-router-dom';

const Client = () => (
  <div className="client">
    <SidebarContainer />
    <main className="client-main">
      <ClientHeaderContainer />
      <Route exact path="/channels/:channelId" component={ChannelShowContainer} />
      {/* <Route exact path="/channels" component={ChannelSplash} />
      <ChannelFormContainer /> */}
    </main>
  </div>
);

export default Client;