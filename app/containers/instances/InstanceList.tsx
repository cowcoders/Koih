import * as React from 'react';
import { connect } from "react-redux";
import { Button } from "react-photonkit";
// import { Pane } from 'react-photonkit';

import { loadInstances } from '../../actions/instance';

let styles = require('./InstanceList.scss');

interface IProperties {
  loadInstances: () => void,
  isLoading: boolean,
  hasErrored: boolean
}

interface IState {
  isLoading?: boolean,
  hasErrored?: boolean
}

class InstanceList extends React.Component<IProperties, IState> {
  constructor() {
    super();
    this.test = this.test.bind(this);
  }

  // componentDidMount() {
  //   this.props.loadInstances();
  // }

  test() {
    this.props.loadInstances();
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <Button onClick={this.test} glyph="home"/>
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

const mapStateToProps = (state) => {
  return {
    instances: state.instance.instances,
    hasErrored: state.instance.hasErrored,
    isLoading: state.instance.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInstances: () => dispatch(loadInstances())
  };
};

export default connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(InstanceList);
