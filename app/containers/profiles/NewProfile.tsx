import * as React from 'react';
import { connect } from "react-redux";
// import { Button, Actionbar, ButtonGroup } from "react-photonkit";
import { withRouter } from 'react-router-dom';

import ProfileModel from "../../models/ProfileModel";
import NewProfileForm from "../../components/profiles/NewProfileForm";

// let styles = require('./ProfileList.scss');

// FIXME https://davidkpiano.github.io/react-redux-form/

interface IProperties {
  newProfile: (profile: ProfileModel) => void,
}

interface IState {
}

class NewProfile extends React.Component<IProperties, IState> {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(instance: ProfileModel) {
    this.props.newProfile(instance);
  }

  render() {
    return (
      <NewProfileForm/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // instances: state.instance.instances,
    // hasErrored: state.instance.hasErrored,
    // isLoading: state.instance.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NewProfileConnected: any = connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(NewProfile);

export default withRouter(NewProfileConnected);
