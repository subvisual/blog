import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

import _ from 'lodash';

import PostHero from '../components/post_hero';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },

  renderTags(tags) {
    return _.map(tags, (tag) => {
      const classes = `Tag Tag--${tag}`;

      return <div key={tag} className={classes}>{tag}</div>
    });
  },

  render () {
    const post = this.props.route.page.data
    return (
      <div>
        <PostHero {...post} />
        <div className="u-xSmallThenSmallMargin"></div>
        <div className="PostWidthConstrainer">
          {this.renderTags(post.tags)}
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
