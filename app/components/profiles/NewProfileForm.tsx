import * as React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import ProfileModel from "../../models/ProfileModel";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { newProfile } from "../../actions/profiles";

interface IProperties {
  onSubmit: (profile: ProfileModel) => void,
  history: any
}

interface IState {
}

class NewProfileForm extends React.Component<IProperties, IState> {
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
  }

  handleSubmit(values) {
    this.props.onSubmit(values);
  }

  cancel() {
    // TODO clean form
    this.props.history.push('/profile-list');
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Control.text model=".name"/>
        <button type="submit">New profile</button>
        <button onClick={this.cancel}>Cancel</button>
      </LocalForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (profile: ProfileModel) => dispatch(newProfile(profile))
  };
};

const NewProfileFormConnected: any = connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(NewProfileForm);

export default withRouter(NewProfileFormConnected);
