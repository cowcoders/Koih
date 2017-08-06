import * as React from 'react';
import { connect } from "react-redux";
import { Button, Actionbar, ButtonGroup } from "react-photonkit";
import { withRouter } from 'react-router-dom';

import { loadInstances, newInstance } from '../../actions/instance';
import InstanceModel from "../../models/InstanceModel";

let styles = require('./InstanceList.scss');

interface IProperties {
  loadInstances: () => void,
  newInstance: (instance: InstanceModel) => void,
  isLoading: boolean,
  hasErrored: boolean,
  instances: [InstanceModel],
  history: any
}

interface IState {
  isLoading?: boolean,
  hasErrored?: boolean
}

class InstanceList extends React.Component<IProperties, IState> {
  constructor() {
    super();
    this.test = this.test.bind(this);
    this.goToSearchInstances = this.goToSearchInstances.bind(this);
  }

  componentDidMount() {
    this.props.loadInstances();
  }

  test() {
    const instance = new InstanceModel();
    instance.id = 1;
    instance.name = 'dummyInstnace';
    this.props.newInstance(instance);
  }

  goToSearchInstances() {
    this.props.history.push('/instance-search');
  }

  render() {
    const { instances } = this.props;
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <Actionbar>
          <ButtonGroup>
            <Button onClick={this.goToSearchInstances} glyph="search"/>
          </ButtonGroup>
        </Actionbar>
        <Button onClick={this.test} glyph="plus"/>
        <table className={styles.tableStriped}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
              <th>File Size</th>
            </tr>
          </thead>
          <tbody>
            {instances && instances.map(instance =>
              <tr>
                <td>{instance.id}</td>
                <td>{instance.name}</td>
              </tr>
            )}
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
    loadInstances: () => dispatch(loadInstances()),
    newInstance: (instance: InstanceModel) => dispatch(newInstance(instance))
  };
};

const InstanceListConnected: any = connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(InstanceList);

export default withRouter(InstanceListConnected);
