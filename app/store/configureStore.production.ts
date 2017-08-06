import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import IPCClient from "../helpers/ipc/IPCClient";
import ipcMiddleware from "./middleware/ipc";

const history = createBrowserHistory();

export = {
  history,
  configureStore(ipcClient: IPCClient, initialState: Object | void) {
    const router = routerMiddleware(history);
    const enhancer = applyMiddleware(ipcMiddleware(ipcClient), thunk, router);
    return createStore(rootReducer, initialState, enhancer);
  }
};
