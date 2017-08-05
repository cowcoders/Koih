import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import InstanceList from './containers/instances/InstanceList';

export default () => (
  <App>
    <Switch>
      <Route path="/instance-list" component={InstanceList}/>
      <Route path="/counter" component={CounterPage}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </App>
);
