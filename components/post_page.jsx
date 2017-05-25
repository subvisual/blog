import React from 'react';

import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';
import Separator from '../components/separator';
import Author from '../components/author';
import HireUs from '../components/hire_us';

const ProcessedPostBody = ({ body }) => (
  post.body.replace(/(href="http)/g, 'target="_blank" $1')
);

const PostPage = ({ post }) => (
  /* eslint-disable react/no-danger */
  <div>
    <PostHero {...post} />
    <div className="u-xSmallThenSmallMargin" />
    <div className="PostWidthConstrainer">
      <TagList tags={post.tags} />
      <div className="u-smallThenDefaultMargin" />
    </div>

    <div className="PostBody" dangerouslySetInnerHTML={{ __html: ProcessedPostBody(post) }} />

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
  /* eslint-enable react/no-danger */
);

PostPage.propTypes = {
  post: React.PropTypes.shape({
    author: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    body: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPage;
