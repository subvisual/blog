import React from 'react';

import TagList from '../components/tag_list';
import SmallAuthor from '../components/small_author';
import HireUs from '../components/hire_us';
import Separator from '../components/separator';

const markdownIt = require('markdown-it');

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const PostIntro = ({ post }) => (
  <div className="PostIntro">
    <div className="PostWidthConstrainer">
      <h2 className="PostIntro-heading">{post.title}</h2>
    </div>

    <div className="u-smallMargin" />

    <div className="PostBody" dangerouslySetInnerHTML={{ __html: md.render(post.intro) }} />

    <div className="PostWidthConstrainer">
      <TagList tags={post.tags} />
    </div>

    <div className="u-smallMargin" />

    <div className="PostWidthConstrainer">
      <SmallAuthor slug={post.author} date={post.date} />
    </div>
  </div>
);

PostIntro.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostIntro;
