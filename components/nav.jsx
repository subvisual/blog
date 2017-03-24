import React from 'react';

import Nav from './nav/nav';
import ScrollNav from './nav/scroll_nav';
import Overlay from './nav/overlay';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
    };
  }

  toggleOverlay = () => {
    this.setState({ overlay: !this.state.overlay });
  }

  render = () => (
    <div>
      <Nav {...this.props} {...this.state} onBurgerClick={this.toggleOverlay} />
      <ScrollNav {...this.props} {...this.state} onBurgerClick={this.toggleOverlay} />
      <Overlay open={this.state.overlay} />
    </div>
  )
}
