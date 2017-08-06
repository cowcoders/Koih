import { ipcRenderer } from 'electron';

export default class IPCClient {
  send(channel, data) {
    return new Promise((resolve, reject) => {
      ipcRenderer.on(`${channel}:reply`, (event, err, values) => {
        if (err) {
          reject(err);
        } else {
          resolve(values);
        }
      });

      ipcRenderer.send(channel, data);
    });
  }
}
