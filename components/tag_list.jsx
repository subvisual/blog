import React from 'react';
import _ from 'lodash';

import '../css/components/tag_list';

const renderTags = (tags) => {
  return _.map(tags, (tag) => {
    const classes = `Tag Tag--${tag}`;

    return <div key={tag} className={classes}>{tag}</div>
  });
}

const TagList = ({ tags }) => {
  return <ul className="TagList">
    {renderTags(tags)}
  </ul>
}

export default TagList;
