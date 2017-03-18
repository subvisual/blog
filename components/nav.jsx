import React from 'react';

import logoColor from '../images/logo-color.svg';

export default class Nav extends React.Component {
  render() {
    return <header className='Nav Nav--topPositioned' aria-label='Main navigation'>
      <a href="https://subvisual.co" className="Nav-logo">
        <div className="NavLogo">
          <div dangerouslySetInnerHTML={{__html: logoColor}} />
        </div>
      </a>
      <div className="Nav-menu">
        <div className="Burger">
          <div className="Burger-line"></div>
          <div className="Burger-line"></div>
          <div className="Burger-line"></div>
        </div>
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
          <li className="Nav-item">
            <a className="Nav-link" href="https://subvisual.co/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  }
}
