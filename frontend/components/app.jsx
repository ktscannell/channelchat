import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Client from './client/client';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/channels" component={Client} />
      <Route component={Splash} />
    </Switch>
  </div>
);

export default App;