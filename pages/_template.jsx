import React from 'react';

import '../css/markdown-styles.css';
import '../css/legacy.scss';
import '../css/app.scss';

const Template = ({ children }) => (
  <div>
    {children}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Template;
