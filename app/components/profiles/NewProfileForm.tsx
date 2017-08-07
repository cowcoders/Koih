import * as React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import ProfileModel from "../../models/ProfileModel";

interface IProperties {
  onSubmit: (profile: ProfileModel) => void,
}

interface IState {
}

export default class NewProfileForm extends React.Component<IProperties, IState> {
  handleSubmit(values) {
    this.props.onSubmit(values);
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Control.text model=".name"/>
        <button type="submit">New profile</button>
      </LocalForm>
    )
  }
}
