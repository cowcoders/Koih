import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import InstanceList from './containers/instances/InstanceList';
import InstanceSearch from "./containers/instances/InstanceSearch";
import ProfileList from "./containers/profiles/ProfileList";
import NewProfile from "./containers/profiles/NewProfile";

export default () => (
  <App>
    <Switch>
      <Route path="/instance-list" component={InstanceList}/>
      <Route path="/instance-search" component={InstanceSearch}/>

      <Route path="/profile-list" component={ProfileList}/>
      <Route path="/profile-new" component={NewProfile}/>

      <Route path="/" component={HomePage}/>
    </Switch>
  </App>
);
