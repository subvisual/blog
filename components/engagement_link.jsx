import React from 'react';

import arrow from '../images/link-arrow-white.svg';

const EngagementLink = ({ children }) => (
  /* eslint-disable react/no-danger */
  <div className="EngagementLink">
    {children}
    <div className="EngagementLink-icon" dangerouslySetInnerHTML={{ __html: arrow }} />
  </div>
  /* eslint-enable react/no-danger */
);

EngagementLink.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default EngagementLink;
