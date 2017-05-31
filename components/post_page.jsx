import React, { PropTypes } from 'react';
import Helmet from 'react-helmet'
import { config } from 'config'

import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';
import Separator from '../components/separator';
import Author from '../components/author';
import HireUs from '../components/hire_us';
import Comments from '../components/comments';

const ProcessedPostBody = ({ body }) => (
  body.replace(/(href="http)/g, 'target="_blank" $1')
);

const PostPage = ({ post }) => (
  /* eslint-disable react/no-danger */
  <div>
    <Helmet
      title={`${config.siteTitle} | ${data.title}`} 
    />
    <PostHero {...post} />
    <div className="u-xSmallThenSmallMargin" />
    <div className="PostWidthConstrainer">
      <TagList tags={post.tags} />
      <div className="u-smallThenDefaultMargin" />
    </div>

    <div
      className="PostBody"
      dangerouslySetInnerHTML={{ __html: ProcessedPostBody(post) }}
    />

    <div className="PostWidthConstrainer">
      <div className="u-defaultThenLargeMargin" />
      <Separator />
      <div className="u-defaultThenLargeMargin" />
      <Comments
        id={(post.legacy_id || post.title).toString()}
        title={post.title}
        path={post.path}
      />
      <div className="u-defaultThenLargeMargin" />
      <Separator />
      <div className="u-defaultThenLargeMargin" />
      <Author slug={post.author} />
      <div className="u-defaultThenLargeMargin" />
      <HireUs />
      <div className="u-smallThenDefaultMargin" />
      <Separator />
      <div className="u-smallThenLargeMargin" />
    </div>
  </div>
  /* eslint-enable react/no-danger */
);

PostPage.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPage;
