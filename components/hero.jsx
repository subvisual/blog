import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Hero = ({ tag, author, children }) => {
  const classes = classnames({
    Hero: true,
    'Hero--tag': tag,
    [`Hero--${tag}`]: tag,
    'Hero--author': author,
  });

  return <div className={classes}>
    <div className="Hero-content">{children}</div>
  </div>;
};

Hero.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  author: PropTypes.bool,
};

Hero.defaultProps = {
  tag: false,
  author: false,
};

export default Hero;
