/* global window:false, document:false */
import React from 'react';
import _ from 'lodash';

import Nav from './nav';

export default class ScrollNav extends React.Component {
  static propTypes = {
    overlay: React.PropTypes.bool,
  }

  static defaultProps = {
    overlay: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      hint: false,
    };
    this.lastScrollTop = -100;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = _.throttle(() => {
    if (document.documentElement.scrollTop > this.lastScrollTop) {
      this.onScrollDown();
    } else {
      this.onScrollUp();
    }
    this.lastScrollTop = document.documentElement.scrollTop;
  }, 100);


  onScrollDown = () => {
    if (this.state.hint) {
      return;
    }

    this.setState({ hint: true });
    _.delay(() => this.setState({ hidden: false }), 200);
  }

  onScrollUp = () => {
    if (document.documentElement.scrollTop === 0) {
      // if it's still on top after 100ms, hide this nav
      _.delay(this.hideIfOnTop, 100);
    } else {
      this.setState({ hidden: false, hint: false });
    }
  }

  hideIfOnTop = () => {
    if (document.body.scrollTop === 0) {
      this.setState({ hidden: true, hint: false });
    }
  }

  get finalProps() {
    // if overlay is open,
    // ignore all these scroll events and keep the scrollnav visible
    return _.merge({}, this.props, {
      hidden: !this.props.overlay && this.state.hidden,
      hint: !this.props.overlay && this.state.hint,
      fixed: true,
      top: false,
      light: false,
    });
  }

  render() {
    return <Nav {...this.finalProps} />;
  }
}
