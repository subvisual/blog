import React from 'react';

import EngagementLink from './engagement_link';

const year = () => new Date().getFullYear();

const AtSign = '@';

const Footer = () => (
  <div className="Footer">
    <div className="Footer-credits">
      <span className="Footer-handcrafted">Handcrafted by</span>
      <span className="Footer-subvisual">SUBVISUAL</span>
      <span className="Footer-copyright">{AtSign} {year()} Copyright by Subvisual</span>
    </div>

    <a className="Footer-work" href="https://subvisual.co/hire-us">
      <span className="Footer-interested">Interested in our services?</span>
      <div className="Footer-workText">
        <EngagementLink>
          Let&apos;s get to work
        </EngagementLink>
      </div>
    </a>
  </div>
);

export default Footer;
