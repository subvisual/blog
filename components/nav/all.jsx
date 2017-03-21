import React from 'react';

import Nav from './nav';
import ScrollNav from './scroll_nav';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
    }
  }

  toggleOverlay = () => {
    this.setState({ overlay: !this.state.overlay });
  }

  render() {
    return <div>
      <Nav {...this.props} {...this.state} onBurgerClick={this.toggleOverlay} />
      <ScrollNav {...this.props} {...this.state} onBurgerClick={this.toggleOverlay} />
    </div>
  }
}
