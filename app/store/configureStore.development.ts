import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

import * as counterActions from '../actions/counter';
import IPCClient from "../helpers/ipc/IPCClient";
import ipcMiddleware from "./middleware/ipc";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(a: any): void;
};

declare const module: NodeModule & {
  hot?: {
    accept(...args: any[]): any;
  }
};

const actionCreators = Object.assign({}, counterActions, {
  push
});


const history = createHashHistory();

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actionCreators
  }) as any :
  compose;

export = {
  history,
  configureStore(ipcClient: IPCClient, initialState: Object | void) {
    const router = routerMiddleware(history);
    const logger = (<any>createLogger)({
      level: 'info',
      collapsed: true
    });
    const enhancer = composeEnhancers(applyMiddleware(ipcMiddleware(ipcClient), thunk, router, logger));
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
      );
    }

    return store;
  }
};
