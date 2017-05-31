import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import TagHero from '../../components/tag_hero';
import PostCount from '../../components/post_count';
import Separator from '../../components/separator';

const JsonTag = ({ tag, route }) => {
  const posts = route.page.data;
  const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${capitalizedTag}`} 
    />
    <Navigation light />
    <TagHero tag={tag} />
    <div className="u-smallMargin" />
    <div className="PostWidthConstrainer">
      <PostCount modifier={tag} count={posts.length} />
    </div>
    <div className="u-navPlaceholder" />
    <PostList posts={posts} />
    <Separator />
  </div>
};

JsonTag.propTypes = {
  route: PropTypes.object,
  tag: PropTypes.string.isRequired,
};

export default JsonTag;
