import * as DataStore from 'nedb';
import InstanceModel from "../../models/InstanceModel";

export default class Instances {
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
      this.dataStore.insert(instance, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}
