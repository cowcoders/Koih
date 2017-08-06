import * as React from 'react';
import { connect } from "react-redux";
// import { Button, Actionbar, ButtonGroup } from "react-photonkit";
import { withRouter } from 'react-router-dom';

// import { loadInstances, newInstance } from '../../actions/instance';
import InstanceModel from "../../models/InstanceModel";
import { searchInstances } from "../../actions/instance";

// let styles = require('./InstanceList.scss');

interface IProperties {
  searchInstances: () => [InstanceModel],
  error: string
}

interface IState {
  isLoading?: boolean,
  error?: string
}

class InstanceSearch extends React.Component<IProperties, IState> {

  componentDidMount() {
    this.props.searchInstances();
  }

  render() {
    if (this.props.error) {
      return <p>Sorry! There was an error loading the items: <span>{this.props.error}</span></p>;
    }
    return <p>Sorry! There was an error loading the items</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    instances: state.instance.instances,
    error: state.instance.error,
    isLoading: state.instance.isLoading
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    searchInstances: () => dispatch(searchInstances())
  };
};

const InstanceSearchConnected: any = connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(InstanceSearch);

export default withRouter(InstanceSearchConnected);
