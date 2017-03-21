import React from 'react';
import classnames from 'classnames';

export default class Overlay extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool,
  }

  static defaultProps = {
    open: false,
  }

  get mainClasses() {
    return classnames({
      'NavOverlay': true,
      'is-open': this.props.open,
    });
  }

  render() {
    return <div className={this.mainClasses}>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link">Work</a>
      </div>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link">Company</a>
      </div>
      <div className="NavOverlay-item">
        <a className="NavOverlay-link">Community</a>
      </div>
      <div className="NavOverlay-item is-selected">
        <a className="NavOverlay-link">Blog</a>
      </div>
    </div>;
  }
}
