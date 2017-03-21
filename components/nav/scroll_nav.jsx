import React from 'react';
import _ from 'lodash';

import Nav from './nav';

export default class ScrollNav extends React.Component {
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
    if (document.body.scrollTop > this.lastScrollTop) {
      this.onScrollDown();
    } else {
      this.onScrollUp();
    }
    this.lastScrollTop = document.body.scrollTop;
  }, 100);


  onScrollDown = () => {
    if (this.state.hint) {
      return;
    }

    this.setState({ hint: true });
    _.delay(() => this.setState({ hidden: false }), 200);
  }

  onScrollUp = () => {
    if (document.body.scrollTop === 0) {
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

  render() {
    return <Nav {...this.props} {...this.state} fixed top={false} light={false} />;
  }
}
