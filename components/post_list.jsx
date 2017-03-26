import React from 'react';
import _ from 'lodash';

import PostIntro from '../components/post_intro';

const PostList = ({ posts }) => (
  <div>
    {_.map(posts, post =>
      <PostIntro key={post.path} post={post} />,
    )}
  </div>
);

export default PostList;
