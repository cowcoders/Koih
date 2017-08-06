import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import InstanceList from './containers/instances/InstanceList';
import InstanceSearch from "./containers/instances/InstanceSearch";

export default () => (
  <App>
    <Switch>
      <Route path="/instance-list" component={InstanceList}/>
      <Route path="/instance-search" component={InstanceSearch}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </App>
);
