import * as React from 'react';
// import { Pane } from 'react-photonkit';

let styles = require('./InstanceList.scss');

export default class InstanceList extends React.Component<any, any> {
  render() {
    return (
      <div>
        <table className={styles.tableStriped}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
              <th>File Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            ...
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
