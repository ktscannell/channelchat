import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import ClientHeaderContainer from '../client_header/client_header_container';

const Client = () => (
  <div className="client">
    <SidebarContainer />
    <main className="client-main">
      <ClientHeaderContainer />
      {/* <Route exact path="/channels" component={ChannelSplash} />
      <Route exact path="/channels/:channelId" component={ChannelShowContainer} />
      <ChannelFormContainer /> */}
    </main>
  </div>
);

export default Client;