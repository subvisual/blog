import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import TagHero from '../../components/tag_hero';
import PostCount from '../../components/post_count';

const JsonTag = props => {
  const posts = props.route.page.data;

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${posts.title}`} 
    />
    <Navigation light />
    <TagHero tag={props.tag} />
    <div className="u-smallMargin" />
    <div className="PostWidthConstrainer">
      <PostCount modifier={props.tag} count={posts.length} />
    </div>
    <div className="u-navPlaceholder" />
    <PostList posts={posts} />
  </div>
};

JsonTag.propTypes = {
  route: PropTypes.object,
  tag: PropTypes.string.isRequired,
};

export default JsonTag;
