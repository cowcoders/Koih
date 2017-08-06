export default class Config {
  userDataPath: string;
  version: string;

  constructor(app, pkg) {
    this.userDataPath = app.getPath('userData');
    this.version = pkg.version;
  }
}
