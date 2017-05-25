import React, { PropTypes } from 'react';
import classnames from 'classnames';

const PostCount = ({ modifier, count }) => {
  const classes = classnames({
    ResultsCount: true,
    [`ResultsCount--${modifier}`]: modifier,
  });

  return <div className={classes}>
    {count} posts
  </div>
};

PostCount.propTypes = {
  modififer: PropTypes.string,
  count: PropTypes.number.isRequired,
};

PostCount.defaultProps = {
  modifier: null,
};

export default PostCount;
