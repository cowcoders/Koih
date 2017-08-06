export default class Config {
  userDataPath: string;

  constructor(app) {
    this.userDataPath = app.getPath('userData');
  }
}
