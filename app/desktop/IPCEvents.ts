import { ipcMain } from 'electron';
import Database from "./Database";
import Config from "./Config";
import IPCConstants from "../utils/IPCConstants";

function getInstances(event, database) {
  database.instances.findAll()
    .then(data => event.sender.send(IPCConstants.GET_INSTANCES(true), null, data))
    .catch(err => event.sender.send(IPCConstants.GET_INSTANCES(true), err));
}

export default class IPCEvents {
  database: Database;
  config: Config;

  constructor(database: Database, config: Config) {
    this.database = database;
    this.config = config;
    this.initEvents();
  }

  initEvents() {
    ipcMain.on(IPCConstants.GET_INSTANCES(), event => getInstances(event, this.database));
  }
}
