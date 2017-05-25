import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';
import TagHero from '../../components/tag_hero';

const JsonTag = props => {
  const data = props.route.page.data;

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${data.title}`} 
    />
    <Navigation light />
    <TagHero tag={props.tag} />
    <div className="u-navPlaceholder" />
    <PostList posts={data} />
  </div>
};

JsonTag.propTypes = {
  route: PropTypes.object,
  tag: PropTypes.string.isRequired,
};

export default JsonTag;
