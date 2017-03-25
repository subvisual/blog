import React from 'react';

import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';
import Separator from '../components/separator';
import Author from '../components/author';
import HireUs from '../components/hire_us';

const PostPage = ({ post }) => (
  <div>
    <PostHero {...post} />
    <div className="u-xSmallThenSmallMargin"></div>
    <div className="PostWidthConstrainer">
      <TagList tags={post.tags} />
      <div className="u-smallThenDefaultMargin"></div>
    </div>

    <div className="Post">
      <div className="Post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>

    <div className="PostWidthConstrainer">
      <div className="u-defaultThenLargeMargin" />
      <Separator />
      <div className="u-defaultThenLargeMargin" />
      <Author slug={post.author} />
      <div className="u-defaultThenLargeMargin" />
      <HireUs />
      <div className="u-smallThenDefaultMargin" />
    </div>
  </div>
);

PostPage.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostPage;
