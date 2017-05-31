import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import AuthorHero from '../../components/author_hero';
import PostCount from '../../components/post_count';
import Separator from '../../components/separator';

import Authors from '../../data/authors.yaml';

const JsonAuthor = props => {
  const posts = props.route.page.data;
  const authorData = Authors[props.author];

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${authorData.name}`} 
    />
    <Navigation light />
    <AuthorHero author={props.author} />
    <div className="u-smallMargin" />
    <div className="PostWidthConstrainer">
      <PostCount modifier={props.tag} count={posts.length} />
    </div>
    <div className="u-navPlaceholder" />
    <PostList posts={posts} />
    <Separator />
  </div>
};

JsonAuthor.propTypes = {
  route: PropTypes.object,
  author: PropTypes.string.isRequired,
};

export default JsonAuthor;
