import React from 'react';
import Helmet from 'react-helmet';
import { config } from '../config.toml';
import _ from 'lodash';

import Navigation from '../components/nav';
import PostIntro from '../components/post_intro';

import recentPosts from 'data/_generated/recent_posts.json';

const Index = () => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Navigation />
    <div className="u-navPlaceholder" />
    {_.map(recentPosts, (post) =>
      <PostIntro key={post.path} post={post} />
    )}
    <div className="u-navPlaceholder" />
  </div>
);

export default Index;
