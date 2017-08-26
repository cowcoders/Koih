import { BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import { isProduction } from "./misc";

export default class AppUpdater {
  lastVersion;

  constructor() {
    if (isProduction()) {
      autoUpdater.signals.updateDownloaded(it => {
        this.lastVersion = it.version;
        notify(it.version);
      });
      autoUpdater.checkForUpdates();
    }
  }

  restart() {
    autoUpdater.quitAndInstall();
  }
}

function notify(versionNumber) {
  let windows = BrowserWindow.getAllWindows();
  if (windows.length > 0) {
    windows[0].webContents.send('new-version-number', versionNumber);
  }
}
