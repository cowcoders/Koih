import * as React from 'react';
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component<any, any> {
  static propTypes = {
    match: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index) {
    console.log(`sidebar clicked with ${index}`);
    this.props.history.push(index);
  }

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey="/" onSelect={this.onSelect}>
          <NavTitle>Elements</NavTitle>
          <NavGroupItem eventKey="/" glyph="home" text="Home"/>
          <NavGroupItem eventKey="/instance-list" glyph="monitor" text="Instances"/>
          <NavGroupItem eventKey="/profile-list" glyph="user" text="Profiles"/>
        </NavGroup>
      </Pane>
    );
  }
}

export default withRouter(Sidebar);
