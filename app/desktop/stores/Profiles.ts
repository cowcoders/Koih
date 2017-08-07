import * as DataStore from 'nedb';
import * as uuidV1 from 'uuid/v1';
import InstanceModel from "../../models/ProfileModel";

export default class Profiles {
  private dataStore: DataStore;

  constructor(filename: string) {
    this.dataStore = new DataStore({ filename: filename, autoload: true });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.dataStore.find({}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }

  insert(instance: InstanceModel) {
    return new Promise((resolve, reject) => {
      // Check instance ID
      if (!instance.id) instance.id = uuidV1();
      this.dataStore.insert(instance, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}
