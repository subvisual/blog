import React from 'react';

// import '../css/components/engagement_link.scss';

const EngagementLink = ({ children }) => (
  <div className="EngagementLink EngagementLink--iconRight EngagementLink--light">
    {children}
  </div>
);

EngagementLink.propTypes = {
  children: React.PropTypes.node,
};

export default EngagementLink;
