import * as React from 'react';
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";

export default class Header extends React.Component {

  selectItem() {
    console.log('This');
  }

  render() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button onClick={this.selectItem} glyph="home"/>
            <Button onClick={this.selectItem} glyph="github"/>
            <Button onClick={this.selectItem} glyph="keyboard"/>
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    );
  }
}
