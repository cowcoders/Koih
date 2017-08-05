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
    switch (index) {
      case 1:
        this.props.history.push('/instance-list');
        break;
      case 2:
        this.props.history.push('/');
        break;
      case 3:
        this.props.history.push('/');
        break;
      default:
      //throw new Error(`Unexpected index ${index}`);
    }
  }

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>nav group icon &amp; text</NavTitle>
          <NavGroupItem eventKey={1} glyph="monitor" text="Instances"/>
          <NavGroupItem eventKey={2} glyph="user" text="Profiles"/>
          <NavGroupItem eventKey={3} glyph="key" text="Keys"/>
        </NavGroup>
      </Pane>
    );
  }
}

export default withRouter(Sidebar);
