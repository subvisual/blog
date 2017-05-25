import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import AuthorHero from '../../components/author_hero';

const JsonAuthor = props => {
  const data = props.route.page.data;

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${data.title}`} 
    />
    <Navigation light />
    <AuthorHero author={props.author} />
    <div className="u-navPlaceholder" />
    <PostList posts={data} />
  </div>
};

JsonAuthor.propTypes = {
  route: PropTypes.object,
  author: PropTypes.string.isRequired,
};

export default JsonAuthor;
