import * as React from 'react';
import { connect } from "react-redux";
import { Button, Actionbar, ButtonGroup } from "react-photonkit";
import { withRouter } from 'react-router-dom';

import { loadProfiles } from '../../actions/profiles';
import ProfileModel from "../../models/ProfileModel";

let styles = require('./ProfileList.scss');

interface IProperties {
  loadProfiles: () => void,
  isLoading: boolean,
  hasErrored: boolean,
  profiles: [ProfileModel],
  history: any
}

interface IState {
  isLoading?: boolean,
  hasErrored?: boolean
}

class ProfileList extends React.Component<IProperties, IState> {
  constructor() {
    super();
    this.goToSearchInstances = this.goToSearchInstances.bind(this);
  }

  componentDidMount() {
    this.props.loadProfiles();
  }

  goToSearchInstances() {
    this.props.history.push('/instance-search');
  }

  render() {
    const { profiles } = this.props;
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
        <table className={styles.tableStriped}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
              <th>File Size</th>
            </tr>
          </thead>
          <tbody>
            {profiles && profiles.map(profile =>
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
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
    loadProfiles: () => dispatch(loadProfiles())
  };
};

const ProfileListConnected: any = connect<IState, IProperties, {}>(mapStateToProps, mapDispatchToProps)(ProfileList);

export default withRouter(ProfileListConnected);
