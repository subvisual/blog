import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

import Navigation from 'components/nav';
import PostPage from 'components/post_page';

class Md extends React.Component {
  get post() {
    return this.props.route.page.data;
  }

  renderMd() {
    return <div>
      <div className="u-navPlaceholder" />
      <div dangerouslySetInnerHTML={{ __html: this.post.body }} />
    </div>;
  }

  renderPost() {
    return <PostPage post={this.post} />;
  }

  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | ${this.post.title}`}
        />

        <Navigation light={!!this.post.cover} />

        {(this.post.author) ? this.renderPost() : this.renderMd()}
      </div>
    )
  }
}

Md.propTypes = {
  router: React.PropTypes.object,
}

export default Md;
