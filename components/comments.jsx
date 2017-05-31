import React, { PropTypes } from 'react';
import ReactDisqusThread from 'react-disqus-thread';

const Comments = ({ id, title, path }) => (
  <ReactDisqusThread
    shortname="groupbuddiesblog"
    identifier={id}
    title={title}
    url={path}
  />
);

Comments.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

Comments.defaultProps = {
};

export default Comments;
