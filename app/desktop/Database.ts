import { join } from 'path';
import Config from "./Config";
import Instances from "./stores/Instances";
import Profiles from "./stores/Profiles";

export default class Database {
  public instances: Instances;
  public profiles: Profiles;

  constructor(config: Config) {
    console.log(`Databases... ${join(config.userDataPath, 'misc.db')}`);
    this.instances = new Instances(join(config.userDataPath, 'instances.db'));
    this.profiles = new Profiles(join(config.userDataPath, 'profiles.db'));
  }
}
