import React from 'react';
import classnames from 'classnames';

import Burger from './burger';
import Logo from './logo';

import '../../css/components/nav.scss';

export default class Nav extends React.Component {
  static propTypes = {
    onBurgerClick: React.PropTypes.func.isRequired,
    top: React.PropTypes.bool,
    fixed: React.PropTypes.bool,
    light: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    hint: React.PropTypes.bool,
    overlay: React.PropTypes.bool,
    className: React.PropTypes.string,
    burgerClasses: React.PropTypes.string,
  }

  static defaultProps = {
    top: true,
    light: false,
    hint: false,
    fixed: false,
    hidden: false,
    overlay: false,
    className: '',
    burgerClasses: '',
  };

  navClasses() {
    return classnames({
      Nav: true,
      'Nav--top': this.props.top,
      'Nav--fixed': this.props.fixed,
      'Nav--hint': this.props.hint,
      'Nav--light': this.props.light,

      'is-hidden': this.props.hidden,
      'is-open': this.props.overlay,
      [this.props.className]: true,
    });
  }

  render() {
    return <header className={this.navClasses()} aria-label="Main navigation">

      <div className="Nav-logo">
        <Logo mono={!this.props.overlay && this.props.light} />
      </div>

      <div className="Nav-menu">
        <Burger
          onClick={this.props.onBurgerClick}
          open={this.props.overlay}
          light={this.props.light}
          className={this.props.burgerClasses}
        />
      </div>

      <nav className="Nav-itemsWrapper">
        <ul className="Nav-items">
          <li className="Nav-item">
            <a className="Nav-link" href="https://subvisual.co/work">Work</a>
          </li>
          <li className="Nav-item">
            <a className="Nav-link" href="https://subvisual.co/company">Company</a>
          </li>
          <li className="Nav-item">
            <a className="Nav-link" href="https://subvisual.co/community">Community</a>
          </li>
          <li className="Nav-item is-selected">
            <a className="Nav-link" href="https://subvisual.co/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>;
  }
}
