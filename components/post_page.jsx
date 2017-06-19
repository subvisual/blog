import React, { PropTypes } from 'react';

import Meta from '../components/meta';
import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';
import Separator from '../components/separator';
import Author from '../components/author';
import HireUs from '../components/hire_us';
import Comments from '../components/comments';
import Navigation from 'components/nav';

const ProcessedPostBody = ({ body }) => (
  body.replace(/(href="http)/g, 'target="_blank" $1')
);

const renderContent = (postData, children) => {
  if (children) {
    return <div className="PostBody">{children}</div>;
  } else {
    return <div
      className="PostBody"
      dangerouslySetInnerHTML={{ __html: ProcessedPostBody(postData) }}
    />;
  }
};

const PostPage = ({ postData, children }) => (
  /* eslint-disable react/no-danger */
  <div>
    <Meta
      title={postData.title}
      image={postData.cover}
      author={postData.author}
      type="article"
    />

    <Navigation light={!!postData.cover} />

    <PostHero {...postData} />
    <div className="u-xSmallThenSmallMargin" />
    <div className="PostWidthConstrainer">
      <TagList tags={postData.tags} />
      <div className="u-smallThenDefaultMargin" />
    </div>

    {renderContent(postData, children)}

    <div className="PostWidthConstrainer">
      <div className="u-defaultThenLargeMargin" />
      <Author slug={postData.author} />
      <div className="u-defaultThenLargeMargin" />
      <Comments
        id={postData.id.toString()}
        title={postData.title}
        path={postData.path}
      />
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
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    body: PropTypes.string,
  }).isRequired,
};

export default PostPage;
