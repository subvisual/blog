import React from 'react';
import Helmet from 'react-helmet';

import { config } from '../config.toml';

import Navigation from '../components/nav';
import PostList from '../components/post_list';
import Separator from '../components/separator';

import recentPosts from '../data/_generated/recent_posts.json';

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
    <PostList posts={recentPosts} />
    <div className="u-navPlaceholder" />
    <Separator />
    <div className="u-smallThenLargeMargin" />
  </div>
);

export default Index;
