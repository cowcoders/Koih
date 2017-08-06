import { autoUpdater } from 'electron';
import { platform, arch } from 'os';

export function checkForUpdates() {
  if (process.env.NODE_ENV === 'production') {
    autoUpdater.checkForUpdates();
  }
}

export function initAutoUpdater(mainWindow, version) {
  const platformUrl = `${platform()}_${arch()}`;
  const updateURLFeed = `http://update.koih.cowcoders.com/update/${platformUrl}/${version}`;

  autoUpdater.addListener('update-available', () => {
    console.log('A new update is available');
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-available');
    }
  });

  autoUpdater.addListener('update-downloaded', (event, releaseNotes, releaseName) => {
    console.log('A new update is ready to install', `Version ${releaseName} is downloaded and will be automatically installed on Quit`);
    // FIXME
    // if (mainWindow) {
    //   mainWindow.webContents.send(IPC_UPDATE_MESSAGE, releaseNotes, releaseName);
    // }
  });

  autoUpdater.addListener('error', (error) => {
    console.error(error);
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-error');
    }
  });

  autoUpdater.addListener('checking-for-update', () => {
    console.log('Checking for update');
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'checking-for-update');
    }
  });

  autoUpdater.addListener('update-not-available', () => {
    console.log('Update not available');
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-not-available');
    }
  });

  autoUpdater.setFeedURL(updateURLFeed);
}
