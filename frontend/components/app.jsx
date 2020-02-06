import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import DirectMessageFormContainer from './direct_message_form/direct_message_form_container';
import Splash from './splash/splash';
import Client from './client/client';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute 
        path="/directMessages/new" 
        component={DirectMessageFormContainer} />
      <ProtectedRoute path="/channels/:channelId" component={Client} />
      <ProtectedRoute path="/channels" component={Client} />
      <Route component={Splash} />
    </Switch>
  </div>
);

export default App;