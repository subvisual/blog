import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },

  render () {
    const post = this.props.route.page.data
    return (
      <div>
        <PostHero {...post} />
        <div className="u-xSmallThenSmallMargin"></div>
        <div className="PostWidthConstrainer">
          <TagList tags={post.tags} />
        </div>
        <div className="u-smallThenDefaultMargin"></div>
        <div className="Post">
          <Helmet
            title={`${config.siteTitle} | ${post.title}`}
          />
          <div className="Post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
