import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import TagList from '../components/tag_list';
import SmallAuthor from '../components/small_author';

const markdownIt = require('markdown-it');

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const PostIntro = ({ post }) => (
  <div className="PostIntro">
    <div className="PostWidthConstrainer">
      <h2 className="PostIntro-heading">
        <a className="PostIntro-link" href={prefixLink(post.path)}>{post.title}</a>
      </h2>
    </div>

    <div className="u-smallMargin" />

    <div className="PostBody" dangerouslySetInnerHTML={{ __html: md.render(post.intro) }} />

    <div className="PostWidthConstrainer">
      <TagList tags={post.tags} />
    </div>


    <div className="PostWidthConstrainer">
      <div className="u-smallMargin" />
      <SmallAuthor slug={post.author} date={post.date} />

      <div className="u-defaultMargin" />
      <div className="PostIntro-endLine" />
      <div className="u-defaultMargin" />
    </div>
  </div>
);

PostIntro.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    intro: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PostIntro;
