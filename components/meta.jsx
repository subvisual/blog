import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Authors from '../data/authors.yaml';

class Meta extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    route: PropTypes.any,
    image: PropTypes.any,
    author: PropTypes.string,
    base: PropTypes.bool,
  }

  static defaultProps = {
    title: null,
    description: null,
    route: null,
    image: null,
    twitter: null,
    base: false,
  }

  renderBase() {
    if (!this.props.base) {
      return null;
    }

    return <Helmet>
      <meta name="author" content="Subvisual" />
      <meta property="og:app_id" content="169112516473978" />
      <meta property="fb:admins" content="169112516473978,1448175923" />
      <meta property="og:site_name" content="Subvisual Website" />
    </Helmet>
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    const fullTitle = `${config.siteTitle} | ${this.props.title}`;

    return <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta itemprop="name" content={fullTitle} />
    </Helmet>;
  }

  renderDescription() {
    if (!this.props.description) {
      return null;
    }

    return <Helmet>
      <meta name="description" content={this.props.description} />
      <meta property="twitter:description" content={this.props.description} />
      <meta itemprop="description" content={this.props.description} />

      <meta property="og:description" content={this.props.description} />
      <meta property="og:type" content="blog" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@subvisual" />
    </Helmet>;
  }

  renderUrl() {
    if (!this.props.route) {
      return null;
    }

    return <Helmet>
      <meta property="og:url" content={`${config.baseUrl}${this.props.route.path}`} />
    </Helmet>;
  }

  renderAuthor() {
    if (!this.props.author) {
      return null;
    }

    const authorData = Authors[this.props.author];

    return <Helmet>
      <meta name="author" content={authorData.name} />
      <meta property="twitter:creator" content={`@${authorData.twitter}`} />
    </Helmet>;
  }

  renderImage() {
    if (!this.props.image) {
      return null;
    }

    return <Helmet>
      <meta property="og:image" content={this.props.image} />
      <meta property="twitter:image" content={this.props.image} />
      <meta itemprop="image" content={this.props.image} />
    </Helmet>;
  }

  render() {
    return <div>
      {this.renderBase()}
      {this.renderTitle()}
      {this.renderUrl()}
      {this.renderImage()}
      {this.renderDescription()}
      {this.renderAuthor()}
    </div>;
  }
}

export default Meta;
