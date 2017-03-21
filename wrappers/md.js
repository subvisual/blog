import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from 'components/nav/all';
import PostHero from '../components/post_hero';
import TagList from '../components/tag_list';

class Md extends React.Component {
  get post() {
    return this.props.route.page.data;
  }

  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | ${this.post.title}`}
        />

        <Navigation light={!!this.post.cover} />

        <PostHero {...this.post} />
        <div className="u-xSmallThenSmallMargin"></div>
        <div className="PostWidthConstrainer">
          <TagList tags={this.post.tags} />
        </div>
        <div className="u-smallThenDefaultMargin"></div>

        <div className="Post">
          <div className="Post-body" dangerouslySetInnerHTML={{ __html: this.post.body }} />
        </div>
      </div>
    )
  }
}

Md.propTypes = {
  router: React.PropTypes.object,
}

export default Md;
