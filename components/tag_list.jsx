import React from 'react';
import _ from 'lodash';

const renderTags = tags => (
  _.map(tags, (tag) => {
    const props = {
      key: tag,
      className: `Tag Tag--${tag}`,
      href: `/tags/${tag}/`,
    };

    return <a {...props}>{tag}</a>;
  })
);

const TagList = ({ tags }) => (
  <ul className="TagList">
    {renderTags(tags)}
  </ul>
);

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default TagList;
