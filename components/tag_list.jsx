import React from 'react';
import _ from 'lodash';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { prefixLink } from 'gatsby-helpers';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const renderTags = tags => (
  _.map(tags, (tag) => {
    const props = {
      key: tag,
      className: `Tag Tag--${tag}`,
      href: prefixLink(`/tags/${tag}/`),
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
