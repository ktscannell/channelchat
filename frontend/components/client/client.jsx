import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';

const Client = () => (
  <div className="client-container">
    <SidebarContainer />
    {/* <ClientHeader />
    <Route exact path="/channels" component={ChannelSplash} />
    <Route exact path="/channels/:channelId" component={ChannelShowContainer} />
    <ChannelFormContainer /> */}
  </div>
);

export default Client;