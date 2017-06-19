import React from 'react'
import 'css/markdown-styles.css'
import { config } from 'config'

import Meta from '../components/meta';
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
    return <PostPage postData={this.post} />;
  }

  render() {
    return (
      <div>
        <Meta base route={this.props.route} />
        {(this.post.author) ? this.renderPost() : this.renderMd()}
      </div>
    )
  }
}

Md.propTypes = {
  router: React.PropTypes.object,
}

export default Md;
