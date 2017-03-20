import React from 'react';

import logoColor from '../images/logo-color.svg';

export default class Footer extends React.Component {
  get year() {
    return new Date().getFullYear();
  }

  render() {
    return <div className="Footer">
      <div className="Footer-credits">
        <span className="Footer-handcrafted">Handcrafted by</span>
        <span className="Footer-subvisual">SUBVISUAL</span>
        <span className="Footer-copyright">@ {this.year} Copyright by Subvisual</span>
      </div>

      <a className="Footer-work" href="https://subvisual.co/hire-us">
        <span className="Footer-interested">Interested in our services?</span>
        <div className="Footer-workText">
          <div className="EngagementLink EngagementLink--iconRight EngagementLink--light">
            Let's get to work
          </div>
        </div>
      </a>
    </div>
  }
}
