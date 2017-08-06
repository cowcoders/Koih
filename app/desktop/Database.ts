import { join } from 'path';
import Config from "./Config";
import Instances from "./stores/Instances";

export default class Database {
  public instances: Instances;

  constructor(config: Config) {
    console.log(`Databases... ${join(config.userDataPath, 'misc.db')}`);
    this.instances = new Instances(join(config.userDataPath, 'instances.db'));
  }
}
