import * as React from 'react';
import { Window, Content, PaneGroup, Pane } from 'react-photonkit';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";


export default class App extends React.Component {
  render() {
    return (
      <Window>
        <Header/>
        <Content>
          <PaneGroup>
            <Sidebar/>
            <Pane>
              {this.props.children}
            </Pane>
          </PaneGroup>
        </Content>
        <Footer/>
      </Window>
    );
  }
}
