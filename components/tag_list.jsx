import React from 'react';
import _ from 'lodash';

import '../css/components/tag_list.scss';

const renderTags = tags => (
  _.map(tags, (tag) => {
    const classes = `Tag Tag--${tag}`;

    return <div key={tag} className={classes}>{tag}</div>;
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
