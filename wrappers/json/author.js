import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import AuthorHero from '../../components/author_hero';
import PostCount from '../../components/post_count';

const JsonAuthor = props => {
  const posts = props.route.page.data;

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${posts.title}`} 
    />
    <Navigation light />
    <AuthorHero author={props.author} />
    <div className="PostWidthConstrainer">
      <PostCount modifier={props.tag} count={posts.length} />
    </div>
    <div className="u-navPlaceholder" />
    <PostList posts={posts} />
  </div>
};

JsonAuthor.propTypes = {
  route: PropTypes.object,
  author: PropTypes.string.isRequired,
};

export default JsonAuthor;
