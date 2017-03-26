import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from '../../components/nav';
import PostList from '../../components/post_list';

const JsonAuthor = props => {
  const data = props.route.page.data;

  return <div>
    <Helmet
      title={`${config.siteTitle} | ${data.title}`} 
    />
    <Navigation />
    <div className="u-navPlaceholder" />
    <PostList posts={data} />
  </div>
};

JsonAuthor.propTypes = {
  route: React.PropTypes.object,
};

export default JsonAuthor;
