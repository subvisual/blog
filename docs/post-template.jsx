import React from 'react';
import PostPage from 'components/post_page';

const PostData = {
  // must be unique among all posts
  id: 139,

  // this won't actually be used by Gatsby, but is needed by Disqus to correctly
  // link the comments widget to the post
  // So it's important that it matches what gatsby will generate for this post
  // (see gatsby-node.js, rewritePath function)
  // The pattern is always: "/posts/<ID>-<NAME>"
  // This should also match the name of the file itself
  path: '/posts/139-testing',

  // Self explanatory
  title: 'Testing',

  // Your blog name, in downcase, no accents, and with spaces rather than spaces.
  // i.e.: joao-ferreira, luis-zamith
  // check data/authors.yaml if you have doubts
  author: 'miguel-palhas',

  // an array of tags to index your post
  // main tags are:
  //   - general,
  //   - development,
  //   - design,
  //   - community
  //
  // other than this, you can add your own custom tags if needed
  // (at most 2 per post, preferencially)
  tags: ['general'],

  // publication date
  // always in the format DD/MM/YYYY
  date: '06/06/2017',
};

const PostBody = () => (
  <PostPage post={PostData}>
    <p>asd</p>
  </PostPage>
);

export default PostBody;
