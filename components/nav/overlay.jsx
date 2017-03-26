import React from 'react';
import classnames from 'classnames';

export default class Overlay extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
  }

  get mainClasses() {
    return classnames({
      NavOverlay: true,
      'is-open': this.props.open,
    });
  }

  render() {
    return <div className={this.mainClasses}>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link" href="https://subvisual.co/work">Work</a>
      </div>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link" href="https://subvisual.co/company">Company</a>
      </div>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link" href="https://subvisual.co/community">Community</a>
      </div>
      <div className="NavOverlay-item is-selected">
        <a className="NavOverlay-link" href="https://subvisual.co/blog">Blog</a>
      </div>
    </div>;
  }
}
