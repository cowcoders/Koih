import * as React from 'react';
import { Link } from 'react-router-dom';
import { Pane } from 'react-photonkit';

let styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <Pane className="padded-more">
        <div>
          <div className={styles.container} data-tid="container">
            <h2>Home</h2>
            <Link to="/counter">to Counter</Link>
          </div>
        </div>
      </Pane>
    );
  }
}
