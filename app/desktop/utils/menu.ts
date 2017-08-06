const { Menu, shell, dialog } = require('electron');

export function getMenu(mainWindow, version) {
  if (process.platform === 'darwin') {
    return getDarwinMenu(mainWindow, version);
  }
  return getDefaultMenu(mainWindow, version);
}

function getDefaultMenu(mainWindow, version) {
  const template = [
    {
      label: '&File',
      submenu: [{
        label: '&Open',
        accelerator: 'Ctrl+O'
      }, {
        label: '&Close',
        accelerator: 'Ctrl+W',
        click() {
          mainWindow.close();
        }
      }]
    },
    {
      label: '&View',
      submenu: (process.env.NODE_ENV === 'development') ? [{
        label: '&Reload',
        accelerator: 'Ctrl+R',
        click() {
          mainWindow.webContents.reload();
        }
      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click() {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',
        click() {
          mainWindow.toggleDevTools();
        }
      }] : [{
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click() {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
      }]
    },
    {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('http://electron.atom.io');
        }
      }, {
        label: 'Documentation',
        click() {
          shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
        }
      }, {
        label: 'Community Discussions',
        click() {
          shell.openExternal('https://discuss.atom.io/c/electron');
        }
      }, {
        label: 'Search Issues',
        click() {
          shell.openExternal('https://github.com/atom/electron/issues');
        }
      }, {
        label: 'Version',
        click() {
          dialog.showMessageBox(mainWindow, { message: `Version: ${version}` });
        }
      }]
    }];
  return Menu.buildFromTemplate(template);
}

function getDarwinMenu(mainWindow, version) {
  const template = [
    {
      label: 'Help',
      submenu: [{
        label: 'Version',
        click() {
          dialog.showMessageBox(mainWindow, { message: `Version: ${version}` });
        }
      }]
    }
  ];
  return Menu.buildFromTemplate(template);
}
