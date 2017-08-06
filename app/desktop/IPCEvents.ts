import { ipcMain } from 'electron';
import Database from "./Database";
import Config from "./Config";
import IPCConstants from "../utils/IPCConstants";
import InstanceModel from "../models/InstanceModel";
import { searchInstances as awsSearchInstances } from "./utils/aws";

function getInstances(event, database) {
  database.instances.findAll()
    .then(data => event.sender.send(IPCConstants.GET_INSTANCES(true), null, data))
    .catch(err => event.sender.send(IPCConstants.GET_INSTANCES(true), err));
}

function newInstance(event, instance, database) {
  database.instances.insert(instance)
    .then(data => event.sender.send(IPCConstants.NEW_INSTANCE(true), null, data))
    .catch(err => event.sender.send(IPCConstants.NEW_INSTANCE(true), err));
}

function searchInstances(event) {
  awsSearchInstances()
    .then(instances => event.sender.send(IPCConstants.SEARCH_INSTANCES(true), null, instances))
    .catch(err => event.sender.send(IPCConstants.SEARCH_INSTANCES(true), err));
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
    ipcMain.on(IPCConstants.NEW_INSTANCE(), (event, instance: InstanceModel) => newInstance(event, instance, this.database));
    ipcMain.on(IPCConstants.SEARCH_INSTANCES(), event => searchInstances(event));
  }
}
