import * as DataStore from 'nedb';
import { join } from 'path';
import Config from "./Config";

export default class Database {
  instancesDS: DataStore;

  constructor(config: Config) {
    console.log(`Databases... ${join(config.userDataPath, 'misc.db')}`);
    this.instancesDS = new DataStore({ filename: join(config.userDataPath, 'instances.db'), autoload: true });
  }
}
